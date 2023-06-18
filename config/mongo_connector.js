
const { MongoClient } = require('mongodb');

const uri ="mongodb+srv://atikurzamanpallob:8dh6x9IlamLg7OAw@liveproject.kyjkdyh.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, { useUnifiedTopology: true });
// Connect to the MongoDB server
 async function connectToMongoDB() {
  console.log(uri)
  try {
    console.log('Connected to MongoDB: '+uri);
    await client.connect();
    
  
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();
module.exports=client;