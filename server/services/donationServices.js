const cacheServices = require('./cacheServices');

const donationLimit = 1000000;
const totalDonationMessage = "Total donations made";
const successfulDonationMessage = "Donated successfully";
const errorMessage = "Donation failed.";

const DonationServices = {
    makeDonation: (amount) => 
        new Promise((resolve, reject) => {
            const data = setCache('total', amount);
            resolve({total: data.total, message: data.message});
        }),
    getCurrentDonation: () => 
        new Promise((resolve, reject) => {
            const data = getCache('total');
            resolve({total: data.total, message: data.message});
        })
}

const setCache = function (k, v) {
    let value = cacheServices.getCache(k);
    if (value === undefined || value === null) {
        cacheServices.setCache(k, v);
        return {total: v, message: errorMessage};
    } else {

        let newTotal = parseInt(value) + parseInt(v)
        if (newTotal > donationLimit){
            newTotal = donationLimit;  
            return {total: donationLimit, message: totalDonationMessage};  
        }
        cacheServices.setCache(k, newTotal);
        return {total: newTotal, message: successfulDonationMessage};  
    }
}

const getCache = function (k) {
    let value = cacheServices.getCache(k);
    if (value === undefined || value === null) {
        return {total: 0, message: ""};
    } else {
        let v = cacheServices.getCache(k);
        return {total: v, message: totalDonationMessage};
    }
}

module.exports = DonationServices;