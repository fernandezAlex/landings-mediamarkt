import React from "react";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
//import { ThemeContext } from '../../context/ThemeProvider';


const Header = ({data}) => {

  //const {theme} = React.useContext(ThemeContext);
  const today = new Date();
  let title, breadcrumb;

  data.forEach(element => {
    let dateStart = new Date(element.dateStart);
    let dateEnd = new Date(element.dateEnd);
    if (today > dateStart && today < dateEnd){
      title = element.title;
      breadcrumb = element.breadcrumb;
    }
  });

  return (
    <>
      <div 
        className="header__container">
        <div className="--content"></div>
      </div>
      <div className="title__container">
        <div className="content">
          <h1 className="--title">{title}</h1>
          <div className="--breadcrumb">
              <Breadcrumb data={breadcrumb}/>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Header