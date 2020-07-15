import React, { useEffect } from 'react';
import MainTemplate from 'templates/MainTemplate';
import LoginRegister from 'components/LoginRegister';

const Root = () => {
  useEffect(() => {
    console.log(localStorage);
  });

  return (
    <MainTemplate>
      <LoginRegister/>
    </MainTemplate>
  );
};

export default Root;
