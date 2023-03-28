const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

const userCollection = client.db('recipes').collection('users');
const scoreCollection = client.db('recipes').collection('recipes');

function getUser(user) {
    return userCollection.findOne({ user: user });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(user, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const newUser = {
      user: user,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(newUser);
  
    return user;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
};