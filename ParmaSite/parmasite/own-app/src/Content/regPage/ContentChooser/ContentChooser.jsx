import React, {useState} from 'react';
import './ContentChooser.css';
import testImg from "../../unregPage/LogInWindow/ParmaTeam.jpg";
import DescriptionImage from "../DescriptionImage/DescriptionImage";
import StatsPage from "../../StatsPage/StatsPage";

const ContentChooser = () => {
  const [isActive,setActive] = useState(1)

  const [tests,setTests] = useState([
    {id: 1, frontImgSrc: testImg, backText: 'Description', state:true},
    {id: 2, frontImgSrc: testImg, backText: 'Description', state:true},
    {id: 3, frontImgSrc: testImg, backText: 'Description', state:false},
    {id: 4, frontImgSrc: testImg, backText: 'Description', state:true},
    {id: 5, frontImgSrc: testImg, backText: 'Description', state:false},
  ]);

    return (
      <div>
        <div className={"chooser__container"}>
            <a className={isActive === 1 ? "Active" : "notActive"} onClick={() => setActive(1)}>Доступные</a>
            <a className={isActive === 2 ? "Active" : "notActive"} onClick={() => setActive(2)}>Пройденные</a>
            <a className={isActive === 3 ? "Active" : "notActive"} onClick={() => setActive(3)}>Статистика</a>
        </div>
        <div className={isActive === 1 ? "d__block" : "d__block disabled"}>
          {tests.map((test) => (
            (test.state == true) ? (<DescriptionImage test={test} key={test.id}/>) : null
          ))}
        </div>

        <div className={isActive === 2 ? "d__block" : "d__block disabled"}>
          {tests.map((test) => (
            (test.state != true) ? (<DescriptionImage test={test} key={test.id}/>) : null
            ))}
        </div>

        <div className={isActive === 3 ? "d__block" : "d__block disabled"}>
          <StatsPage/>
        </div>
      </div>
    );
};

export default ContentChooser;