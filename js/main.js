document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let diabetesFirstPage = document.querySelectorAll("#diabetesWorks");
    let obesityFirstPage = document.querySelectorAll("#obesityWorks");
    let podcasts = document.querySelectorAll("#podcasts");
    let videos = document.querySelectorAll("#videos");
    let vials = document.querySelectorAll("#vials");
    let efficacyObesity = document.querySelectorAll("#efficacyObesity");
    let efficacyDiabetes = document.querySelectorAll("#efficacyDiabetes");
    let indication = document.querySelector("#indication")
    let kwipens = document.querySelectorAll('#kwipens')
    let prescribing = document.querySelector('#prescribing')
    let home = document.querySelector('.home')


    // Get button element
    const scrollBtn = document.querySelector(".scroll-top-btn");

    // Show button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Show after 300px scroll
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    // Scroll to top when button is clicked
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



    let popup = document.querySelector('.popupBackground')
    let yes = document.querySelector('.yes')
    let no = document.querySelector('.no')


    yes?.addEventListener('click', function () {
        localStorage.setItem('response', 'yes')
        popup?.classList.add('d-none')
        home?.classList.remove('d-none')

    })

    no?.addEventListener('click', function () {
        localStorage.setItem('response', 'no')
        popup?.classList.add('d-none')
        home?.classList.remove('d-none')
    })


    if (localStorage.getItem('response')) {
        popup?.classList.add('d-none')
        home?.classList.remove('d-none')
    }

    // Function to activate the correct nav link
    function activateNav(linkText) {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks.forEach(link => {
            if (link.innerText.trim().toLowerCase() === linkText.toLowerCase()) {
                link.classList.add("active");
            }
        });
    }

    // Set active class based on stored value
    let activeNav = localStorage.getItem("activeNav");
    if (activeNav) {
        activateNav(activeNav);
    }

    // Handle nav link activation on click
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            let navText = this.innerText.trim();
            activateNav(navText);
            localStorage.setItem("activeNav", navText);
        });
    });

    // Function to set active nav and navigate
    function setActiveAndNavigate(section, url) {
        localStorage.setItem("activeNav", section);
        window.location.href = url;
    }

    // Handle "Vials" click events
    vials.forEach((element, index) => {
        element.addEventListener("click", function () {
            let section = index === 0 ? "Obesity" : "Diabetes";
            setActiveAndNavigate(section, "vials.html");
        });
    });
    kwipens.forEach((element, index) => {
        element.addEventListener("click", function () {
            let section = index === 0 ? "Obesity" : "Diabetes";
            setActiveAndNavigate(section, "kwipens.html");
        });
    });

    // Handle "Efficacy" click events
    efficacyDiabetes.forEach(link => {
        link.addEventListener("click", function () {
            setActiveAndNavigate("Diabetes", "efficacyDiabetes.html");
        });

    });

    efficacyObesity.forEach(link => {
        link.addEventListener("click", function () {
            setActiveAndNavigate("Obesity", "efficacyObesity.html");
        });

    });
    indication.addEventListener("click", function () {
        setActiveAndNavigate("Home", "home.html");
    })

    prescribing.addEventListener("click", function () {
        setActiveAndNavigate("Prescribing Info", "prescribingInfo.html");
    })

    // Handle direct clicks to Diabetes and Obesity pages
    diabetesFirstPage.forEach(element => {
        element.addEventListener("click", function () {
            setActiveAndNavigate("Diabetes", "diabetes.html");
        });
    });

    obesityFirstPage.forEach(element => {
        element.addEventListener("click", function () {
            setActiveAndNavigate("Obesity", "obesity.html");
        });
    });
    podcasts.forEach(element => {
        element.addEventListener("click", function () {
            setActiveAndNavigate("Education Hub", "podcasts.html");
        });
    });

    videos.forEach(element => {
        element.addEventListener("click", function () {
            setActiveAndNavigate("Education Hub", "videos.html");
        });
    });
});

