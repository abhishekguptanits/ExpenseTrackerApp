const express = require("express");
const router = express.Router();
const expense = require('../controllers/expense');

router.route('/')
    .get(expense.getAllExpenses)
    .post(expense.createNewExpense)

router.route('/:id')
    .put(expense.updateExpenseById)
    .delete(expense.deleteExpenseById);


module.exports = router;
