import sgMail from '@sendgrid/mail';
import DOMPurify from 'dompurify';

sgMail.setApiKey('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');

export { POST as default } from './message';
