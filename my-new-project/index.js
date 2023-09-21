const express = require('express');
const port = 3000;
const app = express();
app.get('/', (req, res ) => {
    res.send('Jamil is going to learn Azure');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

});
