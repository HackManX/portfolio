import Contact from '../models/contactModel';

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error: error.message });
  }
};