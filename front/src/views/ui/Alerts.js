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
  CButton
} from '@coreui/react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '혜화',
    작년: 4000,
    올해: 2400,
    amt: 2400,
  },
  {
    name: '아현',
    작년: 3000,
    올해: 1398,
    amt: 2210,
  },
  {
    name: '용산',
    작년: 2000,
    올해: 9800,
    amt: 2290,
  },
  {
    name: '은평',
    작년: 2780,
    올해: 3908,
    amt: 2000,
  },
  {
    name: '성수',
    작년: 1890,
    올해: 4800,
    amt: 2181,
  },
  {
    name: '행당',
    작년: 2390,
    올해: 3800,
    amt: 2500,
  },
  {
    name: '전농',
    작년: 3490,
    올해: 4300,
    amt: 2100,
  },
];


const Alerts = () => {


  //date picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <h2 class="display-8">전력량 사용 현황</h2>
        <p class="lead">현재는 테스트용 UI로 실제 데이터가 연동되지 않았습니다.</p>
        <hr style={{ border: "solid 2px" }}></hr>


        <CContainer>
          <CRow className="justify-content-start">
            <CCol>
              <span><b>본부</b></span>
              <CFormSelect
                style={{ width: '10rem' }}
                aria-label="Default select example"
                options={[
                  '전체',
                  { label: '강북/강원NW운용본부', value: '1' },
                  // { label: '강남/서부NW운용본부', value: '2' },
                  // { label: '부산/경남NW운용본부', value: '3' },
                  // { label: '대구/경북NW운용본부', value: '4' },
                  // { label: '전남/전북NW운용본부', value: '5' },
                  // { label: '충남/충북NW운용본부', value: '6' },
                  // { label: '제주단', value: '7' },
                  // { label: '인프라서비스단', value: '8' },
                  // { label: '기타', value: '9' },

                ]}
              />
            </CCol>
            <CCol >
              <span><b>센터</b></span>
              <CFormSelect
                style={{ width: '10rem' }}
                aria-label="Default select example"
                options={[
                  '전체',
                  { label: '강북/강원코어운용센터', value: '1' },
                  // { label: '강남/서부NW운용본부', value: '2' },
                  // { label: '부산/경남NW운용본부', value: '3' },
                  // { label: '대구/경북NW운용본부', value: '4' },
                  // { label: '전남/전북NW운용본부', value: '5' },
                  // { label: '충남/충북NW운용본부', value: '6' },
                  // { label: '제주단', value: '7' },
                  // { label: '인프라서비스단', value: '8' },
                  // { label: '기타', value: '9' },

                ]}
              />
            </CCol>
            <CCol >
              <span><b>팀</b></span>
              <CFormSelect
                style={{ width: '10rem' }}
                aria-label="Default select example"
                options={[
                  '전체',
                  { label: '전원기술부', value: '1' },
                  // { label: '강남/서부NW운용본부', value: '2' },
                  // { label: '부산/경남NW운용본부', value: '3' },
                  // { label: '대구/경북NW운용본부', value: '4' },
                  // { label: '전남/전북NW운용본부', value: '5' },
                  // { label: '충남/충북NW운용본부', value: '6' },
                  // { label: '제주단', value: '7' },
                  // { label: '인프라서비스단', value: '8' },
                  // { label: '기타', value: '9' },

                ]}
              />
            </CCol>
            <CCol >
              <span><b>국사</b></span>
              <CFormSelect
                style={{ width: '10rem' }}
                aria-label="Default select example"
                options={[
                  '전체',
                  { label: '혜화', value: '1' },
                  // { label: '강남/서부NW운용본부', value: '2' },
                  // { label: '부산/경남NW운용본부', value: '3' },
                  // { label: '대구/경북NW운용본부', value: '4' },
                  // { label: '전남/전북NW운용본부', value: '5' },
                  // { label: '충남/충북NW운용본부', value: '6' },
                  // { label: '제주단', value: '7' },
                  // { label: '인프라서비스단', value: '8' },
                  // { label: '기타', value: '9' },

                ]}
              />
            </CCol>
            <CCol >
              <span><b>기간</b></span>
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="15분" />
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="30분" />
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault3" label="1시간" />
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault4" label="일별" />
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault5" label="월별" />
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault6" label="년별" />
            </CCol>

            <CCol>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <span>~</span>
              <DatePicker
                showIcon
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </CCol>

            <CCol >
              <CButton color="success" variant="outline">조회</CButton>
            </CCol>
          </CRow>
        </CContainer>




        <br></br><br></br>

        <BarChart
          data={data}
          margin={{
            top: 5,
            // right: 30,
            // left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="작년" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="올해" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Alerts;


//15분, 30분, 1시간 일때
// const [startDate, setStartDate] = useState(new Date());

// <DatePicker
//       showIcon
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//     />

//일별 일때
// const [startDate, setStartDate] = useState(new Date());
// const [endDate, setEndDate] = useState(new Date());

// <DatePicker
// showIcon
// selected={startDate}
// onChange={(date) => setStartDate(date)}
// selectsStart
// startDate={startDate}
// endDate={endDate}
// />
// <span>~</span>
// <DatePicker
// showIcon
// selected={endDate}
// onChange={(date) => setEndDate(date)}
// selectsEnd
// startDate={startDate}
// endDate={endDate}
// minDate={startDate}
// />

//월별 일때
// const [startDate, setStartDate] = useState(new Date("2014/02/08"));
// const [endDate, setEndDate] = useState(new Date("2014/04/08"));
// return (
//   <>
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       selectsStart
//       startDate={startDate}
//       endDate={endDate}
//       dateFormat="MM/yyyy"
//       showMonthYearPicker
//     />
//     <DatePicker
//       selected={endDate}
//       onChange={(date) => setEndDate(date)}
//       selectsEnd
//       startDate={startDate}
//       endDate={endDate}
//       dateFormat="MM/yyyy"
//       showMonthYearPicker
//     />
//   </>
// );

//년도별 일때
// const [startDate, setStartDate] = useState(new Date("2014/02/08"));
// const [endDate, setEndDate] = useState(new Date("2024/04/08"));
// return (
//   <>
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       selectsStart
//       startDate={startDate}
//       endDate={endDate}
//       dateFormat="yyyy"
//       showYearPicker
//     />
//     <DatePicker
//       selected={endDate}
//       onChange={(date) => setEndDate(date)}
//       selectsEnd
//       startDate={startDate}
//       endDate={endDate}
//       dateFormat="yyyy"
//       showYearPicker
//     />
//   </>
// );