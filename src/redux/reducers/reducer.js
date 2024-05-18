


const initialState={
    todos:[]
}

const todoReducer=(state=initialState,action)=>{

    switch(action.type){
        case "Add_Todo" :
            return {...state,todos:[...state.todos,action.payload]}

        case "Delete_Todo" :
            const i=action.payload
            const newTodos=state.todos.filter((todo,index)=>{
                return index!==i
            })
             return {...state,todos:newTodos}
        default :
            return state      
    }
}

export default todoReducer;