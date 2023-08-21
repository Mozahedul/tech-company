let btnElm = document.getElementsByClassName('faq-btn');
let icons = document.getElementsByClassName('icon-faq');
let details = document.getElementsByClassName('faq-details');
let faqBtn = document.getElementsByClassName('faq-btn');

console.log(faqBtn);

console.log(icons);

for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', () => {
    console.log(details[i].offsetHeight, details[i].scrollHeight);
    if (details[i].offsetHeight !== details[i].scrollHeight) {
      details[i].style.height = details[i].scrollHeight + 'px';

      icons[i].classList.remove('fa-plus');
      icons[i].classList.add('fa-minus');
      faqBtn[i].style.backgroundColor = '#084c8b';
      faqBtn[i].style.color = '#ffffff';
    } else {
      details[i].style.height = 0 + 'px';
      icons[i].classList.remove('fa-minus');
      icons[i].classList.add('fa-plus');
      faqBtn[i].style.backgroundColor = 'transparent';
      faqBtn[i].style.color = 'rgb(58, 58, 58)';
    }

    for (let j = 0; j < details.length; j++) {
      if (j !== i) {
        details[j].style.height = 0 + 'px';
        icons[j].classList.remove('fa-minus');
        icons[j].classList.add('fa-plus');
        faqBtn[j].style.backgroundColor = 'transparent';
        faqBtn[j].style.color = 'rgb(58, 58, 58)';
      }
    }
  });
}
