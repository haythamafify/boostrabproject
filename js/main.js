let currentState = localStorage.getItem("issamll");
let sidebar = document.getElementById("sidebar");

if (currentState === "yes") {
  sidebar.classList.add("small-sidebar");
} else {
  sidebar.classList.remove("small-sidebar");
}
function toggleSidebar() {
  currentState = localStorage.getItem("issamll");

  if (currentState === "yes") {
    localStorage.setItem("issamll", "no");
    sidebar.classList.remove("small-sidebar");
  } else {
    localStorage.setItem("issamll", "yes");
    sidebar.classList.add("small-sidebar");
  }
  // sidebar.classList.toggle("small-sidebar");
}
