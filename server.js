const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//Name of the folder
app.use(express.static('public'));

const port = process.env.PORT || 3000;

//Home page
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

