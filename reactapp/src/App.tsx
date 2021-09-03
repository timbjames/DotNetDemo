import React from 'react';
import ReduxToastr from 'react-redux-toastr';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from '@state/redux-store';
import ProviderWrapper from '@state/provider.component';
import PageRoot from '@pages/root.component';
import MainNavigation from '@pages/navigation/navigation.component';

const App: React.FC = () => {

  return (
    <ProviderWrapper store={store}>

        <MainNavigation />

        <div className="container mt-3">

          <PageRoot />

        </div>

      <ReduxToastr 
        timeOut={3000} 
        preventDuplicates 
        position="top-left" 
        transitionIn="fadeIn" 
        transitionOut="fadeOut" 
        closeOnToastrClick progressBar />

    </ProviderWrapper>
  );
}

export default App;