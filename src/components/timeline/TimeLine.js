import React from 'react'



const Timeline = ({steps}) => {
	
	const totalItems = steps.length;
	const numberOfActiveItems = steps.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;
	
	return (
		<div className="section__timeline">
		<div className="timeline">
			<div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
			<div className="timeline-items">
				{steps.map((step, i) => (
					<div key={i} className={"timeline-item" + (step.active ? ' active' : '')}>
						<div className="timeline-content">
							<p>
								{step.name}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
		</div>
	)
}

export default Timeline


