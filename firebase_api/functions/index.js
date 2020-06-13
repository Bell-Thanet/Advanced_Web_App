const functions = require('firebase-functions');
const admin = require('firebase-admin');


var serviceAccount = require("./permissions.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sutcanhelp.firebaseio.com"
});



const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');
app.use(cors({ origin: true }));




app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello-World!')
});

//************* Create */


app.post('/api/create', (req, res) => {
    (async () => {
        try {
            await db.collection('TestAW').doc('/' + req.body.id + '/')
                .create({
                    name: req.body.name,
                    lastname: req.body.lastname

                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});



//************* Read */
app.get('/api/read/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('TestAW').doc(req.params.id);
            let product = await document.get();
            let response = product.data();

            return res.status(200).send(response);
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});


//************* ReadAll */
app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('TestAW');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        name: doc.data().name,
                        lastname: doc.data().lastname
                    }
                    response.push(selectedItem);
                }
                return response;

            })
            return res.status(200).send(response);
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* Update */
app.put('/api/update/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('TestAW').doc(req.params.id)
            
            await document.update({
                name: req.body.name,
                lastname:req.body.lastname
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* Delete */
app.delete('/api/delete/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('TestAW').doc(req.params.id)
            await document.delete();
           

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});


exports.app = functions.https.onRequest(app);