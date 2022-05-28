import React, { useEffect, useState } from 'react'

export default function SignUp() {
    const [color, setColor] = useState("orange");

    setInterval(() => {
        if(color === "orange") setColor("pink")
        else if(color === "pink") setColor("purple")
        else if(color === "purple") setColor("orange");

    }, 3000);

    return (
        <div className='signup-box'>
            <section className='signup-leftside'>
                <img src='./main-logo.png' alt='logo' />
            </section>
            <form>
                <h1>회원가입</h1>
                <input type="email" placeholder='이메일을 입력해 주세요.' />
                <input type="password" placeholder='비밀번호를 입력해 주세요.' />
                <input type="password" placeholder='비밀번호를 다시 한 번 입력해주세요.' />
                <input type="search" placeholder='학교를 선택해주세요.'/>
                <button>회원가입</button>
            </form>
        </div>
    )
}