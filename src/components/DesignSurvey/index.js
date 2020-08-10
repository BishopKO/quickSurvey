import React, { useEffect, useState } from 'react';
import IconButtonWithLabel from 'components/atoms/IconButtonWithLabel';
import penIcon from 'assets/pencil-alt.svg';
import themeIcon from 'assets/palette.svg';
import toolIcon from 'assets/tools.svg';
import sortIcon from 'assets/sort.svg';
import { StyledWrapper, StyledNav, StyledUl, StyledLi } from './styles/DesignSurvey.styles';
import TitleBar from './TitleBar';
import AddQuestion from './AddQuestion';

const DesignSurvey = () => {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

  }, []);

  const [currentScale, setScale] = useState(1);

  const handleResize = () => {
    let scale = (window.outerWidth / 300);
    if (window.outerWidth < 900) {
      setScale(scale);
    } else {
      setScale(3);
    }
    console.log(window.outerWidth);
  };

  return (
    <StyledWrapper scale={currentScale}>
      <StyledNav>
        <span>Survey Design</span>
        <StyledUl>
          <StyledLi>
            <IconButtonWithLabel icon={penIcon} label="Design"/>
          </StyledLi>
          <StyledLi>
            <IconButtonWithLabel icon={themeIcon} label="Theme"/>
          </StyledLi>
          <StyledLi>
            <IconButtonWithLabel icon={sortIcon} label="Organise"/>
          </StyledLi>
          <StyledLi>
            <IconButtonWithLabel icon={toolIcon} label="Settings"/>
          </StyledLi>
        </StyledUl>
      </StyledNav>
      <TitleBar/>
      <AddQuestion/>


    </StyledWrapper>

  );
};

export default DesignSurvey;
