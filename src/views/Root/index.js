import React, { useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate';
// import LoginRegister from 'components/LoginRegister';
import DesignSurvey from 'components/DesignSurvey';
import SurveyMainPanel from 'components/SurveysMainPanel';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Switch>
          <Route path="/panel" component={() => <SurveyMainPanel/>}/>
          <Route path="/panel-mobile" component={() => <SurveyMainPanel mobile/>}/>
          <Route path="/design" component={() => <DesignSurvey/>}/>
        </Switch>
      </BrowserRouter>
    </MainTemplate>

  );
};

export default Root;
