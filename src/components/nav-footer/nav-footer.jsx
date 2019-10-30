import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
const Item = TabBar.Item;
 class NavFooter extends Component {
    static propTypes ={
        navList:PropTypes.array.isRequired
    };
    render() {
        let {navList} =this.props;
        navList=navList.filter(nav=>!nav.hide);
        const path = this.props.location.pathname;
        console.log(navList)
        return (
            <TabBar>
                {navList.map(nav=>(
                <Item   key={nav.path}
                        title={nav.text}
                        icon={{uri:require(`../../assets/images/${nav.icon}.png`)}}
                        selectedIcon={{uri:require(`../../assets/images/${nav.icon}-selected.png`)}}
                        selected={path===nav.path}
                        onPress={()=>{this.props.history.replace(nav.path)}}
                />
                ))}
            </TabBar>

        )
    }
}
export default withRouter(NavFooter)
