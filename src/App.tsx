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
import Explore from './components/Screens/Explore/Explore';
import Search from './components/Screens/App/Search';
import Chat from './components/Screens/Chat';
import Book from './components/Screens/App/Book';
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

	// const [headerTab, setHeaderTab] = useState('for_you')
	// const [headerBottomTab, setHeaderBottomTab] = useState('fitness')

	return (
		<Router>
			<Switch>
				<AppContainer>
					<Route exact path={["/app/forYou", '/app/explore', '/app/book', '/app/chat', '/app/profile']} render={() => (
						<>
							<Header />
							<BottomTabNav />
						</>
					)} />
					<OnboardingBackground>
						<Route exact path="/login" component={() => <Auth login />} />
						<Route exact path="/reg" component={() => <Auth registration />} />
						<Route exact path="/suc" component={() => <Auth linkSent />} />
						<Route exact path="/ac" component={() => <AccountForm />} />
						<Route exact path="/" component={Onboarding} />
					</OnboardingBackground>
					<Route exact path="/link" component={() => <Auth loginLink />} />
					<Route exact path='/app/forYou' component={() => <ForYou />} />
					<Route exact path='/app/explore' component={() => <Explore />} />
					<Route exact path='/app/search' component={Search} />
					<Route exact path='/app/book' component={Book} />
					<Route exact path='/app/book/book-appointment' component={Book} />
					<Route exact path='/app/book/filters' component={Book} />
					<Route exact path='/app/chat' component={Chat} />
					<Route exact path='/app/chat/dialog' component={Chat} />
					<Route exact path='/app/chat/group' component={Chat} />
					{/* <Route exact path='/app/chat' component={() => <ForYou />} /> */}
					{/* <Route exact path='/app/profile' component={() => <ForYou />} /> */}
					<Route exact path={["/app/forYou", '/app/explore', '/app/book', '/app/profile']} render={() => (
						<Footer terms />
					)} />
				</AppContainer>
			</Switch>
		</Router>
	);
}


export default App;
