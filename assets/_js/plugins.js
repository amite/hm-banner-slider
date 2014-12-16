(function($){

  // usage: log('inside coolFunc', this, arguments);
  // paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
  window.log = function(){
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
    }
  };

  // make it safe to use console.log always
  (function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
  {console.log();return window.console;}catch(err){return window.console={};}})());


    $( "#slider-range-min" ).slider({
      range: "min",
      value: 50,
      min: 50,
      max: 5000,
      step: 50,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + "GB" );
      }
    });
    $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) + "GB" );


    var icons = {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        };

        $( "#accordion" ).accordion({
      header: "h3",
            heightStyle: "content",
      icons: icons,
    collapsible: true,
    active: false
        });

    //DatePicker
    $('#tour-date').datepick({defaultDate: +7, dateFormat: 'dd-mm-yyyy', showTrigger: '#calImg'});


    //Spokesperson PopUp
    $('.call-modal-sunil').click(function() { $('#modal-sunil').fadeIn("slow"); });
    $('.call-modal-nitin').click(function() { $('#modal-nitin').fadeIn("slow");  });
    $('.call-modal-sharad').click(function() { $('#modal-sharad').fadeIn("slow"); });
    $('.modal-close').click( function() {$('.semantic-content').fadeOut("slow");});

    //Twitter Feeds
    twitterFetcher.fetch('352253753103106051', 'tweets', 1, true, false, false);

    $('ul.rb-images').roundabout();

    $( ".modal #ram" ).spinner({
    min: 1,
    max: 16,
    step: 1
    });
    $( ".modal #bandwidth" ).spinner({
    min: 50,
    max: 5000,
    step: 50
    });


  $(document).ready(function() {


    // IsoTope
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


    //FlexSlider
    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false,
      pauseOnHover: false,
      animationSpeed: 600,
        animation: "slide"
      });

      // Fit Vids
      $(".home .testimonial-video").fitVids();

       //Page Scroll
       //$(".scrollable-content").animate({height:320},function(){
      //  $(this).mCustomScrollbar({theme:"dark"});
      //});



    /* Sharrre
    ================================================== */
    $('#page-share').sharrre({
    share: {
    linkedin: true,
    twitter: true
    },
    template: '<div class="box">'
           +'<ul>'
           +'<li>SHARE THIS PAGE ON:</li>'
           +'<li><a href="#" class="linkedin"></a></li>'
           +'<li><a href="#" class="twitter"></a></li>'
           +'</ul>'
           +'</div>',
    enableHover: false,
    enableTracking: false,
    render: function(api, options){
    $('.twitter').on('click', function() {
    api.openPopup('twitter');
    });
    $('.linkedin').on('click', function() {
    api.openPopup('linkedin');
    });
    }
    });

    /* Tabs Activiation
    ================================================== */

    var tabs = $('ul.tabs');
    tabs.each(function(i) {

      //Get all tabs
      var tab = $(this).find('> li > a');
      tab.click(function(e) {
        //Get Location of tab's content
        var contentLocation = $(this).attr('href');
        //Let go if not a hashed one
        if(contentLocation.charAt(0)=="#") {
          e.preventDefault();
          //Make Tab Active
          tab.removeClass('active');
          $(this).addClass('active');
          //Show Tab Content & add active class
          $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
        }
      });
    });


    // Vertical Sliding Tabs demo
    var vtabs= $('div#st_vertical');
    var htabs= $('div#st_horizontal');

    if(vtabs.length > 0) {
     vtabs.slideTabs({
      // Options
      contentAnim: 'slideH',
      contentAnimTime: 600,
      contentEasing: 'easeInOutExpo',
      orientation: 'vertical',
      autoHeight:true,
      tabsAnimTime: 300
    });
    }

    if(htabs.length > 0) {
      // Horizontal Sliding Tabs demo
      htabs.slideTabs({
      // Options
      contentAnim: 'slideH',
      contentAnimTime: 600,
      contentEasing: 'easeInOutExpo',
      autoHeight:true,
      tabsAnimTime: 300
      });
    }


    // Vertical tabs Full Page
    $('#st_horizontal_full').slideTabs({
      // Your options here
      contentAnim: 'slideH',
      contentAnimTime: 600,
      contentEasing: 'easeInOutExpo',
      orientation: 'horizontal',
      tabsAnimTime: 300
    });

    /* Plans and Pricing Data Table Values
    ================================================== */
    var idx, dedicated_ctas, managed_ctas, preprovisioned_ctas, colocation_ctas, plan_name, colo_plan_name, cnam_ctas, vapt_ctas, webcontrol_ctas, appsecure_ctas, mddos_ctas, ims_ctas, sharedsan_ctas, simplistor_ctas, simplimail_ctas, processor, ram, dt, hd, extra, btnVal, colo_rack_units, colo_bandwidth, colo_ip, colo_reboot, colo_setup;
    var prep_idx, prep_plan_name, prep_processor, prep_ram, prep_hd, prep_dt;
    var ims_idx, ims_plan_name, ims_processor, ims_ram, ims_hd, ims_dt;
    var cnam_idx, cnam_plan_name, vapt_idx, webcontrol_idx, vapt_plan_name, webcontrol_plan_name, appsecure_idx, appsecure_plan_name, mddos_idx, mddos_plan_name, sharedsan_storage_size, sharedsan_idx, simplistor_idx, simplistor_plan_name, simplimail_idx, simplimail_plan_name;


    dedicated_ctas = $('.dedicated-plans .signup-button');
    managed_ctas = $('.managed-plans .signup-button');
    preprovisioned_ctas = $('.pre-provisioned-plans .signup-button');
    colocation_ctas = $('.colocation-plans .signup-button');
    cnam_ctas = $('.cnam-plans .signup-button');
    vapt_ctas = $('.vapt-plans .signup-button');
    webcontrol_ctas = $('.webcontrol-plans .signup-button');
    appsecure_ctas = $('.appsecure-plans .signup-button');
    mddos_ctas = $('.mddos-plans .signup-button');
    ims_ctas = $('.ims-plans .signup-button');
    sharedsan_ctas = $('#storage-plan .signup-button');
    simplistor_ctas = $('.simplistor-plans .signup-button');
    simplimail_ctas = $('.simplimail-plans .signup-button');


    //Dedicated Hosting
    dedicated_ctas.on('click', function(){
      idx = ($('a.signup-button').index(this));
      plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (idx + 2) + ") h2").eq(0).text();
      processor = $(".pricing-table-content tr:nth-child(3) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      ram = $(".pricing-table-content tr:nth-child(5) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      hd = $(".pricing-table-content tr:nth-child(6) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      dt = $(".pricing-table-content tr:nth-child(11) td:nth-child(" + (idx + 2) + ")").eq(0).text();

      $('#dhosting').modal('show');
    });

    $('#dhosting').on('shown', function () {
      $('#plan-name').text(plan_name);
      $('#processor').val(processor);
      $('#ram').val(ram);
      $('#storage').val(hd);
      $('#bandwidth').val(dt);
    })


    //Pre-Provisioned Servers
    preprovisioned_ctas.on('click', function(){
      prep_idx = ($('a.signup-button').index(this));
      prep_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (prep_idx + 2) + ") h2").eq(0).text();
      prep_processor = $(".pricing-table-content tr:nth-child(3) td:nth-child(" + (prep_idx + 2) + ")").eq(0).text();
      prep_ram = $(".pricing-table-content tr:nth-child(4) td:nth-child(" + (prep_idx + 2) + ")").eq(0).text();
      prep_hd = $(".pricing-table-content tr:nth-child(5) td:nth-child(" + (prep_idx + 2) + ")").eq(0).text();
      prep_dt = $(".pricing-table-content tr:nth-child(6) td:nth-child(" + (prep_idx + 2) + ")").eq(0).text();

      $('#pre-provisioned-form').modal('show');
    });

    $('#pre-provisioned-form').on('shown', function () {
      $('#plan-name').text(prep_plan_name);
      $('#preprovisioned_processor').val(prep_processor);
      $('#ram').val(prep_ram);
      $('#preprovisioned_storage').val(prep_hd);
      $('#bandwidth').val(prep_dt);
    })

    //IMS
    ims_ctas.on('click', function(){
      ims_idx = ($('a.signup-button').index(this));
      ims_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (ims_idx + 2) + ") h2").eq(0).text();

      $('#ims-form').modal('show');
    });

    $('#ims-form').on('shown', function () {
      $('#plan-name').text(ims_plan_name);
    })


    //Colocation Plans
    colocation_ctas.on('click', function(e){
      e.preventDefault();

      idx = ($('a.signup-button').index(this));
      colo_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (idx + 2) + ") h2").eq(0).text();
      colo_rack_units = $(".pricing-table-content tr:nth-child(3) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      colo_bandwidth = $(".pricing-table-content tr:nth-child(4) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      colo_ip = $(".pricing-table-content tr:nth-child(5) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      colo_reboot = $(".pricing-table-content tr:nth-child(6) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      colo_setup = $(".pricing-table-content tr:nth-child(7) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      colo_redundent = $(".pricing-table-content tr:nth-child(8) td:nth-child(" + (idx + 2) + ")").eq(0).text();
      colo_power = $(".pricing-table-content tr:nth-child(9) td:nth-child(" + (idx + 2) + ")").eq(0).text();

      //$('#success-message').hide();
      $('#co-location-form').modal('show');
    });

    $('#co-location-form').on('shown', function () {
      $('#plan-name').text(colo_plan_name);
      $('#rackunits').text(colo_rack_units);
      $('#colo-bandwidth').text(colo_bandwidth);
      $('#ip').text(colo_ip);
      $('#reboot').text(colo_reboot);
      $('#setup').text(colo_setup);
      $('#redundent').text(colo_redundent);
      $('#power').text(colo_power);
    })


    //CNAM Plans
    cnam_ctas.on('click', function(e){
      e.preventDefault();
      cnam_idx = ($('a.signup-button').index(this));
      cnam_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (cnam_idx + 2) + ") h2").eq(0).text();

      $('#cnam-form').modal('show');
    });
    $('#cnam-form').on('shown', function () {
      $('#plan-name').text(cnam_plan_name);
    })

    //VAPT Plans
    vapt_ctas.on('click', function(e){
      e.preventDefault();
      vapt_idx = ($('a.signup-button').index(this));
      vapt_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (vapt_idx + 2) + ") h2").eq(0).text();

      $('#vapt-form').modal('show');
    });
    $('#vapt-form').on('shown', function () {
      $('#plan-name').text(vapt_plan_name);
    })

    //WebControl Plans
    webcontrol_ctas.on('click', function(e){
      e.preventDefault();
      webcontrol_idx = ($('a.signup-button').index(this));
      webcontrol_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (webcontrol_idx + 2) + ") h2").eq(0).text();

      $('#webcontrol-form').modal('show');
    });
    $('#webcontrol-form').on('shown', function () {
      $('#plan-name').text(webcontrol_plan_name);
    })

    //AppSecure Plans
    appsecure_ctas.on('click', function(e){
      e.preventDefault();
      appsecure_idx = ($('a.signup-button').index(this));
      appsecure_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (appsecure_idx + 2) + ") h2").eq(0).text();

      $('#appsecure-form').modal('show');
    });
    $('#appsecure-form').on('shown', function () {
      $('#plan-name').text(appsecure_plan_name);
    })

    //MDDoS Plans
    mddos_ctas.on('click', function(e){
      e.preventDefault();
      mddos_idx = ($('a.signup-button').index(this));
      mddos_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (mddos_idx + 2) + ") h2").eq(0).text();

      $('#mddos-form').modal('show');
    });
    $('#mddos-form').on('shown', function () {
      $('#plan-name').text(mddos_plan_name);
    })



    //MDDoS Plans
    sharedsan_ctas.on('click', function(e){
      e.preventDefault();
      sharedsan_idx = ($('a.signup-button').index(this));
      sharedsan_storage_size = $("#storage-plan tr td:nth-child(2) div.storage-slider input#amount").eq(0).val();

      $('#sharedsan-form').modal('show');
    });
    $('#sharedsan-form').on('shown', function () {
      $('#storage-size').text(sharedsan_storage_size);
    })

    //SimpliStor
    simplistor_ctas.on('click', function(){
      simplistor_idx = ($('a.signup-button').index(this));
      simplistor_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (simplistor_idx + 2) + ") h2").eq(0).text();

      $('#simplistor-signup').modal('show');
    });

    $('#simplistor-signup').on('shown', function () {
      $('#plan-name').text(simplistor_plan_name);
    })

    //SimpliMail
    simplimail_ctas.on('click', function(){
      simplimail_idx = ($('a.signup-button').index(this));
      simplimail_plan_name = $(".pricing-table-content tr:nth-child(1) td:nth-child(" + (simplimail_idx + 2) + ") h2").eq(0).text();

      $('#simplimail-form').modal('show');
    });

    $('#simplimail-form').on('shown', function () {
      $('#plan-name').text(simplimail_plan_name);
      $('#plan-input').text(simplimail_plan_name);
    })


  });


  function setupLabel() {
      if ($('.label_check input').length) {
        $('.label_check').each(function(){
          $(this).removeClass('c_on');
        });
        $('.label_check input:checked').each(function(){
          $(this).parent('label').addClass('c_on');
        });
      };
      if ($('.label_radio input').length) {
        $('.label_radio').each(function(){
          $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function(){
          $(this).parent('label').addClass('r_on');
        });
      };
    };

    $('.label_check, .label_radio').click(function(){
      setupLabel();
    });
    setupLabel();


    // Validation
    /*
    $.validity.setup({
      outputMode:"summary",
      scrollTo:true
    });

    $(".formee").validity(function() {
      $(".required")
      .require();
      $(".email")
      .require().match('email');
    });
    */

    // Tool Tip
    /*
    $('a[title]').qtip({
      position: {
        my: 'bottom center',
        at: 'top center'
      },
      style: { classes: 'ui-tooltip-blue ui-tooltip-shadow'}
    })
    */

    //IE Placeholder Script Call
    $('input').placeholder();


    //Co-location Show Hide
    $('#co-location_rack_space').change(function() {
      var coloSelectVal = $("#co-location_rack_space option:selected").val();
      var coloFull          = $("#colo-full");

      coloFull.hide();
      if (coloSelectVal == "42U") {
        coloFull.show();
      }
    });

    $(window).resize(function(){

      if ($('.resource-page-cs-list').length) {
      $('.resource-page-cs-list').isotope({
        itemSelector: '.resources-cs-single',
      });
      }

    });




})(jQuery);