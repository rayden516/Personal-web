// Email service configuration
export const EMAIL_CONFIG = {
    serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    recipient: {
        name: import.meta.env.VITE_RECIPIENT_NAME,
        email: import.meta.env.VITE_RECIPIENT_EMAIL
    }
};