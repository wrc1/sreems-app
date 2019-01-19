import React from 'react';
import { connect } from 'react-redux';
import operations from 'StoreRedux/operations';


class StreamShowComponent extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {

        if (!this.props.stream)
            return <div>Loading...</div>
        const  {title, description} = this.props.stream;

        return (
            <div className={'stream-delete'}>
                <h1>{ title }</h1>
                <h5>{ description }</h5>
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
        fetchStream: (id) => dispatch(operations.fetchStream(id))
    }
}

export const StreamShow = connect(mapStateToProps, mapDispatchToProps)(StreamShowComponent); 

