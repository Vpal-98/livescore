document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-tabs .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // पहले सभी बटन से 'active' class हटाओ
            navLinks.forEach(btn => btn.classList.remove("active"));
            
            // जिस पर क्लिक किया है, उसे 'active' बनाओ
            this.classList.add("active");
        });
    });
});
