const express = require('express');
const cors = require('cors');

const PORT = 5000 || process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api', (req, res) => {
    res.json(req.body);
});

app.listen(PORT, () => console.log(`server started on ${PORT} port`));