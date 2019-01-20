import './styles.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StreamList } from 'components/Streams/StreamList/StreamList'
import StreamCreate  from 'components/Streams/StreamCreate/StreamCreate'
import { StreamDelete } from 'components/Streams/StreamDelete/StreamDelete'
import { StreamEdit } from 'components/Streams/StreamEdit/StreamEdit'
import { StreamShow } from 'components/Streams/StreamShow/StreamShow'

export const Content = props => {
    return (
        <div className='app-content'>
            <Switch>
                <Route path={'/'} exact component={StreamList} />
                <Route path={'/streams/new'} exact component={StreamCreate} />
                <Route path={'/streams/delete/:id'} exact component={StreamDelete} />
                <Route path={'/streams/edit/:id'} exact component={StreamEdit} />
                <Route path={'/streams/:id'} exact component={StreamShow} />
            </Switch>
        </div>
       
    )
} 