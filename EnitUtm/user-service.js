const express = require('express');
const app = express();
const port = 3000;

// Sample user data
const users = [
  { id: 1, name: 'John Smith', gender: 'Male', age: 28, height: '6\'1"', occupation: 'Software Engineer' },
  { id: 2, name: 'Emily Johnson', gender: 'Female', age: 25, height: '5\'6"', occupation: 'Marketing Specialist' },
  { id: 3, name: 'Michael Davis', gender: 'Male', age: 32, height: '5\'10"', occupation: 'Financial Analyst' },
  { id: 4, name: 'Sophia Brown', gender: 'Female', age: 22, height: '5\'4"', occupation: 'Student at ABC University' },
  { id: 5, name: 'Daniel Miller', gender: 'Male', age: 30, height: '6\'0"', occupation: 'Graphic Designer' },
  { id: 6, name: 'Olivia Wilson', gender: 'Female', age: 29, height: '5\'8"', occupation: 'UX/UI Designer' },
  { id: 7, name: 'Christopher Martinez', gender: 'Male', age: 26, height: '5\'11"', occupation: 'Teacher' },
  { id: 8, name: 'Ava Taylor', gender: 'Female', age: 24, height: '5\'5"', occupation: 'Nurse' },
  { id: 9, name: 'William Johnson', gender: 'Male', age: 31, height: '6\'2"', occupation: 'Project Manager' },
  { id: 10, name: 'Emma White', gender: 'Female', age: 27, height: '5\'7"', occupation: 'Product Manager' },
];

// Route to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Route to get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
