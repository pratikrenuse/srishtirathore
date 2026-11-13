(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll(".review .more").forEach(function (b) {
    b.addEventListener("click", function () {
      var card = b.closest(".review");
      var open = card.classList.toggle("clamp") === false;
      b.textContent = open ? b.dataset.less : b.dataset.more;
    });
  });
  var more = document.getElementById("rv-more");
  var list = document.getElementById("reviews-list");
  if (more && list) {
    if (!list.querySelector(".extra")) more.hidden = true;
    more.addEventListener("click", function () {
      list.classList.add("show-all");
      more.hidden = true;
    });
  }
  try {
    var l = document.documentElement.lang.indexOf("hi") === 0 ? "hi" : "en";
    localStorage.setItem("lang", l);
  } catch (e) {}
})();
