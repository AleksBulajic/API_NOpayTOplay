const  express =  require('express');
const dotenv = require('dotenv');
const connectDB = require('../server/db/connection.js')

const port = process.env.PORT || 6000;


dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.use('/games', require('./routes/gamesRoutes'))


app.listen(port, () => console.log(`Server runnng on port ${port}`));





