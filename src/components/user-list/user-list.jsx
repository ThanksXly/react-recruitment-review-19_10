import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim';


const Header = Card.Header;
const Body = Card.Body;

class UserList extends Component {
    static propTypes ={
      userlist:PropTypes.array.isRequired
    };
    render() {
        const {userlist} = this.props;
        return (
            <div className='user-list'>
                <WingBlank>
                    {/*alpha left right top bottom scale scaleBig scaleX scaleY*/}
                    <QueueAnim type='scale' delay={100}>
                        {
                            userlist.map(user=>(
                                <div key={user._id}>
                                    <WhiteSpace/>
                                    <Card onClick={()=>this.props.history.push(`/chat/${user._id}`)}>
                                        <Header
                                            thumb={require(`../../assets/header/${user.header?user.header:'头像1'}.png`)}
                                            extra={user.username} />
                                        <Body>
                                            <div>职位: {user.post}</div>
                                            {user.company?<div>公司: {user.company}</div>:null}
                                            {user.salary?<div>月薪: {user.salary}</div>:null}
                                            <div>描述: {user.info}</div>
                                        </Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </QueueAnim>
                </WingBlank>
            </div>
        )
    }
}
export default withRouter(UserList)
