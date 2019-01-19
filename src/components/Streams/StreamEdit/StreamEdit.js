import React from 'react';
import { connect } from 'react-redux';
import operations from 'StoreRedux/operations';
import StreamForm from 'components/Streams/StreamForm/StreamForm';


class StreamEditComponent extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        const id = this.props.match.params.id;
        this.props.edit(id, formValues);
    }

    render() {
        const {title, description} = this.props.stream;
        
        return (
            <div className={'stream-edit'}>
                <h3>Edit form</h3>
                <StreamForm 
                initialValues={{title, description}}
                onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       stream: state.fetchStream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(operations.fetchStream(id)),
        edit: (id, values) => dispatch(operations.editStream(id, values))
    }
}

export const StreamEdit =  connect(mapStateToProps, mapDispatchToProps)(StreamEditComponent);


