// هذا الكود سيضيف تأثيرات عند التمرير على الصفحات
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// إذا كنت تريد إضافة تأثيرات خاصة أو أشياء أخرى مثل تغيير ألوان الروابط عند النقر
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// إضافة تأثير الرسالة المتحركة
window.addEventListener('load', function() {
    const message = document.querySelector('.animated-message');
    message.classList.add('visible');
});
