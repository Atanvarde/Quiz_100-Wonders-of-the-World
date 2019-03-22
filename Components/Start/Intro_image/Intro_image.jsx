import React from 'react';
import ReactDOM from 'react-dom';
import './Intro_image.scss';

class Intro_image extends React.Component {
    render() {
        return (
            <div className="quiz_intro_img_ctn">
                <img className="quiz_intro_img" src={'Components/Start/Intro_image/images/map_of_flags.jpg'} />
            </div>
        )
    }
}

export default Intro_image;