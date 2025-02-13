function openTab(event, tabId) {
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));

    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  }