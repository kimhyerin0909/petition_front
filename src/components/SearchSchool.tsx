import React, { useEffect } from 'react'
import axios from 'axios';

export default function SearchSchool() {
  const apiUrl = "https://open.neis.go.kr/hub/schoolInfo?Type=Json&ATPT_OFCDC_SC_CODE=C10&pSize=1000";
  const code =  "&KEY=06aca102a5ca40bea11660ce722f2069";
  useEffect(() => {
    axios.get(apiUrl + code)
    .then(res => JSON.parse(JSON.stringify(res)))
    .then(data => {
      let infos = data["data"].schoolInfo[1].row
      const schoolInfo = infos.map((data:any) => {
        return data["SCHUL_NM"];
      })
      // console.log(schoolInfo)
    })
  })
  return (
    <div className='school-select-window'>SearchSchool</div>
  )
}
