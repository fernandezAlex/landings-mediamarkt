import React from "react";
// import analytics from '../../helpers/analytics';


const CardText = ({ title, subtitle }) => {


  return (
    <React.Fragment>
      <div key={title} className="cardText__container">
                        <div className="--title">
                            <p className="--title__card">
                                {title}
                            </p>
                        </div>
                        <div className="--subtitle">
                            <p className="--subtitle__card">
                            {subtitle}
                            </p>
                        </div>
      </div>
    </React.Fragment>
  );
};

export default CardText;
