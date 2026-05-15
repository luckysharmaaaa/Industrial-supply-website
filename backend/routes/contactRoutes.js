import express from 'express';
import {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';
import { contactValidationRules, validate } from '../middleware/validateContact.js';

const router = express.Router();

router.route('/').post(contactValidationRules, validate, createContact).get(getContacts);

router
  .route('/:id')
  .get(getContactById)
  .patch(updateContactStatus)
  .delete(deleteContact);

export default router;
