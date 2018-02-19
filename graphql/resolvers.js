export default {
    Query: {
        allCats: async(parent, args, { Cat }) => {
            // { _id: 123, name: "thisName" }
            const cats = await Cat.find();
            return cats.map(x => {
                x._id = x._id.toString();
                return x;
            });
        },
        allDogs: async(parent, args, { Dog }) => {
            // { _id: 123, name: "thisName" }
            const dogs = await Dog.find();
            return dogs.map(x => {
                x._id = x._id.toString();
                return x;
            });
        }
    },
    Mutation: {
        createCat: async(parent, args, { Cat }) => {
            const kitty = await new Cat(args).save();
            kitty._id = kitty._id.toString();
            return kitty;
        },
        createDog: async(parent, args, { Dog }) => {
            const dog = await new Dog(args).save();
            dog._id = dog._id.toString();
            return dog;
        }
    }
}