import React from 'react';
import ReactDOM from 'react-dom';
import './End.scss';
import {Link} from 'react-router-dom';


class End extends React.Component {
    render() {
        let scorePercentage = this.props.match.params.percentage;

        return (
            <div>
                <h1>Congratulations !</h1>
                <h2>You scored {scorePercentage} %</h2>
                <Link className="tryAgain_btn" to='/quiz'>Try again !</Link>
            </div>
        )
    }
}

export default End;