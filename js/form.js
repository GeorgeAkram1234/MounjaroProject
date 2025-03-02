document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-control');
    const submitBtn = document.querySelector('form .btn');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const city = document.querySelector('#city');
    const medicalId = document.querySelector('#medical');

    // Initially disable the submit button
    submitBtn.disabled = true;

    // Validation functions
    function validateName(name) {
        return /^[A-Za-z\s]+$/.test(name);
    }

    function validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    function validatePhone(phone) {
        return /^\d{7,15}$/.test(phone); // Ensures only numbers and reasonable length
    }

    function validateCity(city) {
        return city.trim().length > 0;
    }

    function validateInput(input) {
        let isValid = false;
        let value = input.value.trim();
        let parent = input.closest('.mb-3');
        let checkIcon = parent.querySelector('.true-label');
        let errorIcon = parent.querySelector('.error-label');

        if (input.id === "name") {
            isValid = validateName(value);
        } else if (input.id === "email") {
            isValid = validateEmail(value);
        } else if (input.id === "phone") {
            isValid = validatePhone(value);
        } else if (input.id === "city") {
            isValid = validateCity(value);
        } else {
            isValid = true; // Optional field (Medical ID) is always valid
        }

        if (value === "") {
            checkIcon.classList.add('d-none');
            errorIcon.classList.add('d-none');
            input.style.borderColor = ''; // Reset border
        } else if (isValid) {
            checkIcon.classList.remove('d-none');
            errorIcon.classList.add('d-none');
            input.style.borderColor = '#22C55E'; // Green border
        } else {
            checkIcon.classList.add('d-none');
            errorIcon.classList.remove('d-none');
            input.style.borderColor = '#DC3545'; // Red border
        }

        checkFormValidity();
    }

    function checkFormValidity() {
        if (
            validateName(name.value) &&
            validateEmail(email.value) &&
            validatePhone(phone.value) &&
            validateCity(city.value)
        ) {
            submitBtn.disabled = false; // Enable button if all fields are valid
        } else {
            submitBtn.disabled = true; // Keep disabled if any field is invalid
        }
    }

    // Attach event listeners for validation and animation
    inputs.forEach(input => {
        const label = input.previousElementSibling;

        input.addEventListener('focus', function () {
            if (label && label.classList.contains('form-label')) {
                label.classList.add('label-up');
            }
        });

        input.addEventListener('blur', function () {
            if (label && label.classList.contains('form-label') && !this.value) {
                label.classList.remove('label-up');
            }
            validateInput(this); // Ensure validation works even after losing focus
        });

        input.addEventListener('input', function () {
            validateInput(this);
        });

        // Keep label up if field has pre-filled value
        if (input.value.trim()) {
            label.classList.add('label-up');
        }
    });

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        if (!submitBtn.disabled) {
            const user = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                city: city.value,
                medicalId: medicalId.value,
            };

            console.log("User data submitted:", user);
            window.location.href = 'home.html'; // Redirect if all inputs are valid
        }
    });
});
