import { MongoClient } from "mongodb";
//api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        // const { title, image, address, description} = data;
        console.log(data);
        
        const client = await MongoClient.connect("mongodb+srv://Planking:qwertyuiop@cluster0.0stzx4p.mongodb.net/meetupList?retryWrites=true&w=majority");
        const db = client.db();

        const meetupsCollection = db.collection("meetups");
        
        // insert one new document into the collection (the data object)
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        // close the database connection
        client.close();

        // Handle the response and show a message in the client side console (not working though?)
        res.status(201).json({ message: "Meetup inserted!" });

    }
}

export default handler;