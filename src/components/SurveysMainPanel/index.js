import React, { useState } from 'react';
import Row from './Row';
import SearchInput from 'components/atoms/SearchInput';
import BigButton from 'components/atoms/BigButton';
import { StyledWrapper, StyledPanelHead, StyledPanelTop, StyledPanelMobile } from './SurveyMainPanel.styles';


const SurveysMainPanel = ({ mobile }) => {
  const [currentOptions, setCurrentOptions] = useState(null);

  const handleShowOptions = (val) => {
    if (val === currentOptions) {
      setCurrentOptions(null);
    } else {
      setCurrentOptions(val);
    }
  };

  if (mobile) {
    return (
      <StyledWrapper mobile>
        <StyledPanelTop>
          <p>All Surveys</p>
          <SearchInput mobile/>
        </StyledPanelTop>
        <StyledPanelMobile>
          <StyledPanelHead mobile>
            <div></div>
            <div>
              <a href=".">Survey Title</a>
              <span>  /  </span>
              <a href=".">Date Created</a>
            </div>
            <div>Options</div>
          </StyledPanelHead>
          <Row mobile active activateOptions={handleShowOptions} number={0} open={currentOptions === 0}/>
          <Row mobile activateOptions={handleShowOptions} number={1} open={currentOptions === 1}/>
        </StyledPanelMobile>
      </StyledWrapper>);
  } else {
    return (
      <StyledWrapper desktop>
        <StyledPanelTop>
          <p>All Surveys</p>
          <SearchInput desktop/>
        </StyledPanelTop>
        <StyledPanelHead desktop>
          <div>Status</div>
          <div>
            <a href=".">Survey Title</a>
            <span>  /  </span>
            <a href=".">Date Created</a></div>
          <div>Last Modified</div>
          <div>Design Publish Results</div>
          <div>Options</div>
        </StyledPanelHead>
        <Row active activateOptions={handleShowOptions} number={0} open={currentOptions === 0}/>
        <Row activateOptions={handleShowOptions} number={1} open={currentOptions === 1}/>
      </StyledWrapper>
    );
  }

};

export default SurveysMainPanel;
