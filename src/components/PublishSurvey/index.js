import React, { createRef } from 'react';
import linkIcon from 'assets/link.svg';
import { StyledWrapperMobile, StyledIconButton, StyledBigButton, StyledParagraph } from './PublishSurvey.styles';


const PublishSurvey = ({ mobile }) => {
  const linkRef = createRef(null);

  const handleToClipboard = () => {
    linkRef.current.select();
    document.execCommand('copy');
  };

  if (mobile) {
    return (
      <StyledWrapperMobile>
        <div>
          <span>Publish Survey</span>
        </div>
        <div>
          <input ref={linkRef} defaultValue="http://quick-survey.com/sample-link"/>
          <StyledIconButton onClick={handleToClipboard} icon={linkIcon}/>
        </div>
        <div>Current Status: <StyledParagraph open>Open</StyledParagraph></div>
        <div>
          <StyledBigButton>CLOSED</StyledBigButton>
          <StyledBigButton open>OPEN</StyledBigButton>
        </div>
      </StyledWrapperMobile>
    );
  } else {
    return (<div>Desktop</div>);
  }
};

export default PublishSurvey;
