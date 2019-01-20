import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Header } from 'components/Layout/Header/Header';
import { Content } from 'components/Layout/Content/Content';
import history from 'components/History/History';

const App = () => {
    return (
        <div className={'#app'}>
            <Router history={history}>
                <div>
                    <Header />
                    <Content />
                </div>   
            </Router>
        </div>
    )
}

export default App;