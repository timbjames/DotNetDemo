import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './state/redux-store';
import PageRoot from '@pages/root.component';
import MainNavigation from '@pages/navigation.component';

const App: React.FC = () => {

  return (
    <Provider store={store}>

      <Router>

        <MainNavigation />

        <div className="container mt-3">

          <PageRoot />

        </div>

      </Router>

      <ReduxToastr 
        timeOut={3000} 
        preventDuplicates 
        position="top-left" 
        transitionIn="fadeIn" 
        transitionOut="fadeOut" 
        closeOnToastrClick progressBar />

    </Provider>
  );
}

export default App;