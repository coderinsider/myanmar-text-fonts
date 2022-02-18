const express = require('express');
const router = express.Router();
const PUBLIC_PATH = 'pages/public';
router.get('/', (req, res) => {
	const dataObject = {
		pageTitle: 'Welcome to homepage',
		current_page: 'home'
	};
	res.status(200).render(
		`${PUBLIC_PATH}/home`,
		dataObject,
		(err, dataView) => {
			console.log(err);
			if(err) return res.status(500).json({
				status: 500,
				message: "You have some error message on this route",
				errors: err
			});
			res.status(200).send(dataView);
		}
	);
});

module.exports = router;