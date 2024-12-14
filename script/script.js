document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll("[data-tab-content]");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const selectedTab = button.getAttribute("data-tab");

        tabContents.forEach(content => {
          if (content.getAttribute("data-tab-content") === selectedTab) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });
  });
  document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });

  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  

  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  