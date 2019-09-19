import firebaseApp from '../Config/firebase'

function getValue() {
    return dispatch => {
        let todo = []
        firebaseApp.database().ref('/').child('Todos').once("value", (data) => {
            let dataa =  data.val()
            for (var key in dataa) {
                dataa[key].id = key
                todo.push(dataa[key]) 
            }
            dispatch({todo: todo,  type: 'ALLTODOS'})
        })
    }
}

function addValue(a) {
    console.log(a)
    firebaseApp.database().ref('/').child('Todos').push({ name: a, edit: false })
    return {
        type: "ADD",
        name: a
    }
}

function deleteValue(i, id) {
    firebaseApp.database().ref('/').child(`Todos/${id}`).remove()
    return {
        type: "DELETE",
        index: i
    }
}

function updateValue(uValue, index, id) {
    firebaseApp.database().ref('/').child(`Todos/${id}`).set({name: uValue})
    return {
        type: "UPDATE",
        uValue: uValue,
        index: index,
        id: id
    }
}


function  editValue(index) {
    return {
        type: "EDITVALUE",
        index: index
    }
}
export { addValue, deleteValue, updateValue, getValue , editValue}