import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class CustomMenu extends React.Component{
    constructor(){
        super(...arguments);

        this.state = {
            openKeys: ['/ui'],
            selectKeys: ['/ui/button']
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentWillReceiveProps(nextProps){

    }

    onOpenChange = (openKeys) => {
        //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return
        }

        //最新展开的菜单
        const latestOpenKey = openKeys[openKeys.length - 1]
        //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
        //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
        //只适用于3级菜单
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys
            })
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }

    renderMenuItem = ({key, icon, title}) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon}/>}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }

    renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <SubMenu key={key} title={
            <span>{icon && <Icon type={icon}/>} <span>{title}</span></span>
            }>
                { subs && subs.map(item => {
                    return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                }) }
            </SubMenu>
        )
    }

    onSelectKeys = (selectKeys) => {
        console.log(selectKeys)
        this.setState({
            selectKeys: [selectKeys]
        })
    }

    render() {
        return (
            <Menu
                openKeys={this.state.openKeys}
                selectedKeys={this.state.selectKeys}
                mode="inline"
                onOpenChange={this.onOpenChange}
                theme={this.props.theme ? this.props.theme : 'dark'}
                onClick={({key})=>this.onSelectKeys(key)}
            >
                {
                    this.props.menus && this.props.menus.map(item=>{
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu>
        )
    }
}

export default withRouter(CustomMenu);