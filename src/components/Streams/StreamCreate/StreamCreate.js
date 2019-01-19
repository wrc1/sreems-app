import React from 'react';
import {connect} from 'react-redux';
import operations from 'StoreRedux/operations';
import StreamForm from 'components/Streams/StreamForm/StreamForm';

 class StreamCreate extends React.Component {


    onSubmit = (formValues) => {
        console.log(this.props.streams);
        this.props.createStream(formValues);
    }

  

    render() {
        return (
            <div className={'stream-create'}>
                <h3>Create Stream</h3>
               <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        createStream: state.createStream
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        createStream: (values) => dispatch(operations.createStream(values))
    }
}


export default connect(mapStateToProps, mapPropsToDispatch)(StreamCreate);
