const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
const spaceChars = " ";

function getRandomChar(Chars) {
    const index = Math.floor(Math.random() * Chars.length);
    return Chars[index];
}

function generatePassword() {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolCheckbox = document.getElementById("symbols");
    const spaceCheckbox = document.getElementById("spaces");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplication");

    let Characters = "";

    if (lowercaseCheckbox.checked) {
        Characters += lowercaseChars;
    }

    if (uppercaseCheckbox.checked) {
        Characters += uppercaseChars;
    }

    if (numbersCheckbox.checked) {
        Characters += numbersChars;
    }

    if (symbolCheckbox.checked) {
        Characters += symbolChars;
    }

    if (spaceCheckbox.checked) {
        Characters += spaceChars;
    }

    if (Characters === "") {
        passwordInput.value = "";
        return;
    }

    let password = "";
    const length = 12;

    while (password.length < length) {
        let char = getRandomChar(Characters);
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("password");
    const copyButton = document.getElementById("copy");
    passwordInput.disabled = false;
    passwordInput.select();
    document.execCommand("copy");
    passwordInput.disabled = true;
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 2000);
}