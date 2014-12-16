function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).height();
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}
jQuery(document).ready(function() {
  equalHeight(jQuery(".formee-equal"));
  equalHeight(jQuery(".tabs-content"));
  equalHeight(jQuery(".latest-content .span6"));
  equalHeight(jQuery(".equal-height"));
  equalHeight(jQuery(".page-focus-box-3 ul ul"));
  equalHeight(jQuery(".page-icon-block ul li"));
});
jQuery(window).resize(function() {
  equalHeight(jQuery(".formee-equal"));
  equalHeight(jQuery(".page-icon-block"));
  equalHeight(jQuery(".latest-content .span6 "));
  equalHeight(jQuery(".equal-height"));
});