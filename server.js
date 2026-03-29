const express = require('express');
const app = express();

// ⚠️ IMPORTANT: Body parsing middleware
// Yeh middleware incoming requests ka JSON body parse karta hai.
// Iske bina req.body undefined rahega POST requests mein.
app.use(express.json());

// ============ GET ROUTES ============

// GET /  → Home page ka response bhejta hai
app.get('/', (req, res) => {
  res.send('🏠 Welcome to Home Page!');
});

// GET /about  → About page ka response bhejta hai
app.get('/about', (req, res) => {
  res.send('ℹ️ This is About Page');
});

// ============ POST ROUTES ============

// POST /register  → User ka registration data receive karta hai
// Client ko JSON body mein name, email, aur age bhejna hoga
app.post('/register', (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ error: '❌ name, email, aur age required hain.' });
  }

  res.json({
    message: '✅ Registration successful!',
    receivedData: { name, email, age }
  });
});

// POST /contact-us  → Contact form ka message receive karta hai
// Client ko JSON body mein name aur message bhejna hoga
app.post('/contact-us', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: '❌ name aur message required hain.' });
  }

  res.json({
    message: '📨 Message received!',
    from: name,
    messageText: message
  });
});

// ============ SERVER START ============

// Server port 3000 par start hoga
app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
