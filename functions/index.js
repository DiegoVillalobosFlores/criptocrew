const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.CreateUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid;
    const user = {
        email: event.data.email,
        disabled: false,
        balance: 0,
        shares: 0,
    };

    console.log("USER",user);

    admin.firestore().doc("users/" + uid).set(user);
});

exports.setUserInfo = functions.https.onRequest((req,res) => {
    const data = {
        ethAddress: req.query.address,
        nip: req.query.nip,
    };

    const token = req.header("authorization");
    console.log("TOKEN",token);

    getUidWithToken(token, (uid) => {
        if(uid !== false){
            admin.firestore().collection("users").doc(uid).update(update)
                .then(() => {
                    console.log("ADD OK","Added data to " + uid);
                    res.status(200).send({ok : true});
                    return true;
                })
                .catch((error) => {
                    res.status(400).send({error:{message: error,status:403}})
                });
        }else{
            res.status(403).send({error: {message: "Invalid Token: " + data.token,status: 403}});
        }
    })

});

exports.SignUp = functions.https.onRequest((req,res) => {
    const data = {
        email : req.query.email,
        emailVerified: false,
        password : req.query.password,
        displayName: req.query.name,
        disabled : false
    };

    let message = "Couldn't create user, ";
    admin.auth().createUser(data)
        .then((userRecord)  => {
            message = "A new user has been created with id: ";
            console.log(message, userRecord.uid);
            res.status(200).send({user: userRecord});
            return 200;
        })
        .catch((error) => {
            console.log(message, error);
            res.status(400).send(message + error.toString());
        });
});

function getSubscriptionById(id,callback) {
    admin.firestore().collection("subscriptionTypes").doc(id).get()
        .then(doc => {
            if(!doc.exists){
                return callback(false);
            }else{
                return callback(doc.data());
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function updateUserData(token,update){
    getUidWithToken(token, (data) => {
        admin.firestore().collection("users").doc(data.uid).update(update);
    })
}

function getAllActiveSubscriptions() {
    admin.firestore().collection("usersSubscriptions").where("active", "==", true).get()
        .then(snapshot => {
            let balance = 0;
            snapshot.forEach(doc => {
                getSubscriptionById(doc.data().subscription,(data) => {
                    balance += data.cost;
                    console.log(balance);
                })
            });
            return snapshot;
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}


function getUidWithToken(token, callback) {
    admin.auth().verifyIdToken(token)
        .then( (decodedToken) => {
            callback(decodedToken);
            return 200;
        })
        .catch((error) => {
            console.log("Couldn't verify token",error);
            callback(false);
        })
}

function getUserData(token,callback) {
    getUidWithToken(token, (uid) => {
        if(uid !== false){
            admin.firestore().collection("users").doc(uid.uid).get()
                .then(doc => {
                    if(!doc.exists){
                        console.log("NO DOC","No document with ref: " + uid);
                        callback(false);
                        return 403;
                    }else{
                        const data = doc.data();
                        callback(data);
                        return 200;
                    }
                })
                .catch(error => {
                    console.log("DOC ERR",error);
                });
        }else{
            return callback(false);
        }
    });
}

exports.getUserShares = functions.https.onRequest((req,res) => {
    const data = {
        token : req.header("authorization")
    };

    console.log("TOKEN",data.token);

    getUserData(data.token, (data) => {
        if(data !== false){
            res.status(200).send({shares: data.shares})
        }else{
            res.status(403).send({error: {message: "Invalid Token: " + data.token,status: 403}});
        }
    })


});

exports.getUserCurrentBalance = functions.https.onRequest((req,res) => {
    const data = {
        token : req.header("authorization")
    };

    console.log("QUERY",req.headers);
    console.log("TOKEN",data.token);

    getAllActiveSubscriptions();

    getUserData(data.token, (data) => {
        if(data !== false){
            res.status(200).send({balance: data.balance})
        }else{
            res.status(403).send({error: {message: "Invalid Token: " + data.token,status: 403}});
        }
    })
});

exports.addSupportRequest = functions.https.onRequest((req,res) => {
    const data = {
        subject: req.query.subject,
        email: req.query.email,
        message: req.query.message
    };

    admin.firestore().collection("supportQueries").add(data)
    .then((docRef) => {
        res.status(200).send({id:docRef.id});
        return docRef.id;
    })
    .catch((error) => {
        console.log(error);
        res.status(400).send({error:error})
    });

});

exports.getUserData = functions.https.onRequest((req,res) => {
    const data = {
        token: req.header("authorization")
    };

    console.log("QUERY",req.headers);
    console.log("TOKEN",data.token);

    getUserData(data.token, (data) => {
        if(data !== false){
            res.status(200).send({user: data});
            return data
        }else{
            res.status(403).send({error: {message: "Invalid Token: " + data.token,status: 403}});
        }
    })
});