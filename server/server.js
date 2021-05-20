const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const reactBuildDir = path.join(__dirname, "..", "build");

// middlewares
app.use(express.static(reactBuildDir));
app.use(express.static('public'));
if (process.env.ENV === 'dev') app.use(cors());

console.log({env: process.env.ENV})

// add the routes
app.use('/api', require('./routes/index.route'))

// handle all other routes by react router
app.get('*', (req, res) => {
  res.sendFile('index.html', {root: reactBuildDir});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
})
