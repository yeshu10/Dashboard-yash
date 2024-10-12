// Your vanilla JavaScript to make the boxes expand/collapse
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function() {
        this.classList.toggle('expanded');
        const content = this.querySelector('.box-content');
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});
