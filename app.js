const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3005;
// set the view engine to ejs
app.set('view engine', 'ejs');
// Respond with message data when a GET request is made to home page /
app.get('/', (req, res) => {
	const dataObject = {
		pageTitle: 'Welcome to homepage',
	}
	res.status(200).render(
		'pages/public/home',
		dataObject
	);
});
app.listen(PORT, () => {
	console.log(`Your server running on port: ${PORT}`)
});