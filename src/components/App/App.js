import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Header } from 'components/Layout/Header/Header'
import { StreamList } from 'components/Streams/StreamList/StreamList'
import StreamCreate  from 'components/Streams/StreamCreate/StreamCreate'
import { StreamDelete } from 'components/Streams/StreamDelete/StreamDelete'
import { StreamEdit } from 'components/Streams/StreamEdit/StreamEdit'
import { StreamShow } from 'components/Streams/StreamShow/StreamShow'
import history from 'components/History/History';

const App = () => {
    return (
        <div className={'#app'}>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path={'/'} exact component={StreamList} />
                    <Route path={'/streams/new'} exact component={StreamCreate} />
                    <Route path={'/streams/show'} exact component={StreamShow} />
                    <Route path={'/streams/delete'} exact component={StreamDelete} />
                    <Route path={'/streams/edit'} exact component={StreamEdit} />
                </div>   
            </Router>
        </div>
    )
}

export default App;