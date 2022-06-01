import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
    // 네 가지 색 : #F9CC82 -> #E2B4BA -> #C6B5D7 -> #A7D0D7
    const [color, setColor ]= useState("#F9CC82");
    const side = useRef<any>(null);
    const inp1 = useRef<any>(null);
    const inp2 = useRef<any>(null);
    const btn = useRef<any>(null);

    // 3초마다 leftside의 배경색, input의 border-bottom 색 바꾸는 기능
    useEffect(() => {
        const interval = setInterval(() => {
            if(color === "#F9CC82") {
                setColor(color => "#E2B4BA");
            } else if(color === "#E2B4BA") setColor(color => "#C6B5D7");
            else if(color === "#C6B5D7") setColor(color => "#A7D0D7");
            else if(color === "#A7D0D7") setColor(color => "#F9CC82");
            side.current.style = `background-color: ${color};`;
            inp1.current.style = `border-bottom : 2px solid ${color}`
            inp2.current.style = `border-bottom : 2px solid ${color}`
            btn.current.style = `background-color:  ${color}`
        }, 3000);
        return () => clearInterval(interval);
    }, [color])
    return (
        <div className='signup-box'>
            <div ref={side} id='leftside' className='signup-leftside'>
                <img src='./main-logo.png' alt='logo' />
            </div>
            <form>
                <h1>로그인</h1>
                <input ref={inp1} className='input' type="email" placeholder='이메일을 입력해 주세요.' />
                <input ref={inp2} className='input' type="password" placeholder='비밀번호를 입력해 주세요.' />
                <div className='btn-box'>
                    <button ref={btn}>로그인</button>
                </div>
                <Link className='login-link' to="/signup">회원이 아니신가요?</Link>
            </form>
        </div>
    )
}