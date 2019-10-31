import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/actions'
import UserList from "../../components/user-list/user-list";

 class Boss extends Component {
    componentDidMount() {
        this.props.getUserList('god')
    }

    render() {
        return (
            <div className='boss'><UserList userlist={this.props.userlist}/></div>
        )
    }
}
export default connect(
    state=>({userlist:state.userlist}),
    {getUserList}
)(Boss)
