import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import styled from 'styled-components';
import background from './assets/backgrounds/onboarding.svg';

import Onboarding from './components/Screens/Onboarding'
import Auth from './components/Screens/Onboarding/Auth';
import AccountForm from './components/Screens/Onboarding/AccountForm';
import ForYou from './components/Screens/ForYou';
import Explore from './components/Screens/Explore';
import Search from './components/Screens/Search';
import Chat from './components/Screens/Chat';
import Book from './components/Screens/Book';
import Landing from './components/Screens/Landing';
import Header from './components/Blocks/Header';
import Footer from './components/Blocks/Footer';
import BottomTabNav from './components/Blocks/BottomTabNav';
import Community from './components/Screens/Community';
import Plans from './components/Screens/Plans';
import Challenges from './components/Screens/Challenges';
import Experiences from './components/Screens/Experiences';
import Members from './components/Screens/Members';
import Favourites from './components/Screens/Favourites';
import Profile from './components/Screens/Profile';
import Settings from './components/Screens/Profile/Settings';
import EditProfile from './components/Screens/Profile/Settings/EditProfile';
import Membership from './components/Screens/Profile/Settings/Membership';
import Notifications from './components/Screens/Profile/Settings/Notifications';
import Faqs from './components/Screens/Profile/Settings/Faqs';
import Privacy from './components/Screens/Profile/Settings/Privacy';
import ClassDetails from './components/Screens/ClassDetails';

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
					<Route exact path={[
						"/app/forYou",
						'/app/explore',
						'/app/book',
						'/app/chat',
						'/app/profile',
						'/app/community',
						'/landing',
						'/app/plans',
						'/app/challenges',
						'/app/experiences',
						'/app/members',
						'/app/favourites',
						'/app/profile/*',
					]} render={() => <Header />} />
					<Route exact path={[
						"/app/forYou",
						'/app/explore',
						'/app/book',
						'/app/chat',
						'/app/profile',
						'/app/community',
						'/landing',
						'/app/plans',
						'/app/challenges',
						'/app/experiences',
						'/app/members',
						'/app/favourites',
						'/app/profile/',
						'/app/class-details',
					]} render={() => <BottomTabNav />} />
					<OnboardingBackground>
						<Route exact path="/login" component={() => <Auth login />} />
						<Route exact path="/registration" component={() => <Auth registration />} />
						<Route exact path="/success" component={() => <Auth linkSent />} />
						<Route exact path="/create-account" component={() => <AccountForm />} />
						<Route exact path="/" component={Onboarding} />
					</OnboardingBackground>
					<Route exact path="/link" component={() => <Auth loginLink />} />
					<Route exact path='/app'>
						<Redirect to='/app/forYou' />
					</Route>
					<Route exact path='/app/forYou' component={() => <ForYou />} />
					<Route exact path='/app/explore' component={() => <Explore />} />
					<Route exact path='/app/community' component={() => <Community />} />
					<Route exact path='/app/plans' component={() => <Plans />} />
					<Route exact path='/app/challenges' component={() => <Challenges />} />
					<Route exact path='/app/experiences' component={() => <Experiences />} />
					<Route exact path='/app/members' component={() => <Members />} />
					<Route exact path='/app/favourites' component={() => <Favourites />} />
					<Route exact path='/app/search' component={() => <Search />} />
					<Route exact path='/app/book' component={() => <Book />} />
					<Route exact path='/app/book/book-appointment' component={() => <Book />} />
					<Route exact path='/app/book/filters' component={() => <Book />} />
					<Route exact path='/app/chat' component={() => <Chat />} />
					<Route exact path='/app/chat/dialog' component={() => <Chat />} />
					<Route exact path='/app/chat/group' component={() => <Chat />} />
					<Route exact path='/app/profile' component={() => <Profile />} />
					<Route exact path='/app/profile/settings' component={() => <Settings />} />
					<Route exact path='/app/profile/settings/edit-profile' component={() => <EditProfile />} />
					<Route exact path='/app/profile/settings/membership' component={() => <Membership />} />
					<Route exact path='/app/profile/settings/notifications' component={() => <Notifications />} />
					<Route exact path='/app/profile/settings/faqs' component={() => <Faqs />} />
					<Route exact path='/app/profile/settings/privacy-policy' component={() => <Privacy />} />
					<Route exact path='/app/class-details' component={() => <ClassDetails />} />
					<Route exact path='/landing' component={() => <Landing />} />
					{/* <Route exact path='/app/chat' component={() => <ForYou />} /> */}
					{/* <Route exact path='/app/profile' component={() => <ForYou />} /> */}
					<Route exact path={[
						"/app/forYou",
						'/app/explore',
						'/app/book',
						'/app/profile',
						'/app/community',
						'/landing',
						'/app/plans',
						'/app/challenges',
						'/app/experiences',
						'/app/members',
						'/app/favourites',
						'/app/profile/*',
						'/app/class-details',
					]} render={() => (
						<Footer terms />
					)} />
				</AppContainer>
			</Switch>
		</Router>
	);
}


export default App;
