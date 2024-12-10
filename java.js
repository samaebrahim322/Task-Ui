// Toggle Sidebar Expansion
document.querySelector('.sidebar').addEventListener('mouseover', function () {
    this.classList.add('expanded');
  });
  
  document.querySelector('.sidebar').addEventListener('mouseout', function () {
    this.classList.remove('expanded');
  });

  