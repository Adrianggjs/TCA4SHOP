const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../db/dbHelper');

// Products API
router.get('/products', (req, res) => {
  const db = readDB();
  res.json(db.products);
});

router.get('/products/:id', (req, res) => {
  const db = readDB();
  const product = db.products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Reviews API
router.get('/reviews', (req, res) => {
  const db = readDB();
  res.json(db.reviews);
});

router.post('/reviews', (req, res) => {
  const { user, rating, comment } = req.body;
  if (!user || !rating || !comment) {
    return res.status(400).json({ message: 'Missing required fields: user, rating, comment' });
  }

  const db = readDB();
  const newReview = {
    id: Date.now().toString(),
    user,
    rating: parseInt(rating),
    comment,
    date: new Date().toISOString().split('T')[0]
  };

  db.reviews.unshift(newReview); // Add to the beginning of the list
  writeDB(db);

  res.status(201).json(newReview);
});

// Wholesale API
router.post('/wholesale', (req, res) => {
  const { name, phone, email, details } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ message: 'Missing required fields: name, phone' });
  }

  const db = readDB();
  const newRequest = {
    id: Date.now().toString(),
    name,
    phone,
    email: email || '',
    details: details || '',
    date: new Date().toISOString()
  };

  db.wholesale_requests.push(newRequest);
  writeDB(db);

  res.status(201).json({ message: 'Wholesale request submitted successfully', request: newRequest });
});

// Contact API
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ message: 'Missing required fields: name, message' });
  }

  const db = readDB();
  const newContact = {
    id: Date.now().toString(),
    name,
    email: email || '',
    message,
    date: new Date().toISOString()
  };

  db.contacts.push(newContact);
  writeDB(db);

  res.status(201).json({ message: 'Contact message sent successfully', contact: newContact });
});

module.exports = router;
