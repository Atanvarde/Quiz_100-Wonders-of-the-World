import React from 'react';
import ReactDOM from 'react-dom';
import './Start_button.scss';
import {Link} from 'react-router-dom';

class Start_button extends React.Component {
    render() {
        return (
            <div className="Start_btn_cnt">
                <Link className="Start_btn" to='/quiz'>START !</Link>
            </div>
        )
    }
}

export default Start_button;