import React, {useEffect, useState} from 'react';
import "./LogIn.css";
import LoginIMG from "./ParmaTeam.jpg";

const users = [
  {
    username: 'maksim1',
    password: 'maksim2'
  },
  {
    username: 'sonya1',
    password: 'sonya2'
  },
  {
    username: 'vlada1',
    password: 'vlada2'
  },
  {
    username: 'gosha1',
    password: 'gosha2'
  }
]

const LogIn = ({active,setActive}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  const CheckUser = () => {
    const usercheck =  users.find(user => (user.username === email && user.password === password));
    if(usercheck){
      window.location.assign('http://localhost:3000/home');
    }else{
      let reg_input = document.querySelector('.reg__input');
      let pas_input = document.querySelector('.pas__input');
      pas_input.style.backgroundColor = '#F2BFBF';
      reg_input.style.backgroundColor = '#F2BFBF';
    }
  }

  return (
    <div className= {active ? 'modal active' : 'modal'} onClick = {() => setActive(false)}>
      <div className= {active ? 'modal__content active' : 'modal__content'} onClick = {e => e.stopPropagation()}>
        <div className={"reg__Login"}>
          <div className={"title__login"}>
            <div className={"reg__text"}>Логин</div>
            <input className={"reg__input"} placeholder={"Введите логин"} type={"login"} onChange={(e) => setEmail(e.target.value)}/>
            <div className={"reg__text"}>Пароль</div>
            <input className={"pas__input"} placeholder={"Введите пароль"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button className={"reg__btn"} onClick={CheckUser} type={"submit"}>Вход</button>
          </div>
        </div>
        <div className={"title__img"}>
          <img className={"reg__img"} src={LoginIMG}/>
        </div>
      </div>
    </div>
  );
};

export default LogIn;