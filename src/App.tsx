import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import background from './assets/backgrounds/onboarding.svg';

import Onboarding from './components/Screens/Onboarding/Onboarding'
import Auth from './components/Screens/Onboarding/Auth';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
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
            <Route path="/login" component={() => <Auth login/>} />
            <Route path="/reg" component={() => <Auth registration/>} />
            <Route path="/onboarding" component={Onboarding} />
          </OnboardingBackground>
        </AppContainer>
      </Switch>
    </Router>
  );
}


export default App;
