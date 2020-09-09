import React from 'react';

const Cart = (props) => {
	console.log(props);

	let total = 0;
	for (let i = 0; i < props.cart.length; i++) {
		const course = props.cart[i];
		total = total + course.price;
	}

	const tax = total / 2;
	return (
		<div>
			<h4>Order Summery</h4>
			<h5>Iteams Ordered : {props.cart.length} </h5>
			<p>Product Price : {total} </p>
			<p> Tax + vat : {tax} </p>
			<p>Total Prices : {total + tax} </p>
			<button className="btn btn-primary"> Continue </button>
		</div>
	);
};

export default Cart;
