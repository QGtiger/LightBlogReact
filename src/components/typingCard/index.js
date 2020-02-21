import React from 'react';
import { Card } from 'antd';
import Typing from '../../utils/typing';

class TypingCard extends React.Component{
    static defaultProps = {
        title: '何时使用',
        source: '暂无内容',
        height: 136,
        delay: 50
    }

    componentDidMount() {
        console.log(this.source)
        const typing = new Typing({
            source: this.source,
            output: this.output,
            delay: this.props.delay
        })
        typing.start();
    }

    render() {
        return (
            <Card hoverable bordered={false} title={this.props.title} style={{minHeight:this.props.height}} id={this.props.id}>
                <div style={{display: 'none'}} ref={ref=>this.source=ref} dangerouslySetInnerHTML={{__html:this.props.source}}></div>
                <div ref={ref=>this.output=ref}></div>
            </Card>
        )
    }
}

export default TypingCard;