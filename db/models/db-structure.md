# DB Structure

```js

var user = {
	id, //uuid
	facebook_id, // application utilize facebook authentication
	name
}

var party = {
	id, // uuid
	facebook_event_id,
	name,
	cost, // int: What the party cost per person.
	json // Data for the application one party one json document
}

// Relation table to see how many signed up for what
var party_signup = {
	user_id, // ref user
	party_id // ref party
}

// Order table to make the application more scalable. If there is multiple orders/payments per party
var order = {
	id,
	user_id, // ref user
	party_id, // ref party
	name, // freetext
	type, // what type of order is it Entrance, Boose etc (application enum)
	payment_message // string: The message that will go on the Swish transactions.
}

var transaction = {
	order_id, // ref order ("payeePaymentReference")
	user_id, // ref user
	party_id, // ref party
	swish_payment_reference,
	payer_alias, // string: payer's number
	amount,
	status,
	date_paid,
	error_code, // string: if error, this will be filled
	error_message // string: if error, this will be filled
}

```