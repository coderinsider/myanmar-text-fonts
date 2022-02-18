const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3005;
const path = require('path');
const publicHomePage = require('./routes/public/index');
const apiRoute = require('./routes/api/index');
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use((req, res, next) => {
	console.log(`/${req.url} Your request method is ${req.method}`);
	next();
});
// Respond with message data when a GET request is made to home page /
/** Public Router **/
app.use("/", publicHomePage);
app.use("/api", apiRoute);

app.listen(PORT, () => {
	console.log(`Your server running on port: ${PORT}`);
});