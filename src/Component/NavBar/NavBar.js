import React from 'react'
import '../NavBar/NavBar.css'
import todo from '../../Image/todo.png'
class NavBar extends React.Component {
    render(){
        return(
            <div className='navbar'>
                <img src={todo} alt='Logo' className='logo'/>
            </div>
        )
    }
}

export default NavBar