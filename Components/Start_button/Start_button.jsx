import React from 'react';
import ReactDOM from 'react-dom';
import './Start_button.scss';

class Start_button extends React.Component {
    render() {
        return (
            <div className="Start_btn_cnt">
                <button className="Start_btn" type="button">START !</button>
            </div>
        )
    }
}

export default Start_button;