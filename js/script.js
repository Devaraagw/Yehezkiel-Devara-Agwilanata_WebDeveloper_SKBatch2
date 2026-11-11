// Filter lowongan berdasarkan kategori.
const filterButtons = document.querySelectorAll(".filter-btn");
const jobCards = document.querySelectorAll(".job-column");
const jobCount = document.getElementById("jobCount");
const emptyState = document.getElementById("emptyState");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    jobCards.forEach((card) => {
      const shouldShow = selectedCategory === "All" ||
        card.dataset.category === selectedCategory;
      card.classList.toggle("d-none", !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    jobCount.textContent = visibleCount;
    emptyState.classList.toggle("d-none", visibleCount !== 0);
  });
});

// Tahun footer diperbarui otomatis.
document.getElementById("year").textContent = new Date().getFullYear();
