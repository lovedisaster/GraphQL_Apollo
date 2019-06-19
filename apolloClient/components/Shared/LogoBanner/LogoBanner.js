import React from 'react';
import {LogoBannerWrapper, Title} from './LogoBannerStyles';
import logo from './logo.png';


const LogoBanner = () => {
    return (
        <LogoBannerWrapper>
            <div className="container">
                <Title>
                    <img src={logo} alt={"logo"} />
                    <h2> Make the world a better place</h2>
                </Title>
            </div>
        </LogoBannerWrapper>
    )
    }

export default LogoBanner;