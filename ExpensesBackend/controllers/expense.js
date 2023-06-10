const mongoose = require("mongoose");
const {
  Types: { ObjectId },
} = mongoose;
const Expense = require("../models/expense");

module.exports.getAllExpenses = async (req, res, next) => {
  let expenses;

  try {
    //const expenses = await Expense.find({}).exec();
    expenses = await Expense.find({});
  } catch (err) {
    const error = new Error(err.message);
    error.status = 500;
    return next(err);
  }

  res.send(expenses);
};

module.exports.getExpenseById = async (req, res, next) => {
  const { id } = req.params;
  let expense;

  if (!ObjectId.isValid(id)) {
    const error = new Error(
      `Invalid Object ID: ${id}, Try again with a valid Object ID.`
    );
    return next(error);
  }
  try {
    // const expense = await Expense.findOne({_id : id}).exec();
    expense = await Expense.findById(id);
    if (expense == null) {
      const error = new Error("No Record Found!");
      error.status = 404;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    return next(error);
  }

  res.send(expense);
};

module.exports.createNewExpense = async (req, res, next) => {
  let savedExpense;
  try {
    const newExpense = req.body;
    const expense = new Expense(newExpense);
    savedExpense = await expense.save();
  } catch (err) {
    const error = new Error(err.message);
    return next(error);
  }

  res.status(201).send(savedExpense);
};

module.exports.updateExpenseById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    const error = new Error(
      `Invalid Object ID: ${id}, Try again with a valid Object ID.`
    );
    error.status = 400;
    return next(error);
  }
  try {
    // const existingExpense = await Expense.findById(id).exec();
    const existingExpense = await Expense.findById(id);
    if (existingExpense == null) {
      const error = new Error(`No Record exists for ID: ${id}`);
      error.status = 400;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    return next(error);
  }

  let updatedExpense;
  try {
    const newExpense = req.body;
    updatedExpense = await Expense.findByIdAndUpdate(id, newExpense, {
      new: true,
    });
  } catch (err) {
    const error = new Error(err.message);
    return next(error);
  }

  res.status(200).send(updatedExpense);
};

module.exports.deleteExpenseById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    const error = new Error(
      `Invalid Object ID: ${id}, Try again with a valid Object ID.`
    );
    error.status = 400;
    return next(error);
  }

  let deleteResponse;
  try {
    deleteResponse = await Expense.findByIdAndDelete(id);
    if (deleteResponse == null) {
      const error = new Error(`No Record exists for ID: ${id}`);
      error.status = 400;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    return next(error);
  }

  res.send(deleteResponse);
};
