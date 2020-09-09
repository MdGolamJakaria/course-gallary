import React, { useState } from 'react';
import courses from '../../fackData/fackCourses';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Home = () => {
	const [course, setCourse] = useState(courses);
	const [cart, setCart] = useState([]);

	const handleEnroll = (course) => {
		const newCart = [...cart, course];
		setCart(newCart);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="row">
						{course.map((course) => (
							<Course
								key={course.id}
								handleEnroll={handleEnroll}
								course={course}
							></Course>
						))}
					</div>
				</div>
				<div className="col-md-4">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Home;
