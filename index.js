// ================= FLOATING NAV
const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () => {
  floatingNavs.forEach(nav => {
    nav.classList.remove('active')
  })
}

floatingNavs.forEach(nav => {
  nav.addEventListener('click', () => {
    removeActiveClass();
    nav.classList.add('active')
  })
})










// ======================Resume 
const resumeRight = document.querySelector('.resume__right')
const experienceContent = `
            <h4>Experience</h4>
                <p>
                    Skilled in web development and SEO, optimizing websites for speed, ranking, and engagement.
                </p>
                <ul>
                    <li>
                        <h6>2016 - 2020</h6>
                        <h5>IT Support</h5>
                        <p>NUCO Schools</p>
                    </li>
                    <li>
                        <h6>2020 - 2023</h6>
                        <h5>Intern</h5>
                        <p>NiChips Technologies</p>
                    </li>
                    <li>
                        <h6>2023 - 2024</h6>
                        <h5>Fullstack Developer</h5>
                        <p>Gtera Hosting</p>
                    </li>
                    <li>
                        <h6>2024 - 2025</h6>
                        <h5>Wordpress Developer</h5>
                        <p>Alphanet Nigeria</p>
                    </li>
                </ul>
`

const experienceBtn = document.querySelector('.experience__btn')
experienceBtn.addEventListener('click', () => {
    resumeRight.innerHTML = experienceContent;
    resumeRight.className = 'resume__right'
    experienceBtn.classList.add("primary")
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
})
// set experience content as the default content for resume right when page loads
resumeRight.innerHTML = experienceContent;



// education
const educationBtn = document.querySelector('.education__btn');
const educationContent = `<h4>Education</h4>
                <p>Certified in SEO, web development, and digital tools for optimized performance.</p>
                <ul>
                    <li>
                        <h5>University of Uyo</h5>
                        <p>
                            Graduated with a B.Eng in Mechanical Engineering. Achieved a strong CGPA of 4.03/5.0, demonstrating consistent academic excellence and analytical skills.
                        </p>
                    </li>
                    <li>
                        <h5>LinkedIn Learning</h5>
                        <p>
                            Completed certifications in Project Management tools like Trello, Notion, and Adobe Acrobat Pro. Gained hands-on proficiency and workflow optimization experience.
                        </p>
                    </li>
                    <li>
                        <h5>Google Digital Skills</h5>
                        <p>
                            Trained in SEO, digital marketing, and website optimization. Developed in-depth understanding of user behavior, branding, and growth-driven design principles.
                        </p>
                    </li>
                    <li>
                        <h5>IBBIL ICT Academy</h5>
                        <p>
                            Studied web development, Microsoft Office Suite, DBMS, and CorelDraw. Built a strong foundation in tech tools, programming logic, and visual communication.
                        </p>
                    </li>
                </ul>`
                
  educationBtn.addEventListener('click', () => {
    resumeRight.innerHTML = educationContent;
    resumeRight.className = 'resume__right education'
    educationBtn.classList.add("primary")
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    
  })
  
  
  
  
  // skills
  const skillsContent = `<h4>Skills</h4>
                <p>Proficient in HTML, CSS, PHP, MySQL, and WordPress, with expertise in Figma, Webflow, and Canva for seamless web design.</p>
                <ul>
                    <li><img src="./assets/html.png" alt="HTML logo"></li>
                    <li><img src="./assets/JavaScript.png" alt="JS logo"></li>
                    <li><img src="./assets/PHP.png" alt="PHP logo"></li>
                    <li><img src="./assets/css.png" alt="CSS logo"></li>
                    <li><img src="./assets/tailwind.png" alt="Tailwind logo"></li>
                    <li><img src="./assets/Wordpress.png" alt="Wordpress logo"></li>
                    <li><img src="./assets/webflow.png" alt="Webflow logo"></li>
                    <li><img src="./assets/figma.png" alt="Figma logo"></li>
                    <li><img src="./assets/canva.jpg" alt="Canva logo"></li>
                </ul>`
                
  const skillsBtn = document.querySelector('.skills__btn')
  skillsBtn.addEventListener('click', () => {
    resumeRight.innerHTML = skillsContent;
    resumeRight.className = 'resume__right skills'
    skillsBtn.classList.add("primary")
    // remove classes from other buttons
    aboutBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
  })
  
  // about me 
  const aboutContent = `<h4>About me</h4>
                <p>Passionate web developer & SEO expert, crafting optimized, engaging, and high-performing websites with precision.</p>
                <ul>
                    <li>
                        <h5>Name:</h5>
                        <p>Joshua Etok</p>
                    </li>
                    <li>
                        <h5>Experience:</h5>
                        <p>4+ years</p>
                    </li>
                    <li>
                        <h5>Email:</h5>
                        <p><a href="mailto:etokjoshua@gmail.com" style="color: green;">etokjoshua@gmail.com</a></p>
                    </li>
                    <li>
                        <h5>Collaboration:</h5>
                        <p>Available</p>
                    </li>
                    <li>
                        <h5>Language:</h5>
                        <p>English</p>
                    </li>
                    <li>
                        <h5>Phone:</h5>
                        <p>+2348084017920</p>
                    </li>
                    <li>
                        <h5>Nationality:</h5>
                        <p>Nigeria</p>
                    </li>
                    <li>
                        <h5>LinkedIn:</h5>
                        <p><a href="www.linkedin.com/in/joshua-etok-082957157" style="color: green;">@Joshuaetok</a></p>
                    </li>
                </ul>`
                
  const aboutBtn = document.querySelector('.about__btn')
  aboutBtn.addEventListener('click', () => {
    resumeRight.innerHTML = aboutContent;
    resumeRight.className = "resume__right about"
    aboutBtn.classList.add("primary")
    // remove classes from other buttons
    skillsBtn.classList.remove('primary')
    experienceBtn.classList.remove('primary')
    educationBtn.classList.remove('primary')
  })
  
  
  // ================= MIXITUP (projects section)
  const containerEl = document.querySelector('.projects__container')
  let mixer = mixitup(containerEl, {
    animation: {
      enable: false
    }
  })
  
  mixer.filter('*')
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // ================= SWIPER
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    600: {
      slidesPerView: 2
    }, 1024: {
      slidesPerView: 3
    }
  }

});





















// ================= FAQS
const faqs = document.querySelectorAll('.faqs__item');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    const p = faq.querySelector('.faqs__item-bottom p');
    const icon = faq.querySelector('.faq__icon')
    if(p.classList.contains('show')) {
      p.classList.remove('show')
      icon.innerHTML = '<i class="uil uil-angle-down"></i>'
    } else {
      p.classList.add('show')
      icon.innerHTML = '<i class="uil uil-angle-up"></i>'
    }
  })
})












// ================= THEME
const themeToggler = document.querySelector('.nav__theme-btn')
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')
  if(document.body.classList == '') {
    themeToggler.innerHTML = '<i class="uil uil-moon"></i>'
    window.localStorage.setItem('portfolio-theme', '')
  } else {
    themeToggler.innerHTML = '<i class="uil uil-sun"></i>'
    window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')
  }
})


//use theme from local storage on page loads 
const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;