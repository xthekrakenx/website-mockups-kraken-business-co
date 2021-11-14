// Navbar Start
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav-links');

//Add event listener to menu div/btn
menu.addEventListener('click', () => {
    navbar.classList.toggle('toggle');
});

//Handle closing of overlay once link is clicked
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.toggle('toggle'); 
    });
});
// Navbar End

// Section 2 Start
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
    if(video.paused){
        video.play();
        btn.className = 'far fa-pause-circle playing';
        video.style.opacity = 1;
    } else {
        video.pause();
        btn.className = 'far fa-play-circle';
        video.style.opacity = 0.3;
    }
}

btn.addEventListener('click', () => {
    playPause();
});

video.addEventListener('timeupdate', () => {
const barWidth = video.currentTime / video.duration; //Determine where to place progress bar based on current video time
bar.style.width = `${barWidth * 100}%`; //Place progress bar
});
// Section 2 End

// Section 3 Start
const contactSelect = document.getElementById('contact-reason');
const planButtons = document.querySelectorAll('.pricing-card-btn');
const contactTextarea = document.getElementById('contact-message');
planButtons.forEach((button, key) => {
    button.addEventListener('click', () => {
        //Change form option to corresponding plan clicked
        contactSelect.value = key + 1; //Add 1 to index to get appropriate option value

        let planText = contactSelect.options[key + 1].text;
        //Populate contact message w/generic message with corresponding plan clicked
        contactTextarea.value = `I would like more info regarding the ${planText}.`;
        
    });
});
// Section 3 End

// Footer Start
const footerYear = document.querySelector('.year');
const today = new Date();
footerYear.innerText = today.getFullYear();
// Footer End