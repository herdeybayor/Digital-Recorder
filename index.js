const keys = document.querySelectorAll(".key");
const note = document.querySelector(".key-pressed");

function Note(do1, re, mi, fa, so, la, ti, do2) {
  this.do1 = new Audio(do1);
  this.re = new Audio(re);
  this.mi = new Audio(mi);
  this.fa = new Audio(fa);
  this.so = new Audio(so);
  this.la = new Audio(la);
  this.ti = new Audio(ti);
  this.do2 = new Audio(do2);
};

var newNote = new Note("audio/65.wav", "audio/83.wav", "audio/68.wav", "audio/70.wav", "audio/74.wav", "audio/75.wav", "audio/76.wav", "audio/186.wav");

window.addEventListener("keydown", playNote);
$(".key").click(function () {
  $(this).fadeOut(125).fadeIn(125);
  switch ($(this).text()) {
    case "DO C":
      var audio = new Audio("audio/65.wav");
      audio.play();
      break;

    case "RE D":
      var audio = new Audio("audio/83.wav");
      audio.play();
      break;

    case "MI E":
      var audio = new Audio("audio/68.wav");
      audio.play();
      break;

    case "FA F":
      var audio = new Audio("audio/70.wav");
      audio.play();
      break;

    case "SO G":
      var audio = new Audio("audio/74.wav");
      audio.play();
      break;

    case "LA A":
      var audio = new Audio("audio/75.wav");
      audio.play();
      break;

    case "TI B":
      var audio = new Audio("audio/76.wav");
      audio.play();
      break;

    case "DO C#":
      var audio = new Audio("audio/186.wav");
      audio.play();
      break;
  }
});

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.dataset.note;
  // console.log(keyNote);

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

// Remove playing class
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== "opacity") return;
  this.classList.remove("playing");
}