import React from 'react';

import IconButton from 'components/atoms/IconButton';
import pencilIcon from 'assets/pencil-alt.svg';
import linkIcon from 'assets/link.svg';
import chartPieIcon from 'assets/chart-pie.svg';

import pencilIconBlue from 'assets/pencil-alt-blue.svg';
import linkIconBlue from 'assets/link-blue.svg';
import chartPieIconBlue from 'assets/chart-pie-blue.svg';

import OptionsMenu from 'components/atoms/OptionsMenu';
import {
  StyledWrapperMobile,
  StyledStatusMobile,
  StyledSurveyMainMobile,
  StyledWrapperDesktop,
  StyledStatusDesktop,
  StyledSurveyMainDesktop,
  StyledOptions,
  StyledIconButton,
  StyledOptionsUl,
} from './Row.styles';


const Row = ({ mobile, active, activateOptions, number, open }) => {
  if (mobile) {
    return (
      <StyledWrapperMobile>
        <StyledStatusMobile active={active}/>
        <StyledSurveyMainMobile>
          <div><a href="">Survey title...</a></div>
          <div>Created: 12/07/2020 17:10</div>
          <div>
            <ul>
              <li><IconButton icon={pencilIcon}/></li>
              <li><IconButton icon={linkIcon}/></li>
              <li><IconButton icon={chartPieIcon}/></li>
            </ul>
          </div>
        </StyledSurveyMainMobile>
        <StyledOptions>
          <OptionsMenu mobile activateOptions={activateOptions} number={number} open={open}/>
        </StyledOptions>
      </StyledWrapperMobile>
    );
  } else {
    return (
      <StyledWrapperDesktop>
        <StyledStatusDesktop active={active}>
          <input type="checkbox" checked={active}/>
        </StyledStatusDesktop>


        <StyledSurveyMainDesktop>
          <a href="">Desktop example survey...</a>
          <span>Created: 12/07/2020 17:10</span>
        </StyledSurveyMainDesktop>

        <div>07/10/2002 22:19</div>

        <StyledOptionsUl>
          <li><StyledIconButton icon={pencilIconBlue}/></li>
          <li><StyledIconButton icon={linkIconBlue}/></li>
          <li><StyledIconButton icon={chartPieIconBlue}/></li>
        </StyledOptionsUl>


        <StyledOptions>
          <OptionsMenu activateOptions={activateOptions} number={number} open={open}/>
        </StyledOptions>
      </StyledWrapperDesktop>
    );
  }

};

export default Row;
