import express from 'express';
import fs from 'path'; // For file system access (if using data.ts)
import User from '../models/user';


const defaultPath = '/users';
const router = express.Router();

// Load users from JSON file (utility function can be added here)
function getUsers(): User[] {
  // Implement logic to read users from data.json if using data.ts
  // This example assumes in-memory data for simplicity
  return [
    new User('1', 'John', 'Doe'),
    new User('2', 'Jane', 'Doe'),
  ];
}

// Save users to JSON file (utility function can be added here)
function saveUsers(users: User[]) {
  // Implement logic to save users to data.json if using data.ts
}

// Get all users
router.get(defaultPath, (req, res) => {
  const users = getUsers();
  res.json(users);
});

// Get user by ID
router.get(`${defaultPath}/:id`, (req, res) => {
  const { id } = req.params;
  const users = getUsers();
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// Create new user
router.post(defaultPath, (req, res) => {
  const newUser = new User(req.body.id, req.body.name, req.body.lastName);
  const users = getUsers();
  users.push(newUser);
  saveUsers(users); // Update data store (implement logic)
  res.json(newUser);
});

// Update user by ID
router.put(`${defaultPath}/:id`, (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return res.status(404).send('User not found');
  }

  users[index] = updatedUser;
  saveUsers(users); // Update data store (implement logic)
  res.json(updatedUser);
});

// Delete user by ID
router.delete(`${defaultPath}/:id`, (req, res) => {
  const { id } = req.params;
  const users = getUsers().filter(user => user.id !== id);
  saveUsers(users); // Update data store (implement logic)
  res.json({ message: 'User deleted' });
});

export default router;
