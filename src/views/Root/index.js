import React, { useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
// import LoginRegister from 'components/LoginRegister';
import SurveyMainPanel from 'components/SurveysMainPanel';

const Root = () => {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const [width, setWidth] = useState(window.innerWidth);


  return (
    <MainTemplate>
      {width > 600 &&
      <SurveyMainPanel desktop/>
      }
      {width <= 600 &&
      <SurveyMainPanel mobile/>
      }
    </MainTemplate>
  );
};

export default Root;
