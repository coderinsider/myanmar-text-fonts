const express = require('express');
const router = express.Router();
const PUBLIC_PATH = 'pages/public';
router.get('/', (req, res) => {
	const data = {
		pageTitle: 'Welcome to homepage',
		current_page: 'home'
	};
	res.status(200).json([{status: true, data}]);
});

module.exports = router;