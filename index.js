const { MongoClient } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

const data1={
    color: 'pink',
    value: '#0f0'
}
const data2={
    color: 'dark red',
    value: '#0f0'
}

const main = async () => {
    try {
        await client.connect();
        const db = client.db("shop");
        const collection = db.collection("sales");
        await collection.insertOne(data1)
        await collection.insertOne(data2)


        const data = await collection.find({ color: 'dark red' }).toArray();
        const data3 = await collection.find().toArray();
        console.log(data);
        console.log(data3);
        return "done";
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main()
    .then(console.log).catch((e) => console.log(e));
    
