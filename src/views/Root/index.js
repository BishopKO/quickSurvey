import React, { useEffect } from 'react';
import MainTemplate from 'templates/MainTemplate';
import LoginRegister from 'components/LoginRegister';
import SurveyMainPanel from 'components/SurveysMainPanel';

const Root = () => {
  useEffect(() => {
    console.log(localStorage);
  });

  return (
    <MainTemplate>
      <LoginRegister/>
      <SurveyMainPanel mobile/>
    </MainTemplate>
  );
};

export default Root;
