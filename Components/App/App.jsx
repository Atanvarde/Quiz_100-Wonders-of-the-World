import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Start from '../Start/Start.jsx';
import Quiz from "../Quiz/Quiz.jsx";
import End from '../End/End.jsx';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Start}/>
                    <Route exact path='/quiz' component={Quiz}/>
                    <Route exact path='/end' component={End}/>
                </div>
            </HashRouter>
        )
    }
}

export default App;