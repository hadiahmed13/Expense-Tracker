const { getDb } = require('../util/database');
const { ObjectId } = require('mongodb');

class Expense {
  constructor(description, amount, date) {
    this.description = description;
    this.amount = amount;
    this.date = date || new Date();
  }

  save() {
    const db = getDb();
    return db.collection('expenses').insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('expenses').find().toArray();
  }

  static deleteById(expenseId) {
    const db = getDb();
    return db.collection('expenses').deleteOne({ _id: new ObjectId(expenseId) });
  }

  static findById(expenseId) {
    const db = getDb();
    return db.collection('expenses').findOne({ _id: new ObjectId(expenseId) });
  }

  static updateById(expenseId, description, amount, date) {
    const db = getDb();
    return db.collection('expenses').updateOne(
      { _id: new ObjectId(expenseId) },
      { $set: { description, amount, date } }
    );
  }
}

module.exports = Expense;
