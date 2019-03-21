import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';
import App from '../Components/App/App.jsx';


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});