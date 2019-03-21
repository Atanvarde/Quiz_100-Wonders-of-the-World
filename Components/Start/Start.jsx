import React from 'react';
import ReactDOM from 'react-dom';
import './Start.scss';
import Header from '../Start/Header/Header.jsx';
import Intro_image from '../Start/Intro_image/Intro_image.jsx';
import Start_button from '../Start/Start_button/Start_button.jsx';


class Start extends React.Component {
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

export default Start;