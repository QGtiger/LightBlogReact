import React from 'react';
import { Layout } from 'antd';
import SideNav from '../../../components/sideNav/sideNav';
import HeaderBar from '../../../components/headerBar/headerBar';
import ContentMain from '../../../components/contentMain/contentMain';

const { Sider, Header, Content, Footer } = Layout;

class BackStageLayout extends React.Component{
    state = {
        collapsed: false
    }

    onToggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <Layout>
                    <Sider
                        collapsible
                        trigger={null}
                        collapsed={this.state.collapsed}
                    >
                        <SideNav></SideNav>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: '0 16px'}}>
                            <HeaderBar collapsed={this.state.collapsed} triggle={this.onToggle}></HeaderBar>
                        </Header>
                        <Content>
                            <ContentMain></ContentMain>
                        </Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default BackStageLayout;