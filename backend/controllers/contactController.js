import Contact from '../models/Contact.js';

// @desc    Submit contact form
// @route   POST /api/contact
export const createContact = async (req, res) => {
  const contact = await Contact.create(req.body);

  res.status(201).json({
    success: true,
    message: 'Your message has been sent successfully. We will get back to you soon.',
    data: {
      id: contact._id,
      name: contact.name,
      createdAt: contact.createdAt,
    },
  });
};

// @desc    Get all contact messages (admin)
// @route   GET /api/contact
export const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    count: contacts.length,
    data: contacts,
  });
};

// @desc    Get single contact
// @route   GET /api/contact/:id
export const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error('Contact message not found');
  }

  res.json({ success: true, data: contact });
};

// @desc    Update contact status
// @route   PATCH /api/contact/:id
export const updateContactStatus = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );

  if (!contact) {
    res.status(404);
    throw new Error('Contact message not found');
  }

  res.json({ success: true, data: contact });
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
export const deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error('Contact message not found');
  }

  res.json({ success: true, message: 'Contact message deleted' });
};
