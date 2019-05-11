export const createIdea = (idea) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async Call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('ideas').add({
            ...idea,
            authorFName: profile.authorFName,
            authorLName: profile.authorLName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_IDEA', idea });
        }).catch((err) => {
            dispatch({ type: 'CREATE_IDEA_ERROR', err });
        })
    }
}
