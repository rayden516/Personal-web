// Email service configuration and utilities
export const EMAIL_SERVICE_ID = 'service_wbloxxu';
export const EMAIL_TEMPLATE_ID = 'template_r6xz5mr';
export const EMAIL_PUBLIC_KEY = 'ntWbk0f8zGG2jpM5_';

export const initEmailService = () => {
    emailjs.init(EMAIL_PUBLIC_KEY);
};

export const sendEmail = async (formData) => {
    try {
        const response = await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            {
                to_name: 'Portfolio Owner',
                from_name: formData.from_name,
                from_email: formData.from_email,
                message: formData.message,
                to_email: 'hs8564890@gmail.com'
            }
        );
        return response;
    } catch (error) {
        throw new Error('Failed to send email');
    }
};