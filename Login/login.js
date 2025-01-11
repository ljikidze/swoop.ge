// რეგისტრაციის კოდი
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// ფორმის ელემენტები
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const passwordInput = document.getElementById("signUpPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordStrengthMessage = document.getElementById("passwordStrengthMessage");

// რეგისტრაციის ღილაკზე დაჭერისას
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// ლოგინის ღილაკზე დაჭერისას
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// ელ.ფოსტის ვალიდაციის ფუნქცია
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(email);
}

// პაროლის სიმძლავრის შემოწმება
function checkPasswordStrength(password) {
    const weakPattern = /^[a-z]+$/; // მხოლოდ ინგლისური ანბანის სიმბოლოები(რატომღაც არ მუშაობს)
    const mediumPattern = /^[a-zA-Z0-9]+$/; // ინგლისური ანბანის სიმბოლოები და რიცხვები
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/; // ინგლისური ანბანის დიდი და პატარა სიმბოლოები, ასევე რიცხვები

    if (strongPattern.test(password)) {
        return "პაროლი ძლიერი";
    } else if (mediumPattern.test(password)) {
        return "პაროლი საშუალო";
    } else if (weakPattern.test(password)) {
        return "პაროლი სუსტი";
    } else {
        return "პაროლი არ შეესაბამება მოთხოვნებს";
    }
}

// რეგისტრაციის ფორმის ვალიდაცია
signUpForm.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('signUpEmail').value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // ელ.ფოსტის ვალიდაცია
    if (!validateEmail(emailInput)) {
        alert("ელ. ფოსტა არ არის ვალიდური. გთხოვთ, შეიყვანეთ სწორი ფორმატი!");
        event.preventDefault();
        return;
    }

    // პაროლების შედარება
    if (password !== confirmPassword) {
        alert("პაროლები არ ემთხვევა!");
        event.preventDefault();
        return;
    }

    // პაროლის სიმძლავრის შემოწმება
    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "პაროლი სუსტი" || passwordStrength === "პაროლი არ შეესაბამება მოთხოვნებს") {
        alert("პაროლი ძალიან სუსტია. გთხოვთ, გამოიყენეთ უფრო რთული პაროლი.");
        event.preventDefault();
        return;
    }

    alert("რეგისტრაცია წარმატებულია!");
});

// პაროლის სიმძლავრის შეტყობინება
passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    const message = checkPasswordStrength(password);
    passwordStrengthMessage.innerText = message; 
});

// ლოგინის ფორმის ვალიდაცია
signInForm.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('signInEmail').value;

    if (!validateEmail(emailInput)) {
        alert("ელ. ფოსტა არ არის ვალიდური. გთხოვთ, შეიყვანეთ სწორი ფორმატი!");
        event.preventDefault(); 
        return;
    }

    alert("შესვლა წარმატებულია!");
});
