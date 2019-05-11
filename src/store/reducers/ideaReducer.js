const initState =   {
    ideas: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
};

const ideaReducer   =   (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_IDEA':
            console.log('shared idea', action.idea);
            return state;
        case 'CREATE_IDEA_ERROR':
            console.log('CREATE_IDEA_ERROR Error', action.err);
            return state;
        default:
            return state;
    }
}

export default ideaReducer;
