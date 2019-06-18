import React from 'react';
import gql from 'graphql-tag';
import {Banner,BannerTitle} from './Home.style';
import MoneyBag from './Money - icon.png';
import { Subscription } from "react-apollo";


const subscriptionQuery = gql`  
  subscription{
    donationTotal{
        total
    }
  }
`
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
                                <h5>We've raised:</h5>
                                <br/>

                                <Subscription subscription={subscriptionQuery}>
                                    {(data) => {
                                        if(data != undefined) {
                                            if(data.loading) {
                                                return <h1>Loading...</h1>
                                            }else{
                                                return <h1>
                                                    <img src={MoneyBag} alt={''}/>
                                                        {data.data.donationTotal.total}
                                                    </h1>
                                            }
                                        }else {
                                            return <h1><img src={MoneyBag} alt={''}/>0</h1>
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