$(document).ready(function() {
  // store filter for each group
  $container = $('.resource-page-cs-list');
  $demo = $('.resources-filter-container');

  var filters = {};
  $demo.on('click', '.filter', function(ev) {
    // ev.preventDefault();

    var $this = $(this);
    // get group key
    var $listGroup = $this.parents('.filter-group');
    var filterGroup = $listGroup.attr('data-filter-group');

    // add/remove active classes
    $listGroup.find('.filter').removeClass('active');
    $this.addClass('active');

    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    console.log('filterValue: ', filterValue);
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });

});

