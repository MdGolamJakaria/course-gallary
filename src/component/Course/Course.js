import React from 'react';

const Course = (props) => {
	const { courseName, image, price } = props.course;
	return (
		<div className="col-md-4 mb-3">
			<div className="card" style={{ width: '15rem' }}>
				<img className="card-img-top" src={image} alt="" />
				<div className="card-body">
					<h5 className="card-title"> {courseName} </h5>
					<h3 className="text-danger"> Price: ${price}</h3>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<button
						onClick={() => props.handleEnroll(props.course)}
						href="#"
						className="btn btn-primary"
					>
						Enroll
					</button>
				</div>
			</div>
		</div>
	);
};

export default Course;
