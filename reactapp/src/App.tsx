import React from 'react';
import ReduxToastr from 'react-redux-toastr';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import store from '@state/redux-store';
import ProviderWrapper from '@state/provider.component';
import PageRoot from '@pages/root.component';
import MainNavigation from '@pages/navigation/navigation.component';

import toast, { Toaster, ToastBar } from 'react-hot-toast';

const App: React.FC = () => {

  const notify = () => toast('Here I am baby!');

  return (
    <ProviderWrapper store={store}>

        <MainNavigation />

        <div className="container mt-3">

          <PageRoot />

          <button  type="button" onClick={notify}>Click Me</button>

        </div>

      <ReduxToastr 
        timeOut={3000} 
        preventDuplicates 
        position="bottom-right" 
        transitionIn="fadeIn" 
        transitionOut="fadeOut" 
        closeOnToastrClick progressBar />

      <Toaster>
        {
          (t) => (
            <ToastBar toast={t}>
              {
                ({ icon, message }) => (
                  <>
                    {icon}
                    {message} boooooo
                  </>
                )
              }
            </ToastBar>
          )
        }
      </Toaster>

    </ProviderWrapper>
  );
}

export default App;