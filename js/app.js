const aboutLink = document.querySelector('.about-link'); 
const skillsLink = document.querySelector('.skills-link'); 
const socialLink = document.querySelector('.social-link'); 

window.addEventListener('scroll', () => {
    console.log(Math.floor(document.documentElement.scrollTop));
})

const scrollToAbout = () => {
    document.documentElement.scrollTo('0', '781');
}

const scrollToSkills = () => {
    document.documentElement.scrollTo('0', '1222');
}

const scrollToSocials = () => {
    document.documentElement.scrollTo('0', '1861');
}

aboutLink.addEventListener('click', scrollToAbout);
skillsLink.addEventListener('click', scrollToSkills);
socialLink.addEventListener('click', scrollToSocials);