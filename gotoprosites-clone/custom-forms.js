document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form.et_pb_contact_form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                alert('Please fill out all required fields.');
                return;
            }
            
            // Find message container, which could be an ancestor or sibling
            let messageDiv = form.closest('.et_pb_contact_form_container').querySelector('.et-pb-contact-message');
            
            if (messageDiv) {
                // Simulate success
                messageDiv.innerHTML = '<div class="et-pb-contact-message-success" style="color: green; padding: 15px; border: 1px solid green; background: #eafbe7; border-radius: 5px; margin-bottom: 20px;">Thanks for contacting us! We will get in touch with you shortly.</div>';
                messageDiv.style.display = 'block';
            } else {
                alert('Thanks for contacting us! We will get in touch with you shortly.');
            }
            
            // Reset form
            form.reset();
        });
    });
});
