const express = require('express');
const app = express();

const PORT = 3000;

app.get('/api/hello', (req, res) => {
    res.json({
        "msg": "Hello niama!"
    })
});

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});