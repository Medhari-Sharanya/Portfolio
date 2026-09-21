const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const projectData = {
  bone: {
    type: "DEEP LEARNING",
    title: "Bone Tumor Detection Using Deep Learning",
    description: "Developed a system using machine learning and Python to classify X-ray images as tumor or non-tumor. The project includes image preprocessing, feature extraction with OpenCV and NumPy, TensorFlow/Keras model training, and a Streamlit interface for prediction.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Streamlit"]
  },
  stock: {
    type: "MACHINE LEARNING",
    title: "Machine Learning-Based Stock Price Prediction",
    description: "Built a stock price prediction system using historical market data. The project includes data collection, preprocessing, exploratory data analysis, machine-learning forecasting, and an interactive Streamlit dashboard for visualization.",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Streamlit"]
  },
  phish: {
    type: "EXPLAINABLE AI",
    title: "XPhishGuard",
    description: "An explainable artificial intelligence framework for real-time phishing website detection. The project is designed around website URL analysis, machine-learning detection, explainability, and a practical dashboard.",
    tags: ["AI/ML", "Explainable AI", "Python", "Web Development"]
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const data = projectData[button.dataset.project];
    modalType.textContent = data.type;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("modalClose").addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
