import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import {fileURLToPath} from 'url';
import UserRouter from './routes/User.js';
import DashboardRouter from './routes/Dashboard.js';
import AuthRouter from './routes/Auth.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/'))
app.use(express.static('public'))

app.use('/', DashboardRouter)
app.use('/user', UserRouter);
app.use('/auth', AuthRouter);

app.use('*', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(3000, () => console.log("server success running in port :3000"));
