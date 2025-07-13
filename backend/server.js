import express from 'express'
import dotenv from 'dotenv'
import cors from  'cors'
import { connectDB } from './config/db.js';;
import bookRoutes from  './routes/bookRoutes.js'

dotenv.config();

const app = express()
const port = 5555;
app.use(express.json());
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credential:true, 
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

connectDB();

app.get('/', (req, res) => {
  res.send("this is Home page");
});
app.get('/login', (req, res) => {
  res.send("this is Login page");
});

app.use("/books", bookRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))