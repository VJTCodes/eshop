const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const serviceAccount = require('./eshop-212eb-firebase-adminsdk-fbsvc-a418484b20.json')

admin.initializeApp({
    credential: admin.cert(serviceAccount),
});

const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

app.get('/api/data',async (req,res)=>{
    try {
        const snapshot = await db.collection('eshop').get();
        const data = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        res.status(200).json(data);

    }
    catch(error) {
        res.status(500).send({message:error.message})
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Backend server running on port ${PORT}`)
})