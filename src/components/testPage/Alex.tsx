import * as React from 'react';
import { Row, Col, Card, Switch } from 'antd';

interface IState {
    readonly animated: boolean,
    readonly animatedOne: number,
}

class Alex extends React.Component<{}, IState> {
    public readonly state: IState = {
        animated: false,
        animatedOne: -1
    };
    public animatedAll = (checked: boolean) => {
        this.setState({ animated: checked });
    };
    public animatedOne = (i: number) => (e: any) => {
        this.setState({ animatedOne: i });
    };
    public animatedOneOver = () => () => {
        this.setState({ animatedOne: -1 });
    };
    public render() {
        const animations = [
            'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
            'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
            'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
            'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
            'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
            'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
            'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
            'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
            'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
            'hinge', 'jackInTheBox', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
            'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
            'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
        ];
        return (
            <div className="gutter-example button-demo" key="Alex">
                <Row className="mb-m">
                    <a className="mr-s">全部动画(单个动画请移动鼠标)</a>
                    <Switch onChange={this.animatedAll} />
                </Row>
                <Row gutter={14}>
                    {animations.map((v, i) => (
                        <Col className="gutter-row" md={6} key={i}>
                            <div className="gutter-box">
                                <Card
                                    className={`${this.state.animated || (this.state.animatedOne === i) ? 'animated' : ''} ${this.state.animated || (this.state.animatedOne === i) ? 'infinite' : ''} ${v}`}
                                    onMouseEnter={this.animatedOne(i)}
                                    onMouseLeave={this.animatedOneOver()}
                                >
                                    <div className="pa-m text-center">
                                        <h3>{v}</h3>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Alex;