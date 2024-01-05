/* eslint-disable */
import { fontSize } from "@mui/system";
import React, { useState, PureComponent } from "react";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CFormSelect,
  CRow,
  CCol,
  CContainer,
  CFormCheck,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
} from '@coreui/react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CChartLine, CChart } from '@coreui/react-chartjs'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Alerts = () => {


  //date picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
    //날짜 선택시 초기화
    setStartDate(new Date());
    setEndDate(new Date());
  };


  return (
    <div>
      {/* <ResponsiveContainer width="100%" height={500}> */}
      <h2 class="display-8">전력량 사용 현황</h2>
      <p class="lead">현재는 테스트용 UI로 실제 데이터가 연동되지 않았습니다.</p>
      <hr style={{ border: "solid 2px" }}></hr>


      <CContainer fluid>
        <CRow className="justify-content-start">
          <CCol>
            <span><b>본부</b></span>
            <CFormSelect
              style={{ width: '13rem' }}
              aria-label="Default select example"
              options={[
                '전체',
                { label: '강북/강원NW운용본부', value: '1' },
              ]}
            />
          </CCol>
          <CCol >
            <span><b>센터</b></span>
            <CFormSelect
              style={{ width: '13rem' }}
              aria-label="Default select example"
              options={[
                '전체',
                { label: '강북/강원코어운용센터', value: '1' },
              ]}
            />
          </CCol>
          <CCol >
            <span><b>팀</b></span>
            <CFormSelect
              style={{ width: '13rem' }}
              aria-label="Default select example"
              options={[
                '전체',
                { label: '전원기술부', value: '1' },
              ]}
            />
          </CCol>
          <CCol >
            <span><b>국사</b></span>
            <CFormSelect
              style={{ width: '13rem' }}
              aria-label="Default select example"
              options={[
                '전체',
                { label: '혜화', value: '1' },
              ]}
            />
          </CCol>
          <CCol >
            <span><b>기간</b></span>
            <CFormCheck
              type="radio"
              name="flexRadioDefault"
              id="day1"
              label="15분"
              onChange={handleRadioChange}
              checked={selectedRadio === "day1"}
            />
            <CFormCheck
              type="radio"
              name="flexRadioDefault"
              id="day2"
              label="30분"
              onChange={handleRadioChange}
              checked={selectedRadio === "day2"}
            />
            <CFormCheck
              type="radio"
              name="flexRadioDefault"
              id="day3"
              label="1시간"
              onChange={handleRadioChange}
              checked={selectedRadio === "day3"}
            />
            <CFormCheck
              type="radio"
              name="flexRadioDefault"
              id="day4"
              label="일별"
              onChange={handleRadioChange}
              checked={selectedRadio === "day4"}
            />
            <CFormCheck
              type="radio"
              name="flexRadioDefault"
              id="day5"
              label="월별"
              onChange={handleRadioChange}
              checked={selectedRadio === "day5"}
            />
            <CFormCheck
              type="radio"
              name="flexRadioDefault"
              id="day6"
              label="년별"
              onChange={handleRadioChange}
              checked={selectedRadio === "day6"}
            />
          </CCol>

          {selectedRadio === "day1" ||
            selectedRadio === "day2" ||
            selectedRadio === "day3" ? (
            <CCol>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </CCol>
          ) : null}

          {selectedRadio === "day4" ? (
            <>
              <CCol>
                <DatePicker
                  style={{ width: '30%' }}
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                <span style={{ marginLeft: '10px' }}>~</span>
                <DatePicker
                  style={{ width: '30%' }}
                  showIcon
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </CCol>
            </>
          ) : null}

          {selectedRadio === "day5" ? (
            <>
              <CCol>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
                <span style={{ marginLeft: '10px' }}>~</span>
                <DatePicker
                  showIcon
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </CCol>
            </>
          ) : null}

          {selectedRadio === "day6" ? (
            <>
              <CCol>
                <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy"
                  showYearPicker
                />
                <span style={{ marginLeft: '10px' }}>~</span>
                <DatePicker
                  showIcon
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy"
                  showYearPicker
                />
              </CCol>
            </>
          ) : null}



          <CCol>
            <CButton style={{ float: 'right' }} size="lg" color="success" variant="outline">조회</CButton>
          </CCol>
        </CRow>
        <br></br><br></br>
        <CRow>
          <CCard style={{ width: '100%' }}>
            <CCardBody>
              <CCardTitle><b>전력 사용량</b></CCardTitle>
              <CChart
                type="bar"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: '22년 전력 사용량',
                      backgroundColor: '#f87979',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    },
                    {
                      label: '23년 전력 사용량',
                      backgroundColor: '#FFFF00',
                      data: [50, 10, 53, 19, 30, 20, 19, 60, 50],
                    },
                  ],
                }}
                labels="months"
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        // color: getStyle('--cui-body-color'),
                      },
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const datasetLabel = context.dataset.label || '';
                          const value = context.parsed.y + ' KW';
                          return datasetLabel + ': ' + value;
                        },
                      },
                    },
                  },

                  scales: {
                    x: {
                      grid: {
                        // color: getStyle('--cui-border-color-translucent'),
                      },
                      ticks: {
                        // color: getStyle('--cui-body-color'),
                      },
                    },
                    y: {
                      grid: {
                        // color: getStyle('--cui-border-color-translucent'),
                      },
                      ticks: {
                        // color: getStyle('--cui-body-color'),
                        callback: (value) => value + 'KW', // 
                      },
                    },
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>







    </div>
  );
};

export default Alerts;