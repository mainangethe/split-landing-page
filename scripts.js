const containerDiv = document.querySelector('.container');
const leftSection = document.querySelector('.left');
const rightSection = document.querySelector('.right');

leftSection.addEventListener('mousecenter', () => {
  containerDiv.classList.add('hover-left');
});

leftSection.addEventListener('mouseleave', () => {
  containerDiv.classList.remove('hover-left');
});

rightSection.addEventListener('mousecenter', () => {
  containerDiv.classList.add('hover-right');
});

rightSection.addEventListener('mouseleave', () => {
  containerDiv.classList.remove('hover-right');
});
