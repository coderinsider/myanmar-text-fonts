const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3005;
const path = require('path');
const publicHomePage = require('./routes/public/index');
const apiRoute = require('./routes/api/index');
const fs = require('fs');
console.log(path.join(__dirname));
const khmertypeFiles = fs.readdirSync(path.join(__dirname, 'public/fonts/khmertype'), (err, data) => {
	if(err) console.log(`Your have a some error message ${err}`);
});
app.set('khmertype', khmertypeFiles);
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
	console.log(`${req.url} Your request method is ${req.method}`);
	next();
});
// Respond with message data when a GET request is made to home page /
/** Public Router **/
app.use("/", publicHomePage);
app.use("/api", apiRoute);

app.listen(PORT, () => {
	console.log(`Your server running on port: ${PORT}`);
});
console.log(khmertypeFiles);