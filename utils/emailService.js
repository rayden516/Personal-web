// Email service configuration and utilities
export const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
export const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
export const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const EMAIL_CONFIG = {
    recipient: {
        name: import.meta.env.VITE_RECIPIENT_NAME,
        email: import.meta.env.VITE_RECIPIENT_EMAIL
    }
};

export const initEmailService = () => {
    emailjs.init(EMAIL_PUBLIC_KEY);
};

export const sendEmail = async (formData) => {
    try {
        const response = await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            {
                to_name: EMAIL_CONFIG.recipient.name,
                from_name: formData.from_name,
                from_email: formData.from_email,
                message: formData.message,
                to_email: EMAIL_CONFIG.recipient.email
            }
        );
        return response;
    } catch (error) {
        throw new Error('Failed to send email');
    }
};