import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Bill extends React.Component {
	componentDidMount() {
	}
    render() {
        return (
			<QueueAnim type={'bottom'} className="router-wrap">
				<div key="Bill">
					<ul>
						<li>
							<span>菜单一</span>
							<ul>
								<li>菜单1-1</li>
								<li>菜单1-2</li>
								<li>菜单1-3</li>
								<li>菜单1-4</li>
							</ul>
						</li>
					</ul>
				</div>
			</QueueAnim>
        )
    }
}

export default Bill;