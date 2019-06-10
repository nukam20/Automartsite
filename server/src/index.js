import express from 'express'

import config from './config';
import router from './routes';

const app = express();
config.PORT = 4000
app.use(express.json());
app.use(express.urlencoded());

app.use('/', router);

app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Resource not found.",
        possibleCauses: [
            'Maybe you got the url wrong',
            'njdkbvdybvdkj'
        ],
    });
});

app.listen(config.PORT, () => {
    console.log(`Server now listen on port: ${config.PORT}!`)
});

export default app;
