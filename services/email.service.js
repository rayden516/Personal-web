import { EMAIL_CONFIG } from '../config/email.config';
import { formatEmailData } from '../utils/emailService';

/**
 * Send email using EmailJS
 */
export const sendEmail = async (formData) => {
    try {
        const emailData = formatEmailData(formData);
        const response = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            emailData
        );
        return response;
    } catch (error) {
        throw new Error('Failed to send email');
    }
};