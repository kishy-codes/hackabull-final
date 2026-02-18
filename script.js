/* HACKABULL 2026 */

// Hero parallax fade
(function () {
    const hero = document.querySelector('.hero');
    let ticking = false;

    function update() {
        const t = Math.min(window.scrollY / (window.innerHeight * 0.75), 1);
        hero.style.opacity = 1 - t * 0.85;
        hero.style.transform = 'scale(' + (1 + t * 0.04) + ')';
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
})();

// Scroll reveal
(function () {
    var els = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
})();

// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.parentElement;
            var open = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(function (i) {
                i.classList.remove('open');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            if (!open) {
                item.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Active nav
    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.nav-pill a:not(.apply-btn)');
    function onScroll() {
        var cur = '';
        sections.forEach(function (s) { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
        links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
