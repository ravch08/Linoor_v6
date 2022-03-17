(function ($) {
  "use strict";

  // boxed layout switcher
  if ($(".boxed-switcher").length) {
    $(".boxed-switcher").on("click", function () {
      $("body").toggleClass("boxed-wrapper");
      $(".page-wrapper").toggleClass("boxed-wrapper");
    });
  }

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $("body").addClass("page-loaded");
      $(".preloader").delay(300).fadeOut(0);
    }
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  if ($('.sticky-menu').length) {
    $('.sticky-menu').addClass('original').clone(true).insertAfter('.sticky-menu').addClass('sticked-menu fixed-header').removeClass('original sticky-menu');
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($('.sticked-menu').length) {
      var headerScrollPos = 100;
      var stricky = $('.sticked-menu');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass('stricky-fixed');
      } else if ($('.sticky-menu').scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed');
      }
    }

    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var sticky_header = $(".main-header .sticky-header");
      if (windowpos > 120) {
        siteHeader.addClass("fixed-header");
        sticky_header.addClass("animated slideInDown");
      } else {
        siteHeader.removeClass("fixed-header");
        sticky_header.removeClass("animated slideInDown");
      }
    }

  }


  //Submenu Dropdown Toggle
  if ($(".main-header li.menu-item-has-children ul").length) {
    $(".main-header .navigation li.menu-item-has-children > a").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".side-menu__block").length) {
    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    var mobileNavContainer = $(".mobile-nav__container");
    mobileNavContainer.append(mobileMenuContent);

    //Dropdown Button
    mobileNavContainer
      .find("li.menu-item-has-children .dropdown-btn")
      .on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(this).parent("a").parent("li").children("ul").slideToggle(500);
      });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $(".side-menu__block").addClass("active");
    });

    $(".side-menu__block-overlay,.side-menu__toggler, .scrollToLink > a ").on(
      "click",
      function (e) {
        $(".side-menu__block").removeClass("active");
        e.preventDefault();
      }
    );
  }

  //Search Popup
  if ($(".search-popup").length) {
    //Show Popup
    $(".search-toggler").on("click", function () {
      $(".search-popup").addClass("active");
    });
    //Hide Popup
    $(".search-popup__overlay").on("click", function (e) {
      $(".search-popup").removeClass("active");
      e.preventDefault();
    });

    $('.search-popup form').prepend(function () {
      return '<div class="search-toggler"></div>';
    });

    $(".search-popup form .search-toggler").on("click", function (e) {
      $(".search-popup").removeClass("active");
      e.preventDefault();
    });
  }



  //Datepicker
  if ($(".date-picker").length) {
    $(".date-picker").datepicker();
  }


  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate({
          scrollTop: $(target).offset().top
        },
        1000
      );

      return false;
    });
  }

  //MixitUp Gallery Filters
  if ($(".filter-list").length) {
    $(".filter-list").mixItUp({});
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      $(".scrollToLink > a").on("click", function (event) {
        event.preventDefault();
        console.log($(this));
        if ($(window).scrollTop() > 10) {
          var headerH = "0";
        } else {
          var headerH = "0";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate({
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            1200,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        target.parent().addClass("current");
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        // grabing section id dynamically
        var sections = $(this).attr("href");
        $(sections).each(function () {
          // checking is scroll bar are in section
          if ($(this).offset().top <= windscroll + 100) {
            // grabing the dynamic id of section
            var Sectionid = $(sections).attr("id");
            // removing current class from others
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
            // adding current class to related navigation
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li.current-menu-ancestor").removeClass("current-menu-ancestor");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }


  if ($('.price_slider_amount button[type="submit"]').length) {
    var getText = $('.price_slider_amount button[type="submit"]').text();
    $('.price_slider_amount button[type="submit"]').addClass('theme-btn btn-style-one');
    $('.price_slider_amount button[type="submit"]').html(function () {
      return ' <i class="btn-curve"></i> <span class="btn-title">' + getText + '</span> ';
    });

  }


  if ($(".add").length) {
    $(document).on("click", '.add', function () {
      if ($(this).prev().val() < 999) {
        $(this)
          .prev()
          .val(+$(this).prev().val() + 1);
      }
      $(this).prev().trigger('change');
    });
  }

  if ($(".sub").length) {
    $(document).on("click", '.sub', function () {
      if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1)
          $(this)
          .next()
          .val(+$(this).next().val() - 1);
      }
      $(this).next().trigger('change');
    });
  }


  /* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
    OnePageMenuScroll();
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  });

 
  /* ==========================================================================
	   When document is Resized, do
	   ========================================================================== */

  $(window).on("resize", function () {});

  /* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

  $(window).on("load", function () {


    handlePreloader();

    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry",
        itemSelector: ".masonary-item"
      });
    }

    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }
  });
})(window.jQuery);