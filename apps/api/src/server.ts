import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express();
const PORT = 3000;


// json request parsing
app.use(express.json());

// cross-origin resource sharing
app.use(cors({
    origin: "http://localhost:5173"
}
));

// use routes from /routes as exposed in index.js
app.use('/api', routes);

// listen for requests
app.listen(PORT, () => {
    console.log('API listening on PORT ', PORT);
});
