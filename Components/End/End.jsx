import React from 'react';
import ReactDOM from 'react-dom';
import './End.scss';
import {Link} from 'react-router-dom';


class End extends React.Component {
    render() {
        let scorePercentage = this.props.match.params.percentage;

        return (
            <div className="score_cnt">
                <h1 className="end_header">Congratulations !</h1>
                <h2 className="score_header">You scored {scorePercentage} %</h2>
                <Link className="tryAgain_btn" to='/quiz'>TRY AGAIN !</Link>
            </div>
        )
    }
}

export default End;