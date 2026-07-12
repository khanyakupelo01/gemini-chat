// main.js
const { app } = require("./app.js");


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.info(`Server is listening on port ${PORT}.`);
  console.info(`Visiting http://localhost:${PORT} will show the app running in your browser.`);
});


//NOTE - It is common practice to define the Express application in one file, then have it listen in another file, as a way to separate concerns. In the Codecademy environment, we must place the app definition and .listen() call in different files to facilitate testing needs.