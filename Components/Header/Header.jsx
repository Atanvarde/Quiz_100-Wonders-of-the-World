import React from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="quiz_intro_header">
                <h1>QUIZ</h1>
                <h2>Can you guess the country's national flag ?</h2>
            </div>
        )
    }
}

export default Header;