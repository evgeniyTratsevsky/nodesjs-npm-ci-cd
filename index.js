const express = require('express');
const index = express();
const PORT = 3000;

index.get('/', (req, res) => {
    res.send('NodeJS Sample!');
});

index.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
