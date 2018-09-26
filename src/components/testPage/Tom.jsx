import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Tom extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <QueueAnim type={'bottom'} className="router-wrap">
                <div key="Tom">
                    <h1>我是Tom</h1>
                </div>
            </QueueAnim>    
        )
    }
}

export default Tom;