import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import Input from '../../Component/Input/Input'
import OutlinedButtons from '../../Component/Button/Button'
import { connect } from 'react-redux'
import { addValue, deleteValue, updateValue, getValue, editValue } from '../../Redux/action'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            edit: false,
            editname: ""
        }
    }

    componentDidMount() {
        this.props.getValue()
    }

    render() {
        let { name, edit, editname } = this.state
        console.log(this.props.list)
        return (
            <div >
                <NavBar />
                <div className='App'>
                    <Input value={name} onchange={(e) => this.setState({ name: e.target.value })} />

                    <OutlinedButtons onclick={() => this.props.addValue(name)} name='Add Something' />
                    <div style={{ width: '500px' }}>
                        <ul>
                            {
                                this.props.list.map((v, i) => {
                                    return <li key={i}>
                                        {v.edit ?
                                            <div>
                                                <Input value={editname} onchange={(e) => this.setState({ editname: e.target.value })} />
                                                <OutlinedButtons name='Update' onclick={(i) => this.props.updateValue(editname, i, v.id)} />
                                            </div>
                                            :
                                            <div>
                                                <h1 style={{ display: 'inline' }}>{v.name}</h1>
                                                <OutlinedButtons name="Delete" onclick={() => this.props.deleteValue(i, v.id)} />
                                                <OutlinedButtons name='Edit' onclick={() => this.props.editValue(i)} />
                                            </div>

                                        }
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        name: state.name,
        list: state.todo,
    }
}

const mapDispatchToConst = dispatch => {
    return {
        addValue: (a) => dispatch(addValue(a)),
        deleteValue: (i, id) => dispatch(deleteValue(i, id)),
        updateValue: (uValue, i, id) => dispatch(updateValue(uValue, i, id)),
        getValue: () => dispatch(getValue()),
        editValue: (i) => dispatch(editValue(i))
    }
}

export default connect(mapStateToProps, mapDispatchToConst)(Home)