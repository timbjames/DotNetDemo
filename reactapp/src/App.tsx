import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';

import store from './state/redux-store';

import './App.css';

import { PersonList } from './features/person/components/List';

const App: React.FC = () => {

  return (
    <Provider store={store}>

      <>
        <div id="container">

          <div>Hello World</div>

          <PersonList isSearch={false} />

          <PersonList isSearch={true} />

        </div>

        <ReduxToastr 
                    timeOut={3000} 
                    preventDuplicates 
                    position="top-left" 
                    transitionIn="fadeIn" 
                    transitionOut="fadeOut" 
                    closeOnToastrClick progressBar />
      </>

    </Provider>
  );
}

export default App;