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

// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the design div
    var designDiv = document.querySelector('.design');
  
    // Get the paragraph element within the design div
    var paragraph = designDiv.querySelector('p');
  
    // Save the default text content
    var defaultText = paragraph.textContent;
  
    // Add mouseover and mouseout event listeners to the design div
    designDiv.addEventListener('mouseover', function () {
      // Add the 'active' class on hover
      this.classList.add('active');
  
      // Change the text content to the custom message
      paragraph.textContent = "Web design is the combination of aesthetics and presentation for the user.";
    });
  
    designDiv.addEventListener('mouseout', function () {
      // Remove the 'active' class on mouseout
      this.classList.remove('active');
  
      // Restore the default text content
      paragraph.textContent = defaultText;
    });
  });
  
  