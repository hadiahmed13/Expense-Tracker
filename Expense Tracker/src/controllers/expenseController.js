const Expense = require('../models/expenseModel');

exports.getExpenses = (req, res) => {
  Expense.fetchAll()
    .then(expenses => {
      res.render('index', { expenses });
    })
    .catch(err => console.log(err));
};

exports.addExpense = (req, res) => {
  const { description, amount, date } = req.body;
  const expense = new Expense(description, +amount, new Date(date));
  expense
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  Expense.deleteById(id)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getEditExpense = (req, res) => {
  const { id } = req.params;

  Expense.findById(id)
    .then(expense => {
      res.render('edit', { expense });
    })
    .catch(err => console.log(err));
};

exports.postEditExpense = (req, res) => {
  const { id } = req.params;
  const { description, amount, date } = req.body;

  Expense.updateById(id, description, +amount, new Date(date))
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
