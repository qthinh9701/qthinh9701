// ---PROJECT JS---

$(document).ready(function () {
  // ---PAGING---
  let paging = $(".project-paging span");
  paging.on("click", function () {
    $(".project-paging span").removeClass("active");
    $(this).addClass("active");
  });

  let selectProject = $(".project__select-current");
  let selectProjectTextCurrent = $(".project__select-current span");
  let selectOpt = $(".project__select-dropdown");
  let selectItem = $(".project__select-dropdown a");

  selectProject.on("click", function () {
    selectOpt.slideToggle();
  });
});
