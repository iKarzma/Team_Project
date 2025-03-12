// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Add hover effects
document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)';
    this.style.background = 'linear-gradient(145deg, #111827, #1f2937)';
  });

  member.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.background = '#111827';
  });
});

// Add color change animation for member icons
document.querySelectorAll('.member-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function () {
    this.style.background = 'linear-gradient(135deg, #7c3aed, #06b6d4)';
  });

  icon.addEventListener('mouseleave', function () {
    this.style.background = 'linear-gradient(135deg, #4f46e5, #7c3aed)';
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// دالة الانتقال السلس
function scrollToTeam() {
  const teamSection = document.getElementById('team-members');
  teamSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// يمكن أيضاً استخدام الرابط المباشر
document.querySelectorAll('a[href="#team-members"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
