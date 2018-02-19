export default `

type Cat {
    _id: String!,
    name: String!
}

type Dog {
    _id: String!,
    name: String!,
    woof: Boolean
}

type Query {
    allCats: [Cat!]!,
    allDogs: [Dog!]!
}

type Mutation {
    createCat(name: String!): Cat!,
    createDog(name: String!, woof: Boolean): Dog!
}

`;