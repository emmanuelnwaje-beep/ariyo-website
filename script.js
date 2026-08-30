// =========================================
// ARIYO HERBAL EXTRACTS
// JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. SCROLL REVEAL ANIMATION
    // =====================================

    const elements = document.querySelectorAll(
        ".card, .product-card, .review-card, .contact-box, .map-card, .about-grid"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // =====================================
    // 2. BACK TO TOP BUTTON
    // =====================================

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.className = "back-to-top";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // =====================================
    // 3. ACTIVE NAVIGATION
    // =====================================

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        "nav a"
    );


    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    // =====================================
    // 4. WHATSAPP PRODUCT ENQUIRY
    // =====================================

    const productButtons =
        document.querySelectorAll(
            ".product-card .small-btn"
        );


    productButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const productCard =
                button.closest(".product-card");

            const productName =
                productCard.querySelector("h3").textContent.trim();

            const message =
                "Hello Ariyo, I am interested in " +
                productName +
                ". Please provide more information.";

            const whatsappURL =
                "https://wa.me/2348132455540?text=" +
                encodeURIComponent(message);

            event.preventDefault();

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    });


    // =====================================
    // 5. WHATSAPP SERVICE ENQUIRY
    // =====================================

    const serviceButtons =
        document.querySelectorAll(
            ".card .small-btn"
        );


    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const serviceCard =
                button.closest(".card");

            const serviceName =
                serviceCard.querySelector("h3").textContent.trim();

            const message =
                "Hello Ariyo, I would like to enquire about " +
                serviceName +
                ". Please provide more information.";

            const whatsappURL =
                "https://wa.me/2348132455540?text=" +
                encodeURIComponent(message);

            event.preventDefault();

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    });


    // =====================================
    // 6. IMAGE FALLBACK
    // =====================================

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

            const parent =
                image.parentElement;

            if (parent) {
                parent.classList.add(
                    "image-error"
                );
            }

        });

    });


    // =====================================
    // 7. CURRENT YEAR
    // =====================================

    const footerText =
        document.querySelector("footer > p");

    if (footerText) {

        footerText.innerHTML =
            "© " +
            new Date().getFullYear() +
            " Ariyo Herbal Extracts / Ariyo Spiritual Empire. " +
            "All rights reserved.";

    }


    // =====================================
    // 8. PAGE LOADED
    // =====================================

    document.body.classList.add(
        "page-loaded"
    );

});