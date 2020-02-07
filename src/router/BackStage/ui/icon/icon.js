import React from 'react';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';

class IconView extends React.Component{
    render(){
        return (
            <Icon type="smile" theme="twoTone" />
        )
    }
}

export default withRouter(IconView);