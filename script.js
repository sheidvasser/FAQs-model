let faqs = document.querySelectorAll('.faq');
let section = document.querySelector('section');
let footer = document.querySelector('footer');
let title = document.querySelector('.title');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
});
