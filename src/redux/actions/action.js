


const todoActionAdd =(newtodo)=>{
    const todoAction ={
        type:"Add_Todo",
        payload:newtodo
    }
    return todoAction
}

export default todoActionAdd;

export const todoActionDelete =(i)=>{
    const todoAction ={
        type:"Delete_Todo",
        payload:i
    }
    return todoAction
}
