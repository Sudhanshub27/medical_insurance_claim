import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'super_secret_claimsure_key_123'; // In production, use environment variables

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided.' });

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Unauthorized.' });
    req.userId = decoded.id;
    next();
  });
};

// SIGNUP Endpoint
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Check if user already exists
  db.get('SELECT id FROM users WHERE email = ?', [email], (err, row) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    if (row) return res.status(409).json({ error: 'Email already exists.' });

    // Hash password and insert
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    db.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword],
      function (err) {
        if (err) return res.status(500).json({ error: 'Failed to create user.' });

        const token = jwt.sign({ id: this.lastID, email, name }, JWT_SECRET, { expiresIn: '24h' });
        res.status(201).json({
          message: 'Account created successfully',
          token,
          user: { name, email, phone: '+91 00000 00000', location: 'Not Specified' }
        });
      }
    );
  });
});

// LOGIN Endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error.' });
    if (!user) return res.status(401).json({ error: 'Invalid email or password.' });

    // Verify password
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return res.status(401).json({ error: 'Invalid email or password.' });

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '24h' });
    
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { name: user.name, email: user.email, phone: user.phone, location: user.location }
    });
  });
});

// UPDATE PROFILE Endpoint
app.put('/api/user/profile', verifyToken, (req, res) => {
  const { name, phone, location } = req.body;

  if (!name) return res.status(400).json({ error: 'Name is required.' });

  db.run(
    'UPDATE users SET name = ?, phone = ?, location = ? WHERE id = ?',
    [name, phone || '', location || '', req.userId],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to update profile.' });

      // Fetch the updated user to get the email (needed for JWT)
      db.get('SELECT * FROM users WHERE id = ?', [req.userId], (err, user) => {
        if (err || !user) return res.status(500).json({ error: 'Database error after update.' });

        // Generate a new JWT since the name might have changed
        const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '24h' });
        
        res.status(200).json({
          message: 'Profile updated successfully',
          token,
          user: { name: user.name, email: user.email, phone: user.phone, location: user.location }
        });
      });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
