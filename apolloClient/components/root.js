import React from 'react';
import Nav from './Shared/Nav/Nav';
import LogoBanner from './Shared/LogoBanner/LogoBanner';
import Footer from './Shared/Footer/Footer';
import './root.css';

class RootComponent extends React.Component {    
    render() {
        return (
            <div className="body-wrapper">
                <Nav/>
                <LogoBanner/>
                {this.props.children}
                <Footer/> 
            </div>
        );
    }
}

export default RootComponent;