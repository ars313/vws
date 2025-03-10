// Main JavaScript for CBTGaruda

document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar on mobile
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      document.querySelector(".sidebar").classList.toggle("show");
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggleBtn = document.getElementById("sidebarToggle");

    if (sidebar && sidebarToggleBtn) {
      if (
        !sidebar.contains(event.target) &&
        !sidebarToggleBtn.contains(event.target) &&
        sidebar.classList.contains("show")
      ) {
        sidebar.classList.remove("show");
      }
    }
  });

  // Initialize Bootstrap tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize Bootstrap popovers
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // PDF Viewer Controls (if present)
  const pdfElements = {
    prevBtn: document.querySelector(".pdf-controls .prev"),
    nextBtn: document.querySelector(".pdf-controls .next"),
    zoomOutBtn: document.querySelector(".pdf-controls .zoom-out"),
    zoomInBtn: document.querySelector(".pdf-controls .zoom-in"),
    fitBtn: document.querySelector(".pdf-controls .fit"),
    pageNumDisplay: document.querySelector(".pdf-controls .page-num"),
    totalPagesDisplay: document.querySelector(".pdf-controls .total-pages"),
  };

  // Initialize PDF controls if present
  if (pdfElements.prevBtn && pdfElements.nextBtn) {
    let currentPage = 1;
    let totalPages = parseInt(
      pdfElements.totalPagesDisplay?.textContent || "1",
    );
    let currentZoom = 100;

    // Update page number display
    const updatePageDisplay = () => {
      if (pdfElements.pageNumDisplay) {
        pdfElements.pageNumDisplay.textContent = currentPage;
      }
    };

    // Previous page button
    if (pdfElements.prevBtn) {
      pdfElements.prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          updatePageDisplay();
          // Implementation for actual PDF navigation would go here
        }
      });
    }

    // Next page button
    if (pdfElements.nextBtn) {
      pdfElements.nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          updatePageDisplay();
          // Implementation for actual PDF navigation would go here
        }
      });
    }

    // Zoom controls
    if (pdfElements.zoomInBtn) {
      pdfElements.zoomInBtn.addEventListener("click", () => {
        currentZoom += 10;
        // Implementation for actual PDF zoom would go here
      });
    }

    if (pdfElements.zoomOutBtn) {
      pdfElements.zoomOutBtn.addEventListener("click", () => {
        if (currentZoom > 50) {
          currentZoom -= 10;
          // Implementation for actual PDF zoom would go here
        }
      });
    }

    if (pdfElements.fitBtn) {
      pdfElements.fitBtn.addEventListener("click", () => {
        currentZoom = 100;
        // Implementation for actual PDF fit would go here
      });
    }
  }

  // Auto-hide alerts after 5 seconds
  const alerts = document.querySelectorAll(".alert:not(.alert-permanent)");
  alerts.forEach((alert) => {
    setTimeout(() => {
      if (alert) {
        const bsAlert = new bootstrap.Alert(alert);
        bsAlert.close();
      }
    }, 5000);
  });

  // Add active class to submenu parents if a child is active
  const activeSubMenuItems = document.querySelectorAll(
    ".sub-menu .nav-link.active",
  );
  activeSubMenuItems.forEach((item) => {
    const parentCollapse = item.closest(".collapse");
    if (parentCollapse) {
      parentCollapse.classList.add("show");
      const parentNavLink = document.querySelector(
        `[data-bs-target="#${parentCollapse.id}"]`,
      );
      if (parentNavLink) {
        parentNavLink.classList.add("active");
        parentNavLink.setAttribute("aria-expanded", "true");
      }
    }
  });
});

// Login page password toggle
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  if (togglePassword && password) {
    togglePassword.addEventListener("click", function () {
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);

      // Toggle eye icon
      this.querySelector("i").classList.toggle("fa-eye");
      this.querySelector("i").classList.toggle("fa-eye-slash");
    });
  }
});

// PDF viewer specific controls (if on a page with PDF viewer)
function setupPDFViewer() {
  // This function would initialize PDF.js or other PDF viewing library
  // It's kept separate in case it's only needed on specific pages
  console.log("PDF viewer initialized");
}
