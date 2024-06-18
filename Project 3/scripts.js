document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const feedbackForm = document.getElementById('feedback-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Contact form submitted successfully');
                contactForm.reset();
            } else {
                alert('Failed to submit contact form');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting contact form');
        }
    });

    feedbackForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(feedbackForm);
        const data = Object.fromEntries(formData.entries());
        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Feedback submitted successfully');
                feedbackForm.reset();
            } else {
                alert('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting feedback');
        }
    });
});
