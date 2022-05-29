import React, { useRef, useState } from 'react'

export default function SignUp() {
    const [color, setColor ]= useState("#F9CC82");
    const colorChange = useRef<any>(null);

    setInterval(() => {
        console.log(1)
        color === "#F9CC82" ? setColor("#E2B4BA") : setColor("#F9CC82");
        
        // console.log(color)
        // colorChange.current.style = `background-color: ${color};`
        // border-bottom: 2px solid ${color};
    }, 3000)

    return (
        <div className='signup-box'>
            <div ref={colorChange} id='leftside' className='signup-leftside'>
                <img src='./main-logo.png' alt='logo' />
            </div>
            <form>
                <h1>회원가입</h1>
                <input className='input' type="email" placeholder='이메일을 입력해 주세요.' />
                <input className='input' type="password" placeholder='비밀번호를 입력해 주세요.' />
                <input className='input' type="password" placeholder='비밀번호를 다시 한 번 입력해주세요.' />
                <input className='input' type="search" placeholder='학교를 선택해주세요.'/>
                <button>회원가입</button>
            </form>
        </div>
    )
}