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
                                <h5>We've raised:</h5><img src={MoneyBag} alt={''}/>
                                <br/>
                                <Subscription subscription={subscriptionQuery}>
                                    {(data) => {
                                        console.log(data);
                                        if(data && data.data != undefined) {
                                            
                                            if(data.loading) {
                                                return <h1>Loading...</h1>
                                            }else{
                                                return <h1>
                                                        {data.data.donationTotal.total}
                                                    </h1>
                                            }
                                        }else {
                                            return <h1>0</h1>
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