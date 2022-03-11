import React from 'react';
import gql from 'graphql-tag';
import {Banner,BannerTitle} from './Home.style';
import MoneyBag from './img/Money - icon.png';
import { Subscription } from 'react-apollo';
import {NumberFormat} from '../../Utils/CommonUtils';
import subscriptionQuery from './subscriptionQuery.graphql';

class Home extends React.Component {    

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Banner>
                    <BannerTitle>
                        <div className="col">
                            <div className="row-md-auto text-center">
                            <img src={MoneyBag} alt={''}/>&nbsp;<h5>We've raised </h5>
                            <br/>
                                <Subscription subscription={subscriptionQuery}>
                                    {(data) => {
                                        if(data && data.data != undefined) {
                                            
                                            if(data.loading) {
                                                return <h1>Loading...</h1>
                                            }else{
                                                return <h1>
                                                        ${NumberFormat(data.data.donationTotal.total)}
                                                    </h1>
                                            }
                                        }else {
                                            return <h1>$0</h1>
                                        }
                                    }}
                                </Subscription>
                            </div>
                        </div>
                    </BannerTitle>
                </Banner>
        )
    }
}

export default Home;