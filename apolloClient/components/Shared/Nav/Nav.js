import React from 'react';
import moneyIcon from './money-icon2.png';
import {NavWrapper} from './NavStyles';

{/* <i className="fas fa-money-bill-wave"></i> */}
const Nav = () => {
    return (
        <NavWrapper>
            <div className="container">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a href="/donation" className="nav-link active">Let's Donate!  <img className="moneyIcon" src={moneyIcon} alt={'moneyIcon'}/></a>
                    </li>
                </ul>
            </div>
        </NavWrapper>
    )
}

export default Nav;