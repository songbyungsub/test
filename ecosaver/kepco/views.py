from django.shortcuts import render
from django.http import JsonResponse
import requests
import json
from datetime import date, timedelta
import pandas as pd
from kepco.models import *

# Create your views here.

def crawling_kepco_power(request):
    minute_list = ['00','15','30','45']
    cust_list = ['0135338560']
    temp_object = affairs.objects.filter(cust_no=cust_list[0])

    enddate = date.today()
    daterange = timedelta(days=1)
    startdate = enddate - timedelta(days=733)

    while(1) :
        enddate = (enddate-daterange)
        for i in range(24):
            dateTime = enddate.strftime("%Y%m%d")
            if len(str(i)) == 1 :
                hourTime = dateTime + "0"
            hourTime = dateTime + str(i)
            for tim in minute_list :
                if (i == 0) & (tim == '00') :
                    lasttime = dateTime + '2400'
                else:
                    lasttime = hourTime + tim
                kepco_url = f'https://opm.kepco.co.kr:11080/OpenAPI/getMinuteLpData.do?custNo={temp_object[0].cust_no}&dateTime={lasttime}&serviceKey=bpb89eyd7bg430vckh8t&returnType=02'
            
                try:
                    resp = requests.get(url=kepco_url)
                    json_data = json.loads(resp.text)
                    print(json_data)
                    minutepower_list = json_data['minuteLpDataInfoList'][0]
                    temp_power = affairspower(
                        affairs_uuid = temp_object[0],
                        affairs = temp_object[0].affairs,
                        power = minutepower_list['pwr_qty'],
                        time = str(minutepower_list['mr_ymd'])+str(minutepower_list['mr_hhmi']),
                    )
                    temp_power.save()
                except Exception as e :
                    print(str(e))
        if enddate == startdate :
            break
    return JsonResponse({'returnCode' : "ok"})

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

def test_daypower(request):
    kepco_url = 'https://opm.kepco.co.kr:11080/OpenAPI/getDayLpData.do?custNo=0135338560&date=20240103&serviceKey=bpb89eyd7bg430vckh8t&returnType=02'
    
    try:
        resp = requests.get(url=kepco_url)
        json_data = json.loads(resp.text)
        print(json_data['dayLpDataInfoList'][0])
    except Exception as e :
        print(str(e))
    return JsonResponse({'returnCode' : "ok"})