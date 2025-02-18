document.addEventListener('DOMContentLoaded', function () { 
    const inputs = document.querySelectorAll('.form-control');
    const submitBtn = document.querySelector('form .btn');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const city = document.querySelector('#city');
    const medicalId = document.querySelector('#medical');
    
    const check = document.querySelector('.true-label');
    const error = document.querySelector('error-label');
    const errorText = document.querySelector('error-txt');


    const users = [];

    // Initially disable the submit button
    submitBtn.disabled = true;

    // Function to check if all required fields are filled
    function checkInputs() {
        if (name.value.trim() && email.value.trim() && phone.value.trim() && city.value.trim()) {
            submitBtn.disabled = false; // Enable submit button
        } else {
            submitBtn.disabled = true; // Keep it disabled
        }
    }

    // Attach event listeners to all required fields
    [name, email, phone, city].forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form from submitting by default

        const user = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            city: city.value,
            medicalId: medicalId.value,
        };
        
        users.push(user);
        window.location.href = 'home.html'; // Redirect after submission
    });

    // Label animations and background color change
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            const label = this.previousElementSibling;
            if (label && label.classList.contains('form-label')) {
                label.classList.add('label-up');
                const span = label.querySelector('.text-danger');
                if (span) {
                    span.style.display = 'none'; // Hide the asterisk when focused
                }
            }
        });

        input.addEventListener('blur', function () {
            const label = this.previousElementSibling;
            if (label && label.classList.contains('form-label') && !this.value) {
                label.classList.remove('label-up');
                const span = label.querySelector('.text-danger');
                if (span) {
                    span.style.display = ''; // Show the asterisk again if empty
                }
            }
        });

        input.addEventListener('input', function () {
            if (this.value) {
                this.style.borderColor = '#22C55E';
                check.classList.remove('d-none')
            } else {
                this.style.borderColor = ''; // Reset background if empty
                check.classList.add('d-none')
            }
        });

        
        if (input.value) {
            const label = input.previousElementSibling;
            if (label && label.classList.contains('form-label')) {
                label.classList.add('label-up');
                const span = label.querySelector('.text-danger');
                if (span) {
                    span.style.display = 'none'; // Hide asterisk for prefilled fields
                }
            }
            input.style.borderColor = '#22C55E'; // Apply background if prefilled

        }
    });
});
