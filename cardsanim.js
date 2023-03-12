const productsContainer = document.querySelector('#products');
let isDragging = false;
let startPosition;
let startScrollLeft;

productsContainer.addEventListener('mousedown', (event) => {
  isDragging = true;
  startPosition = event.pageX;
  startScrollLeft = productsContainer.scrollLeft;
});

productsContainer.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  const distance = event.pageX - startPosition;
  productsContainer.scrollLeft = startScrollLeft - distance;
});

productsContainer.addEventListener('mouseup', () => {
  isDragging = false;
});
