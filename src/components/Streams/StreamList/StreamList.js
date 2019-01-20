import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import operations from 'StoreRedux/operations';

class StreamListComponent extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdminButtons(stream) {
        if (stream.userId === this.props.currentUserId)
            return <div className='right floated content'>
                <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
                <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>Delete</Link>
            </div>
        return null;    
    }

    renderCreate() {
        if (!this.props.isSignedIn)
            return null;
        return (
            <div className='create-new-container' style={{textAlign: 'right'}}>
                <Link className='ui button primary' to='/streams/new'>
                    Create Stream
                </Link>
            </div>
        ) 
    }

    renderList() {
        return this.props.streams.map((stream, key) => {
            return (
                <div className='item' key={key}>
                    {this.renderAdminButtons(stream)}
                    <i className='large middle aligned icon rss'/>
                    <div className='content'>
                        <Link to={`/streams/${stream.id}`} className='header'>
                            {stream.title}
                        </Link>
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='streams-list'>
                <h2>Streams:</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                    {this.renderCreate()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.fetchStreams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

const mapProsToDispatch = (dispatch) => {
    return {
        fetchStreams:() => dispatch(operations.fetchStreams())
    }   
}

export const StreamList = connect(mapStateToProps, mapProsToDispatch)(StreamListComponent);

