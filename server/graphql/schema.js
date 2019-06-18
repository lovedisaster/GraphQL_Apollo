const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require('graphql-tools'); 

const donationServices = require('../services/donationServices');
const { PubSub } = require("graphql-yoga");

const pubsub = new PubSub();

const typeDefs = `
  type Query {
      donationTotal: CurrentDonation
  }
  type Mutation {
    donate(amount: Int) : CurrentDonation
  }
  type Subscription {
    donationTotal: CurrentDonation
  }

  type CurrentDonation {
    total : Int
    message: String
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const resolvers = {
  Query: {
    donationTotal: () => donationServices
    .getCurrentDonation()
    .then(total => total)
  },
  Mutation: {
    donate: (root, args) => {
      return donationServices
        .makeDonation(args.amount)
        .then(total => {
          pubsub.publish('NEW_NUM', {donationTotal: {total : total.total}});
          return total;
        })
      },
  },
  Subscription: {
    donationTotal: {
        subscribe: () => {
          return pubsub.asyncIterator('NEW_NUM');
        }
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
