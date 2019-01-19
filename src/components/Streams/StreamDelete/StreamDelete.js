import React from 'react';
import { content, connect } from 'react-redux';
import operations from 'StoreRedux/operations';
import { Modal } from 'components/Modal/Modal';
import history from 'components/History/History';
import { Link } from 'react-router-dom';


export class StreamDeleteComponents extends React.Component {


    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        console.log(this.props);
        const id = this.props.match.params.id;

        return (
            <React.Fragment>
                <button 
                    className='ui button negative' 
                    onClick={() => this.props.delete(id)}>Delete</button>
                <Link to={'/'} className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <div className={'stream-delete'}>
                <Modal 
                    title='Delete Stream'
                    content='Are you sure you want to delete this stream ?'
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.fetchStream
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchStream: (id) => dispatch(operations.fetchStream(id)),
        delete: (id) => dispatch(operations.deleteStream(id)) 
    }
}

export const StreamDelete = connect(mapStateToProps, mapDispatchToProps)(StreamDeleteComponents);

