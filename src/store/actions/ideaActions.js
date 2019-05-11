export const createIdea = (idea) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async Call
        const firestore = getFirestore();
        firestore.collection('ideas').add({
            ...idea,
            authorFName: "lazy",
            authorLName: "cipher",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_IDEA', idea });
        }).catch((err) => {
            dispatch({ type: 'CREATE_IDEA_ERROR', err });
        })
    }
}
