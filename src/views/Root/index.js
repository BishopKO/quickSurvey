import React, { useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
// import LoginRegister from 'components/LoginRegister';
import DesignSurvey from 'components/DesignSurvey';
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
      <DesignSurvey/>
    </MainTemplate>
  );
};

export default Root;
