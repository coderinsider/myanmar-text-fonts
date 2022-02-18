const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3005;

const PUBLIC_PATH = 'pages/public';
// set the view engine to ejs
app.set('view engine', 'ejs');
// Respond with message data when a GET request is made to home page /
app.get('/', (req, res) => {
	const dataObject = {
		pageTitle: 'Welcome to homepage',
		current_page: 'home'
	};
	res.status(200).render(
		`${PUBLIC_PATH}/home`,
		dataObject,
		(err, dataView) => {
			if(err) return res.status(500).json({
				status: 500,
				message: "You have some error message on this route",
				errors: err
			});
			res.status(200).send(dataView);
		}
	);
});
app.listen(PORT, () => {
	console.log(`Your server running on port: ${PORT}`);
});