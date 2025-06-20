document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.name) {
        const nameEl = document.getElementById("userNameDisplay");
        if (nameEl) nameEl.textContent = user.name;
      }
    });

  fetch("/components/sidebar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    });

  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});

function logout() {
  localStorage.removeItem("user");
  window.location.href = "/login.html";
}
