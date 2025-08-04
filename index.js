window.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = track.children;
    const slideW = slides[0].getBoundingClientRect().width + 10;
    const visible = Math.floor(document.querySelector('.trending-slider').offsetWidth / slideW);
    let position = 0;

    function updateButtons() {
        prevBtn.disabled = position === 0;
        nextBtn.disabled = position >= slides.length - visible;
    }

    prevBtn.addEventListener('click', () => {
        if (position > 0) {
            position--;
            track.style.transform = `translateX(-${position * slideW}px)`;
            updateButtons();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (position < slides.length - visible) {
            position++;
            track.style.transform = `translateX(-${position * slideW}px)`;
            updateButtons();
        }
    });

    // init
    updateButtons();

    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                return;
            } else {
                document.querySelectorAll('.faq-item').forEach(i => {
                    i.classList.remove('active');
                });
                item.classList.toggle('active');
            }
        });
    });
});