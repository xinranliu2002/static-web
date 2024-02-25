document.addEventListener('DOMContentLoaded', () => {
    const companies = document.querySelectorAll('.company');
    const details = document.querySelectorAll('.company-details');

    companies.forEach(company => {
        company.addEventListener('click', function() {
            // Remove active class from all companies and details
            companies.forEach(c => c.classList.remove('active'));
            details.forEach(d => d.classList.remove('active'));

            // Add active class to clicked company and corresponding details
            this.classList.add('active');
            const detailToShow = document.getElementById(this.getAttribute('data-company'));
            if (detailToShow) {
                detailToShow.classList.add('active');
            }
        });
    });
    if (companies.length > 0) {
        companies[0].click();
    }
}); 


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector('header').classList.add('header-hidden');
    } else {
        // Scrolling up
        document.querySelector('header').classList.remove('header-hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
}, false);