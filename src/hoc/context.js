import React from 'react';
import Context from './index';

const withContext = Component => {
  return function wrapper(props) {
    return (
      <Context.Conusmer>
        {context => <Component {...props} context={context}/>}
      </Context.Conusmer>
    );
  };
};

export default withContext;
