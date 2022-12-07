import React, {useState} from 'react';
import logo from "../ParmaLogo.svg";
import LogIn from "../Content/unregPage/LogInWindow/LogIn";
import Tail from "../Content/Tail/Tail";

const UnregPageJs = () => {
    const [loginActive, setLoginActive] = useState(false);
    return (
      <div>
        <div className={"container"}>
            <div className = "header">
                <img src={logo} className = "Parma__Logo" alt="logo"/>
                <a className= "Worker__info" onClick={() => setLoginActive(true)}>
                    <div className={"Login"}>Вход</div>
                </a>
            </div>
            <h1 className={"Title__Text"}>
                Узнай  побольше о компании в первые дни работы!
            </h1>
            <h2 className={"Unreg__PageContext"}>
                Для начала своего пути в нашей компании, просто авторизуйтесь в системе для получения доступа к тестам.
            </h2>
            <LogIn active={loginActive} setActive={setLoginActive}/>
        </div>
        <Tail/>
      </div>
    );
};

export default UnregPageJs;