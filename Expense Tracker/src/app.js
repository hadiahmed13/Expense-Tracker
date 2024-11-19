const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { mongoConnect } = require('./util/database');
const expenseController = require('./controllers/expenseController');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', expenseController.getExpenses);
app.post('/add', expenseController.addExpense);
app.get('/delete/:id', expenseController.deleteExpense);

app.get('/edit/:id', expenseController.getEditExpense);
app.post('/edit/:id', expenseController.postEditExpense);


mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
