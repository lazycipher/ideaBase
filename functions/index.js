const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (async notification =>{
    const doc = await admin.firestore().collection('notifications').add(notification);
})

exports.ideaCreated = functions.firestore
    .document('ideas/{ideaId}')
    .onCreate(doc => {
        
        const idea = doc.data();
        const notification = {
            content: "Added a new idea",
            user: `${idea.authorFName} ${idea.authorLName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
    return createNotification(notification);
});

exports.userJoined = functions.auth.user().onCreate(async user => {
    const doc = await admin.firestore()
        .collection('users')
        .doc(user.uid)
        .get();
    const newUser = doc.data();
    const notification = {
        content: 'Joined',
        user: `${newUser.authorFName} ${newUser.authorLName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
})
