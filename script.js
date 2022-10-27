const hamburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.inner-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

// dynamic features
const database = [
  {
    image: './img/people/1.jpg',
    name: 'Aliana sanche',
    role: '32, teacher at excell academy and also works in tech company',
    description: 'Best program i have had the opportunity to work with. Its not too late to sign up this school year!.',
  },
  {
    image: './img/people/2.jpg',
    name: 'Alice',
    role: '26 years old. Teacher and also a fashion designer.',
    description: 'Hello there. Happy to be able to shape the future of many students across the world. This job makes me whole',
  },

  {
    image: './img/people/3.png',
    name: 'Meg Griphen',
    role: '31, A graphic designer, front end engineer',
    description: 'Happy to shape the future of thousands of students across the world. As much as i am a teaher, i also learn from my students, learn different cultures and background.',
  },
  {
    image: './img/people/4.jpg',
    name: 'John Smith',
    role: '26, a tech savy guy who loves e-sports. Also a pet lover',
    description: 'Happy to change individuals from beginers who dont belive in themselves to absolute proffesionals. This job makes me whole',
  },
  {
    image: 'img/people/5.jpg',
    name: 'James Jones',
    role: '39 years old. Front end and back end web engineer',
    description: 'Hello there. Happy to share my skills and technical experince with thousands of applicants who go throught our course. Its amazing how much i make a difference to many',
  },
  {
    image: './img/people/6.jpg',
    name: 'Hassan Rojas',
    role: '30, Previous architect, now Teacher and mentor',
    description: 'there. Happy to share my skills and technical experince with thousands of applicants who go throught our course.This job makes me whole',
  },
];

const feature = document.getElementById('dyanamic-features');
const head2 = document.createElement('h2');
head2.textContent = 'Hear From our Faculty';
feature.appendChild(head2);
const div = document.createElement('div');
div.classList.add('line-feature');
feature.appendChild(div);
const ul = document.createElement('ul');
ul.id = 'grid-container';
feature.appendChild(ul);

let i = 0;
database.forEach((projects) => {
  i += 1;
  const li = document.createElement('li');
  li.classList = 'cards';
  if (i > 2) {
    li.classList = 'cards enable-more';
  }
  ul.appendChild(li);
  li.innerHTML += `
    <div class="image-container"> <img src="${projects.image}"> </div>
    <div class="card-info">
    <h3>${projects.name}</h3>
    <p class="p1">${projects.role}</P><br>
    <p class="p2">${projects.description}</p>
    </div>
    `;
});

const button = document.createElement('button');
button.id = 'more-item';
button.innerHTML = 'more <i class="fa-solid drop-down fa-angle-down"></i>';
feature.appendChild(button);

// button action
const seeMore = document.querySelector('#more-item');
const more = document.querySelectorAll('.enable-more');
const seeBtnArr = Array.from(more);

seeMore.addEventListener('click', () => {
  seeBtnArr.forEach((n) => {
    n.classList.toggle('enable-more');
  });
  if (seeMore.innerHTML === 'more <i class="fa-solid drop-down fa-angle-down"></i>') {
    seeMore.innerHTML = 'less <i class="fa-solid drop-down fa-angle-down"></i>';
  } else {
    seeMore.innerHTML = 'more <i class="fa-solid drop-down fa-angle-down"></i>';
  }
});
