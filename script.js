const words = [ "Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];

    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    document.getElementById("typing").innerText = currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 5000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

type();


