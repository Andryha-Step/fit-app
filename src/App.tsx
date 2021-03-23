import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import background from './assets/backgrounds/onboarding.svg';

import Onboarding from './components/Screens/Onboarding/Onboarding'
import Auth from './components/Screens/Onboarding/Auth';
import AccountForm from './components/Screens/Onboarding/AccountForm';
import ForYou from './components/Screens/ForYou/ForYou';

const AppContainer = styled.div`
  width: 100%;
`
const OnboardingBackground = styled.div`
  background: url(${background});
  background-size: cover;
`

function App(): JSX.Element {

  return (
    <Router>
      <Switch>
        <AppContainer>
          <OnboardingBackground>
            <Route exact path="/login" component={() => <Auth login/>} />
            <Route exact path="/reg" component={() => <Auth registration/>} />
            <Route exact path="/suc" component={() => <Auth linkSent/>} />
            <Route exact path="/ac" component={() => <AccountForm />} />
            <Route exact path="/"  component={Onboarding} />
          </OnboardingBackground>
          <Route exact path="/link" component={() => <Auth loginLink/>} />
          <Route exact path='/forYou' component={() => <ForYou />} />
        </AppContainer>
      </Switch>
    </Router>
  );
}


export default App;
