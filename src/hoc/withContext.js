import React from 'react';
import Context from './index';

const withContext = Component => {
  return function wrapper(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context}/>}
      </Context.Consumer>
    );
  };
};

export default withContext;
