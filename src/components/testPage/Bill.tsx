import * as React from 'react';

class Bill extends React.Component {
	public render() {
		return (
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
		)
	}
}

export default Bill;