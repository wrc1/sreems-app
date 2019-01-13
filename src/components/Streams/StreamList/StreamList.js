import React from 'react';
import { connect } from 'react-redux';
import operations from 'StoreRedux/operations';

class StreamListComponent extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return (
            <div className={'stream-list'}>
                streams list
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

const mapProsToDispatch = (dispatch) => {
    return {
        fetchStreams:() => dispatch(operations.fetchStreams())
    }   
}

export const StreamList = connect(null, mapProsToDispatch)(StreamListComponent);

