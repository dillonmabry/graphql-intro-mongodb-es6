import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import typeDefs from './graphql/schema';
import resolvers from  './graphql/resolvers'

// Create GraphQL schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Mongoose ORM and Models
mongoose.connect('mongodb://$USER:$PASSWORD@$SERVER/$DATABASE_NAME');
const Cat = mongoose.model('Cat', { name: String });
const Dog = mongoose.model('Dog', { name: String, woof: Boolean });

// App setup
const PORT = 3000;
const app = express();

// GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ 
    schema, 
    context: { Cat, Dog } 
}));

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql' }));

app.listen(PORT);