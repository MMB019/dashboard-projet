export const Authreducer = (state, action) => {
    switch(action.type) {
        case 'NEW_AUTH' :
            return [...state, {id : Math.floor(Math.random() * 1000) + 1,  
                name : action.book.name, 
                firstname : action.book.firstname, 
                username : action.book.username, 
                password: action.book.password
            }]
        case 'REMOVE_AUTH' :
            return state.filter(auth => auth.id !== action.id)
        default :
            return state
    }
}