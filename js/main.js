$(function() {
  $("[data-ref]").each(function() {
    $($(this).attr("data-ref")).addClass("active");
  });
})
