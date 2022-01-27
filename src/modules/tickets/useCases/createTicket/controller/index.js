const { v4: uuidv4 } = require('uuid');
const data = require('../../../../../database/data');

module.exports = (req, res) => {
  const { title, description } = req.body;

  if(!title || !description) return res.status(400).json({ message: 'title and description is required' })

  const ticket = {
    id: uuidv4(),
    title,
    description,
    created_at: new Date()
  }

  data.push(ticket);

  return res.status(201).send();
}