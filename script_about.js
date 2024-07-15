document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('typing-effect');

    const texts = ["Carl Menard T. Palillo", "Designer", "Programmer", "Video Editor"];
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenTexts = 1000;

    function type() {
        if (charIndex < texts[textIndex].length) {
            if (!isErasing) {
                element.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        } else {
            isErasing = true;
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (isErasing) {
                element.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingSpeed);
            }
        } else {
            isErasing = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, typingSpeed);
});
