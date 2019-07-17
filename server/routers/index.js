const {
    graphqlExpress,
    graphiqlExpress,
  } = require('graphql-server-express');

const bodyParser = require('body-parser');
const schema = require('../graphql/schema');


module.exports = {
     router : function (app) {
        //Expose some basic elements to all routes down the chain
        app.use(function (req, res, next) {
            app.use('/', require('./all'));
            app.use('/graphql', bodyParser.json(), graphqlExpress({
                schema
              }));
            app.use('/graphiql', graphiqlExpress({
                endpointURL: '/graphql'
              }));
            app.use('/donation', require('./all'));
            next();
        });
        
        return app;
    }
 }