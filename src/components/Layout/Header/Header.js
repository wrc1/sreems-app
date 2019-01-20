import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuth } from 'components/GoogleAuth/GoogleAuth';
export const Header = () => {
    return(
        <div className={'app-header'}>
            <div className={'left-header'}>
                <Link to={'/'}>
                    Streamy
                </Link>
            </div>
            <div className={'right-header'}>
                <Link to={'/'}>
                    Streams Demo App
                </Link>
            </div>
            <GoogleAuth />
        </div>
    )
}