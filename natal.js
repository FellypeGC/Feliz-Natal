function openGift() {
  let presente = document.getElementById('presente');
  
  if (presente.style.visibility === 'hidden') {
    presente.style.visibility = 'visible';
  } else {
    presente.style.visibility = 'hidden';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', openGift);
});

