import './styles.css';
import React from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import operations from 'StoreRedux/operations';


class StreamShowComponent extends React.Component {

    constructor(props) {
        super(props)
        
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        const {id} = this.props.match.params;

        if (this.player || !this.props.stream)
            return;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();    
            
    }

    render() {

        if (!this.props.stream)
            return <div>Loading...</div>
        const  {title, description} = this.props.stream;

        return (
            <div className={'stream-delete'}>
                <h1 className='title'>{ title }</h1>
                <h5 className='description'>{ description }</h5>
                <div className='video-container'>
                    <video 
                        ref={this.videoRef} 
                        style={{width: '100%'}} controls />
                </div>
                
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

