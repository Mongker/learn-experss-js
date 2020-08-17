const express = require('express');
const userRouter = require('./routers/user.router')

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');


/**
 * Tạo cổng kết nối
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// render
app.get('/', (req, res) => {
    res.render('index', {
        name: 'MONGKER'
    });
});

// Routers
app.use('/users', userRouter);
