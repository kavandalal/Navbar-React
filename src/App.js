import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore.js';
import About from './pages/About';
import Settings from './pages/Settings';
import History from './pages/History';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { linkData } from './components/SidebarData';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/explore' component={Explore}></Route>
					<Route exact path='/history' component={History}></Route>
					<Route exact path='/setting' component={Settings}></Route>
					<Route exact path='/about' component={About}></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
