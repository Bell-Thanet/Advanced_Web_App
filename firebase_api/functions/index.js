const functions = require('firebase-functions');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var serviceAccount = require("./permissions.json");

const key = 'MY_KEY';

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
            await db.collection('TestAW').doc()
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
                lastname: req.body.lastname
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




//********************* SOSList */
//************* Create */


app.post('/api/createSosList', (req, res) => {
    (async () => {
        try {
            await db.collection('SosList').doc()
                .create({
                    sosList: req.body.sosList,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readSosList', (req, res) => {
    (async () => {
        try {
            let query = db.collection('SosList');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        sosList: doc.data().sosList,
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
app.put('/api/updateSosList/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('SosList').doc(req.params.id)

            await document.update({
                sosList: req.body.sosList,
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* Delete */
app.delete('/api/deleteSosList/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('SosList').doc(req.params.id)
            await document.delete();


            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});


//********************* AnimalList */
//************* Create */


app.post('/api/createAnimalList', (req, res) => {
    (async () => {
        try {
            await db.collection('AnimalList').doc()
                .create({
                    animalList: req.body.animalList,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readAnimalList', (req, res) => {
    (async () => {
        try {
            let query = db.collection('AnimalList');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        animalList: doc.data().animalList,
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
app.put('/api/updateAnimalList/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('AnimalList').doc(req.params.id)

            await document.update({
                animalList: req.body.animalList,
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});


//************* Delete */
app.delete('/api/deleteAnimalList/:id', (req, res) => {
    (async () => {
        console.log(req.params.id)
        try {
            const document = db.collection('AnimalList').doc(req.params.id)
            await document.delete();


            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//********************* Institute */
//************* Create */


app.post('/api/createInstitute', (req, res) => {
    (async () => {
        try {
            await db.collection('Institute').doc()
                .create({
                    institute: req.body.institute,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readInstitute', (req, res) => {
    (async () => {
        try {
            let query = db.collection('Institute');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        institute: doc.data().institute,
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
app.put('/api/updateInstitute/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Institute').doc(req.params.id)

            await document.update({
                institute: req.body.institute,
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* Delete */
app.delete('/api/deleteInstitute/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Institute').doc(req.params.id)
            await document.delete();


            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//********************* Telephone_SOS */
//************* Create */


app.post('/api/createTelephone', (req, res) => {
    (async () => {
        console.log('ทำงาน')
        try {
            await db.collection('Telephone_SOS').doc()
                .create({
                    Title: req.body.Title,
                    phonenumber: req.body.phonenumber,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readTelephone', (req, res) => {
    (async () => {
        try {
            let query = db.collection('Telephone_SOS');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        Title: doc.data().Title,
                        phonenumber: doc.data().phonenumber,
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
app.put('/api/updateTelephone/:id', (req, res) => {
    (async () => {
        console.log('Update ทำงาน')
        try {
            const document = db.collection('Telephone_SOS').doc(req.params.id)

            await document.update({
                Title: req.body.Title,
                phonenumber: req.body.phonenumber,
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});


//************* Delete */
app.delete('/api/deleteTelephone/:id', (req, res) => {
    (async () => {
        console.log('delete ทำงาน')
        try {
            const document = db.collection('Telephone_SOS').doc(req.params.id)
            await document.delete();


            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//********************* Users */
//************* Create */


app.post('/api/createUsers', (req, res) => {
    (async () => {
        try {
            await db.collection('Users').doc()
                .create({
                    Email: req.body.Email,
                    Name: req.body.Name,
                    StudentID: req.body.StudentID,
                    URL: req.body.URL,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readUsers', (req, res) => {
    (async () => {
        try {
            let query = db.collection('Users');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        Email: doc.data().Email,
                        Name: doc.data().Name,
                        StudentID: doc.data().StudentID,
                        URL: doc.data().URL,
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
app.put('/api/updateUsers/:id', (req, res) => {
    (async () => {
        console.log('Update ทำงาน')
        try {
            const document = db.collection('Users').doc(req.params.id)

            await document.update({
                Name: req.body.Name,
                StudentID: req.body.StudentID,
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* Delete */
app.delete('/api/deleteUsers/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Users').doc(req.params.id)
            await document.delete();


            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//**************************************************************************************** ขั้นTest */
//********************* First_Aid */
//************* Create */


app.post('/api/createFirst_Aid', (req, res) => {
    (async () => {
        try {
            await db.collection('First_Aid').doc()
                .create({
                    Email: req.body.Email,
                    Name: req.body.Name,
                    StudentID: req.body.StudentID,
                    URL: req.body.URL,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readFirst_Aid', (req, res) => {
    (async () => {
        try {
            let query = db.collection('First_Aid');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        Title: doc.data().Title,
                        Image: doc.data().Image,
                        detal: doc.data().detal,
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


//************* Delete */
app.delete('/api/deleteFirst_Aid/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('First_Aid').doc(req.params.id)
            await document.delete();


            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});


//**************************************************************************************** ขั้นTest */

//********************* Volunteers */
//************* Create */


app.post('/api/createVolunteers', (req, res) => {
    (async () => {
        try {
            await db.collection('Volunteers').doc()
                .create({
                    Email: req.body.Email,
                    Gender: req.body.Gender,
                    IdCard: req.body.IdCard,
                    Name: req.body.Name,
                    Photo: req.body.Photo,
                    StudentID: req.body.StudentID,
                })
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* ReadAll */
app.get('/api/readVolunteers', (req, res) => {
    (async () => {
        try {
            let query = db.collection('Volunteers');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        Email: doc.data().Email,
                        Gender: doc.data().Gender,
                        IdCard: doc.data().IdCard,
                        Name: doc.data().Name,
                        Photo: doc.data().Photo,
                        StudentID: doc.data().StudentID,
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
app.put('/api/updateVolunteers/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Volunteers').doc(req.params.id)

            await document.update({
                Name: req.body.Name,
                StudentID: req.body.StudentID,
            })

            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//************* Delete */
app.delete('/api/deleteVolunteers/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('Volunteers').doc(req.params.id)
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

//********************* AcceptSOS */

//************* ReadAll */
app.get('/api/readAcceptSOS', (req, res) => {
    (async () => {
        try {
            let query = db.collection('AcceptSOS');
            let response = [];

            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;

                for (let doc of docs) {
                    const selectedItem = {
                        id: doc.id,
                        Detail: doc.data().Detail,
                        Image1: doc.data().Image1,
                        Image2: doc.data().Image2,
                        Image3: doc.data().Image3,
                        Symtom:doc.data().Symtom
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


//************* Delete */
app.delete('/api/deleteAcceptSOS/:id', (req, res) => {
    (async () => {
        try {
            const document = db.collection('AcceptSOS').doc(req.params.id)
            await document.delete();
            return res.status(200).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
});

// Register //
app.post('/api/register',(req, res) => {
    (async () => {
        try {
            makeHash(req.body.password).then(hashtext => {
                const playload = {
                    username: req.body.email,
                    password: hashtext,
                }
                console.log(playload);
                db.collection('Admin').doc(req.body.email)
                .create({
                    Email: req.body.email,
                    Password: hashtext,
                    Firstname: req.body.firstName,
                    LastName: req.body.lastName,
                    StudentID: req.body.studentID,
                })
                return res.status(200).send();
            })
           
        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();
    
});
const makeHash = async (plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

//login//
function findUser(username) {
    return db.collection('Admin').doc(username).get().then(function (doc) {
        if (doc.exists) return Promise.resolve({username: doc.data().Email, password: doc.data().Password, firstname: doc.data().Firstname, lastname: doc.data().LastName});
        return Promise.reject("No such document");
    })
}
const compareHash = async (plainText, hashText) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hashText, (err, data) => {
            if (err) {
                reject(new Error('Error bcryptjs compare'))
            } else {
                resolve({ status: data });
            }
        });
    });
}
app.post('/api/login',(req, res) => {
    (async () => {
        const playload = {
            username: req.body.email,
            password: req.body.password,
        };
        console.log(playload);
    try{
        const result = await findUser(playload.username);
        console.log(result);
        const loginStatus = await compareHash(req.body.password, result.password)
        console.log(loginStatus);
        const status = loginStatus.status;
        if (status) {
            const token = jwt.sign(result, key, { expiresIn: 60 * 5 })
            res.status(200).json({ result, token, status });
        } else {
            res.status(200).json({ status });
        }
    } catch (error) {
        res.status(404).send(error)
    }
    
    })();
    
});



exports.app = functions.https.onRequest(app);