const INTIAL_STATE = {
  name: 'Dileep',
  todo: []
}

const reducer = (state = INTIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case "ALLTODOS":
      return {
        todo: action.todo
      }
    case "ADD":
      let a = action.name
      console.log(a)
      state.todo.push({name: a})
      return {
        todo: state.todo.concat()
      }
    case "DELETE":
      state.todo.splice(action.index, 1)
      console.log(action)
      return {
        todo: state.todo.concat()
    }

    case "UPDATE":
        const editvalue = {
          edit: false,
          name: action.uValue,
          id: action.id
        }
        state.todo.splice(action.index, 1, editvalue)
        return {
          todo: state.todo.concat()
       }

       case "EDITVALUE":
         state.todo[action.index].edit = true   

        return {
          todo: state.todo.concat()
       }
    default: {
      return state
    }
  }
}

export default reducer