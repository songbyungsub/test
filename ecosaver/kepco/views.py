from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
from datetime import date, timedelta, datetime
import pandas as pd
from kepco.models import *

# Create your views here.

# 15분 전력 데이터 읽기
def crawling_kepco_power(request):

    affairs_all = affairs.objects.all()

    for affa in affairs_all:

        # print(affa.cust_no)
        # print(affa.affairs)

        enddate = datetime.now()
        str_date = enddate.strftime("%Y%m%d%H%M")

        crawl_date = str_date[:10] + str((int(str_date[10:])//15)*15)

        crawl_date = '202401051000'

        kepco_url = f'https://opm.kepco.co.kr:11080/OpenAPI/getMinuteLpData.do?custNo={affa.cust_no}&dateTime={crawl_date}&serviceKey=bpb89eyd7bg430vckh8t&returnType=02'
    
        try:
            resp = requests.get(url=kepco_url)
            json_data = json.loads(resp.text)
            dict_data = json_data['minuteLpDataInfoList'][0]
            try:
                if json_data['minuteLpDataInfoList'][1]['returnCode'] == 'openapi-4001' :
                    print(affa.cust_no)
                    print(affa.affairs)
                    print('서비스 안됨')
                if json_data['minuteLpDataInfoList'][1]['returnCode'] == 'openapi-9001' :
                    print(affa.cust_no)
                    print(affa.affairs)
                    print('전력데이터 없음')
            except:
                pass
            
            kepco_power_list = list((dict_data).keys())

            for powlist in kepco_power_list :
                if 'pwr_qty' in str(powlist) :
                    temp_power = affairspower(
                        affairs_uuid = affa,
                        affairs = affa.affairs,
                        power = dict_data[powlist],
                        affairtime = str(affa.affairs)+crawl_date+str(powlist[7:]),
                    )
                    temp_power.save()
        except Exception as e :
            print(str(e))

    return JsonResponse({'returnCode' : "ok"})

# 국사 데이터 DB에 저장
def writeaffairs(request):
    affaris_data = pd.read_csv('kepcolist.csv',dtype='str')
    print(len(affaris_data))
    for i in range(len(affaris_data)):
        print(affaris_data['국사'][i])
        affaris_object = affairs(
            headquarter = affaris_data['본부명'][i],
            center = affaris_data['센터'][i],
            team = affaris_data['팀'][i],
            affairs = affaris_data['국사'][i],
            cust_no = affaris_data['고객번호'][i],
            contract = affaris_data['구분1'][i],
            powertocost = affaris_data['구분'][i],
        )
        affaris_object.save()
    return JsonResponse({'returnCode' : "ok"})

# 2년치 국사별 전력데이터 저장
def crawl_yearpower(request):
    affairs_all = affairs.objects.all()
    for affa in affairs_all:
        if '강북' in str(affa.headquarter) :
            print(affa.cust_no)
            print(affa.affairs)
            enddate = date.today()
            daterange = timedelta(days=1)
            startdate = enddate - timedelta(days=10)

            while(1) :
                enddate = (enddate-daterange)
                str_date = enddate.strftime("%Y%m%d")

                print(str_date)

                kepco_url = f'https://opm.kepco.co.kr:11080/OpenAPI/getDayLpData.do?custNo={affa.cust_no}&date={str_date}&serviceKey=bpb89eyd7bg430vckh8t&returnType=02'
            
                try:
                    resp = requests.get(url=kepco_url)
                    json_data = json.loads(resp.text)
                    dict_data = json_data['dayLpDataInfoList'][0]
                    
                    kepco_power_list = list((dict_data).keys())

                    for powlist in kepco_power_list :
                        if 'pwr_qty' in str(powlist) :
                            temp_power = affairspower(
                                affairs_uuid = affa,
                                affairs = affa.affairs,
                                power = dict_data[powlist],
                                affairtime = str(affa.affairs)+str_date+str(powlist[7:]),
                            )
                            temp_power.save()
                except Exception as e :
                    print(str(e))
                if enddate == startdate :
                    break
    return JsonResponse({'returnCode' : "ok"})