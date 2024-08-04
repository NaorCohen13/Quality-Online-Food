const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { getAllShoppingLists, newShoppingList, shoppingList } = require('./controllers/shoppingListController'); // עדכן את הנתיב בהתאם למיקום של קובץ הבקר

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // שירות קבצים סטטיים

app.post('/newShoppingList', newShoppingList);
app.get('/shoppingList', shoppingList);
app.get('/history', getAllShoppingLists);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
