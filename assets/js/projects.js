/* ============================================
   PROJECTS.JS — Filter functionality
   ============================================ */

'use strict';

(function () {
  const filterBtns = document.querySelectorAll('.filter__btn');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('filter__btn--active'));
      btn.classList.add('filter__btn--active');

      // Filter cards
      cards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();
