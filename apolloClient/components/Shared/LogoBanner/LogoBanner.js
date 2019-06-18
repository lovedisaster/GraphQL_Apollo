import React from 'react';
import {LogoBannerWrapper, Title} from './LogoBannerStyles';
import logo from './logo.png';


const LogoBanner = () => {
    return (
        <LogoBannerWrapper>
            <div className="container">
                <Title>
                    <img src={logo} alt={"logo"} />
                    <h5> Make the world a better place to live in....</h5>
                </Title>
            </div>
        </LogoBannerWrapper>
    )
    }

export default LogoBanner;