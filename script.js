const letterText = `আমার প্রিয় সাদুপাখি,

তোমাকে আমার জীবনে পেয়ে আমি নিজেকে পৃথিবীর সবচেয়ে ভাগ্যবান মানুষ মনে করি।

তোমার হাসি, তোমার চোখ, তোমার কণ্ঠস্বর — সব কিছুতেই আমি প্রতিদিন নতুন করে প্রেমে পড়ি।

তোমার ভালবাসা আমার জীবনকে পূর্ণ করে দিয়েছে, আর আমি প্রতিটি মুহূর্তে তোমায় আগলে রাখতে চাই।

তুমি আমার সকাল, তুমি আমার রাত, তুমি আমার সবকিছু।

ভালোবাসি তোমায় অশেষ, চিরকাল...`;

let i = 0;
function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("letter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
window.onload = function() {
  typeWriter();
  startFloatingHearts();
};

function startFloatingHearts() {
  const container = document.getElementById("heart-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(45deg)`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 200);
}