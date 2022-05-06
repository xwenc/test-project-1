document.addEventListener("DOMContentLoaded", function (event) {
  //Do work
  console.log("DOM fully loaded and parsed");
  //Tabs
  const tabs = document.querySelector(".js-tabs");
  const tabButton = document.querySelectorAll(".js-tab-button");
  const contents = document.querySelectorAll(".js-tab-content");

  tabs.onclick = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  };
});
