// Get references to elements
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const projects = document.querySelectorAll('.project');
let currentIndex = 0;

// Show the current project and hide others
function showProject(index) {
  projects.forEach((project, i) => {
    if (i === index) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Event listeners for previous and next buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(currentIndex);
});

// Show the initial project
showProject(currentIndex);
