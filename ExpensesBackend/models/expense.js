const mongoose = require('mongoose');
const {Types: {ObjectId}} = mongoose;
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});


/* const expense = new Expense({
    title: 'Monitor',
    amount: 1300,
    date: Date.now()
});

expense.save() */


module.exports = mongoose.model('Expense', ExpenseSchema);


