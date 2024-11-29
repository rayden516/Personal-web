import { sendEmail } from './emailService';

export const handleFormSubmit = async (event, form) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    
    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        const formData = {
            from_name: form.querySelector('input[type="text"]').value,
            from_email: form.querySelector('input[type="email"]').value,
            message: form.querySelector('textarea').value
        };
        
        await sendEmail(formData);
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
};