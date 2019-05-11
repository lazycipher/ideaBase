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
            return state;
        case 'CREATE_IDEA_ERROR':
            return state;
        default:
            return state;
    }
}

export default ideaReducer;
