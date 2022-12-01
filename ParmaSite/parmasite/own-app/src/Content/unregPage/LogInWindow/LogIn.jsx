import React, {useEffect, useState} from 'react';
import "./LogIn.css";
import LoginIMG from "./ParmaTeam.jpg";


const LogIn = ({active,setActive}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Hokage-git/Practika_Project/tree/main/ParmaSite/parmasite')
      .then(res => {
        return res.json()
      })
      .then(userData => {
        setUsers(userData)
      });
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  const CheckUser = () => {
    console.log(users);
    const userCheck = users.find(user => (users.username === email && users.password === password));
    if(userCheck){
      window.location.assign('http://localhost:3000/home');
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
            <input className={"reg__input"} placeholder={"Введите пароль"} type={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button className={"reg__btn"} onClick={CheckUser} type={"submit"}>Вход</button>
          </div>
        </div>
        <div className={"title__img"}>
          <img className={"reg__img"} src={LoginIMG}/>
        </div>
      </div>
    </div>
  );
}

export default LogIn;