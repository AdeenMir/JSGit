function generatePassword(length, includelowercase, includenumbers, includeuppercase, includesymbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*-+";

    let allowedchars = "";
    let password = "";

    allowedchars += includelowercase ? lowercasechars : "";
    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includenumbers ? numberchars : "";
    allowedchars += includesymbols ? symbolchars : "";

    if (length <= 0) {
        return "Password length must be at least one.";
    }

    if (allowedchars.length === 0) {
        return "At least one character type must be selected.";
    }

    for (let i = 0; i < length; i++) {
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;
}

function handleGenerate() {
    const length = parseInt(document.getElementById("length").value);
    const includeLower = document.getElementById("lowercase").checked;
    const includeUpper = document.getElementById("uppercase").checked;
    const includeNums = document.getElementById("numbers").checked;
    const includeSyms = document.getElementById("symbols").checked;

    const password = generatePassword(length, includeLower, includeNums, includeUpper, includeSyms);
    document.getElementById("output").textContent = password;
}
