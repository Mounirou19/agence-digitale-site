import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail } from '../services/emailService';

const router = Router();

// Validation rules
const contactValidation = [
  body('name').trim().notEmpty().withMessage('Le nom est requis'),
  body('email').isEmail().withMessage('Email invalide'),
  body('phone').optional().trim(),
  body('company').optional().trim(),
  body('message').trim().notEmpty().withMessage('Le message est requis')
];

// POST /api/contact
router.post('/', contactValidation, async (req: Request, res: Response) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, company, message } = req.body;

    // Send email
    await sendContactEmail({ name, email, phone, company, message });

    res.status(200).json({ 
      success: true, 
      message: 'Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Une erreur est survenue. Veuillez réessayer plus tard.' 
    });
  }
});

export default router;
