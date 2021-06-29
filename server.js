// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./controllers/');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize handlebars
const hbs = exphbs.create({ helpers });

// Initialize the server and port
const app = express();
const PORT = process.env.PORT || 3001;

// Initialize sessions
const sess = {
    secret: 'Super secret secret', //process.env.DB_SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Set handlebars as the template engine for the server
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on localhost'));
});
