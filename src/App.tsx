import React, { useState } from 'react';
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
import Explore from './components/Screens/Explore/Explore';
import Header from './components/Blocks/Global/Header';
import BottomTabNav from './components/Blocks/Global/BottomTabNav'
import Footer from './components/Blocks/Global/Footer';

const AppContainer = styled.div`
	width: 100%;
`
const OnboardingBackground = styled.div`
	background: url(${background});
	background-size: cover;
`

function App(): JSX.Element {

	const [headerTab, setHeaderTab] = useState('for_you')
	const [headerBottomTab, setHeaderBottomTab] = useState('fitness')

	const headerTabs = [{
		id: 'for_you',
		title: 'For You',
	},{
		id: 'expore',
		title: 'Explore',
	},{
		id: 'book',
		title: 'Book',
	},{
		id: 'chat',
		title: 'Chat',
	},{
		id: 'profile',
		title: 'Profile',
	}]

	const headerBottomTabs = [{
		id: 'fitness',
		title: 'Fitness'
	}, {
		id: 'experiences',
		title: 'Experiences'
	}]

	return (
	<Router>
		<Switch>
		<AppContainer>
			<Route path="/app/:appPage" render={() => (
				<>
					<Header search/>
					<BottomTabNav />
				</>
			)} />
			<OnboardingBackground>
				<Route exact path="/login" component={() => <Auth login/>} />
				<Route exact path="/reg" component={() => <Auth registration/>} />
				<Route exact path="/suc" component={() => <Auth linkSent/>} />
				<Route exact path="/ac" component={() => <AccountForm />} />
				<Route exact path="/"  component={Onboarding} />
			</OnboardingBackground>
			<Route exact path="/app/link" component={() => <Auth loginLink/>} />
			<Route exact path='/app/forYou' component={() => <ForYou />} />
			<Route exact path='/app/explore' component={() => <Explore />} />
			{/* <Route exact path='/app/book' component={() => <ForYou />} />
			<Route exact path='/app/chat' component={() => <ForYou />} />
			<Route exact path='/app/profile' component={() => <ForYou />} /> */}
			<Route path="/app/:appPage" render={() => (
				<>
					<Footer terms/>
				</>
			)} />
		</AppContainer>
		</Switch>
	</Router>
	);
}


export default App;
