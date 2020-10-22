import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HeDNyCVL7JVTO8LzcsCmBdgo7WZJhg2q8aNtbGet7wYp6iktheFGgGVPwFvhA3ghulKpFhjJqXq9KZrNrAnrdDC00y16Dvr8X';

	const onToken = token =>{
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${ price }`}
			amount={ priceForStripe }
			panel='Pay Now'
			token={ onToken }
			stripeKey={ publishableKey }
		/>
	);
};

export default StripeCheckoutButton;