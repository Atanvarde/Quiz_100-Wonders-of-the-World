import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Header from '../Header/Header.jsx';
import Intro_image from '../Intro_image/Intro_image.jsx';
import Start_button from '../Start_button/Start_button.jsx';



class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Intro_image/>
                <Start_button/>
            </div>

        )
    }
}

export default App;