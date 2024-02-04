const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Configuring MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'bwh_user',
  password: 'bwh_password',
  database: 'bwh_almost_east_coast'
});

// Connect to MySQL
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

const app = express();
app.use(express.json());

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, affiliationType } = req.body;

    // Check if the user already exists
    connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Error querying the database', error });
      }

      if (results.length > 0) {
        return res.status(409).json({ message: 'User already exists' });
      } else {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = { name, email, password: hashedPassword, affiliationType };
        connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
          if (error) {
            return res.status(500).json({ message: 'Error inserting the user', error });
          }

          res.status(201).json({ message: 'User created successfully' });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up user', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
