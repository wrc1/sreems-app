import React from 'react';
import { connect } from 'react-redux';
import operations from 'StoreRedux/operations';

class GoogleAuthComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '941774405326-pbi7qdjt22fltqbjp1c8slb6dc09238v.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    get isSignedIn() {
        return this.props.isSignedIn;
    }

    onSignInClick = () => {
        this.auth.signIn();
    }
 
    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) 
            this.props.signIn(this.auth.currentUser.get().getId())
        else {
            this.props.signOut()
        }    
    }

    renderAuthButton() {
        if (this.isSignedIn === null)
            return null;
        if (this.isSignedIn)
            return <button onClick={this.onSignOutClick}>G SignOut</button>
        return <button onClick={this.onSignInClick}>G SignIn</button>
    }

    render() {
        return (
            <div className={'google-auth'}>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        signIn: (userId) => dispatch(operations.signIn(userId)),
        signOut: () => dispatch(operations.signOut())
    }
}



export const GoogleAuth = connect(mapStateToProps, mapDispatchTopProps)(GoogleAuthComponent);