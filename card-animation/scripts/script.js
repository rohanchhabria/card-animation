const cardheader = document.querySelector('.card-header');
const cardtitle = document.querySelector('.card-title');
const cardexcerpt = document.querySelector('.card-excerpt');
const avatar = document.querySelector('.avatar');
const authorname = document.querySelector('.author-name');
const carddate = document.querySelector('.card-date');

const animateeffect = document.querySelectorAll('.animate-effect');
const animatetext = document.querySelectorAll('.animate-text');



function insertdata() {
    cardheader.innerHTML = '<img src="https://pbs.twimg.com/media/EjwsriqVoAAkcpf?format=jpg&name=large" alt="starman" />';
    cardtitle.innerHTML = 'Starman -- last seen leaving Earth.';
    cardexcerpt.innerHTML = 'Starman made its first close approach with Mars today—within 0.05 astronomical units, or under 5 million miles, of the Red Planet.';
    avatar.innerHTML = '<img src="https://avatars.githubusercontent.com/u/58826613?v=4" alt="avatar" />';
    authorname.innerHTML = 'rohan chhabria';
    carddate.innerHTML = '4:17 AM &centerdot; Oct 8, 2020';

    animateeffect.forEach((element) => element.classList.remove('animate-effect'));
    animatetext.forEach((element) => element.classList.remove('animate-text'));
}

// insert data after 2.5s
setTimeout(insertdata, 2500);