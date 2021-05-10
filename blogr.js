$(document).ready(function () {
  $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function () {
    $(this).find("img").toggleClass("rotate-img");
  });
});
