import express from 'express';
import { getPeople } from './resources';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/api/:version/people', (req, res) => {
    // pull out version from route
    const { version } = req.params;

    const data = getPeople(version)
    res.send({ people: data })

});

app.listen(port, () => {
    console.log(`App up and running on port ${port}`)
})