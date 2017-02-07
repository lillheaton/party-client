# DB Structure

```js

var assignment = {
	id,
	facebook_user_id,
	c_ref_assignment_id
}

var transaction = {
	id,
	facebookUserId,
	partyId, // Contentful party id
	swishPaymentReference,
	payerAlias, // string: payer's number
	username,
	type,
	amount,
	paymentMessage,
	status,
	date_paid,
	error_code, // string: if error, this will be filled
	error_message // string: if error, this will be filled
}

```