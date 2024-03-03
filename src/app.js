const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({express: true}));

const defaultRoute = require('./routes/DefaultRoute');
app.use('/kmer-transport', defaultRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})