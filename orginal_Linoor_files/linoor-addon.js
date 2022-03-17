(function ($) {
  "use strict";

  var WidgetCountdownHandler = function () {
    if ($(".mc-form").length) {
      $(".mc-form").each(function () {
        var Self = $(this);
        var mcURL = Self.data("url");
        var mcResp = Self.parent().find(".mc-form__response");

        Self.ajaxChimp({
          url: mcURL,
          callback: function (resp) {
            // appending response
            mcResp.append(function () {
              return '<p class="mc-message">' + resp.msg + "</p>";
            });
            // making things based on response
            if (resp.result === "success") {
              // Do stuff
              Self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
            if (resp.result === "error") {
              Self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
          }
        });
      });
    }

    if ($(".countdown-one__list").length) {
      let mainDate = $(".countdown-one__list").data("deadline-date");
      let yearsCondition =
        undefined == $(".countdown-one__list").data("enable-years") ?
        false :
        $(".countdown-one__list").data("enable-years");
      let daysCondition =
        undefined == $(".countdown-one__list").data("enable-days") ?
        true :
        $(".countdown-one__list").data("enable-days");
      let leadingZeros = $(".countdown-one__list").data("leading-zeros");
      console.log(daysCondition);
      let deadLine =
        "dynamicDate" == mainDate ?
        new Date(Date.parse(new Date()) + 31 * 24 * 60 * 60 * 1000) :
        "dynamicHour" == mainDate ?
        new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000) :
        mainDate;

      $(".countdown-one__list").countdown({
        date: deadLine,
        leadingZeros: true,
        render: function (date) {
          this.el.innerHTML =
            (true == yearsCondition ?
              "<li> <span class='years'> " +
              (true == leadingZeros ?
                this.leadingZeros(date.years) :
                date.years) +
              " <i> Years </i> </span> </li>" :
              " ") +
            (true == daysCondition ?
              "<li> <span class='days'> " +
              (true == leadingZeros ?
                this.leadingZeros(date.days) :
                date.days) +
              " <i> Days </i> </span> </li>" :
              " ") +
            "<li> <span class='hours'>" +
            (true == leadingZeros ?
              this.leadingZeros(date.hours) :
              date.hours) +
            " <i> Hours </i> </span> </li>" +
            "<li> <span class='minutes'> " +
            (true == leadingZeros ? this.leadingZeros(date.min) : date.min) +
            " <i> Minutes </i> </span> </li>" +
            "<li> <span class='seconds'>" +
            (true == leadingZeros ? this.leadingZeros(date.sec) : date.sec) +
            " <i> Seconds </i> </span> </li>";
        }
      });
    }
  };

  var WidgetMainSliderHandler = function () {
    //Main Slider / Banner Carousel
    if ($(".banner-carousel").length) {
      $(".banner-carousel").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 0,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 1
          },
          992: {
            items: 1
          }
        }
      });
    }
  };

  var WidgetMailchimpHandler = function () {
    if ($(".mc-form").length) {
      $(".mc-form").each(function () {
        var Self = $(this);
        var mcURL = Self.data("url");
        var mcResp = Self.parent().find(".mc-form__response");

        Self.ajaxChimp({
          url: mcURL,
          callback: function (resp) {
            // appending response
            mcResp.append(function () {
              return '<p class="mc-message">' + resp.msg + "</p>";
            });
            // making things based on response
            if (resp.result === "success") {
              // Do stuff
              Self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
            if (resp.result === "error") {
              Self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
          }
        });
      });
    }
  };

  var WidgetDefaultHandler = function ($scope) {
    if ($scope.find(".thm-swiper__slider").length) {
      $scope.find(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data("swiper-options");
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }

    //Single Item Carousel
    if ($(".single-item-carousel").length) {
      $(".single-item-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoplay: 5000,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 1
          },
          1024: {
            items: 1
          }
        }
      });
    }

    //LightBox / Fancybox
    if ($(".lightbox-image").length) {
      $(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {
          media: {}
        }
      });
    }

    // Donation Progress Bar
    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        }, {
          accY: -50
        }
      );
    }

    //Fact Counter + Text Count
    if ($(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text()
            }).animate({
              countNum: n
            }, {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              }
            });
          }
        }, {
          accY: 0
        }
      );
    }

    //Jquery Knob animation
    if ($(".dial").length) {
      $(".dial").appear(
        function () {
          var elm = $(this);
          var color = elm.attr("data-fgColor");
          var perc = elm.attr("value");
          var thickness = elm.attr("data-thickness");

          elm.knob({
            value: 0,
            min: 0,
            max: 100,
            skin: "tron",
            readOnly: true,
            thickness: thickness,
            dynamicDraw: true,
            displayInput: false
          });

          $({
            value: 0
          }).animate({
            value: perc
          }, {
            duration: 2000,
            easing: "swing",
            progress: function () {
              elm.val(Math.ceil(this.value)).trigger("change");
            }
          });
        }, {
          accY: 0
        }
      );
    } //end knob animation
  };

  var WidgetAccordionHandler = function () {
    //Accordion Box
    if ($(".accordion-box").length) {
      var accrodionGrp = $(".accordion-box");
      accrodionGrp.each(function () {
        var accrodionName = $(this).attr("id");
        var Self = $(this);
        var accordion = Self.find(".accordion");
        Self.addClass(accrodionName);
        Self.find(".accordion .acc-content").hide();
        Self.find(".accordion.active-block").find(".acc-content").show();
        accordion.each(function () {
          $(this)
            .find(".acc-btn")
            .on("click", function () {
              if ($(this).parent().hasClass("active-block") === false) {
                $(".accordion-box." + accrodionName)
                  .find(".accordion")
                  .removeClass("active-block");
                $(".accordion-box." + accrodionName)
                  .find(".accordion")
                  .find(".acc-content")
                  .slideUp();
                $(this).parent().addClass("active-block");
                $(".accordion-box." + accrodionName)
                  .find(".acc-btn")
                  .removeClass("active");
                $(this).addClass("active");
                $(this).parent().find(".acc-content").slideDown();
              }
            });
        });
      });
    }
  };

  var WidgetPortfolioHandler = function () {
    //MixitUp Gallery Filters
    if ($(".filter-list").length) {
      $(".filter-list").mixItUp({});
    }

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

    //Product Tabs
    if ($(".project-tab").length) {
      $(".project-tab .product-tab-btns .p-tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(".project-tab .product-tab-btns .p-tab-btn").removeClass(
            "active-btn"
          );
          $(this).addClass("active-btn");
          $(".project-tab .p-tabs-content .p-tab").removeClass("active-tab");
          $(target).addClass("active-tab");
        }
      });
    }

    //portfolio horizontal
    if ($(".portfolio-horizontal__carousel").length) {
      $(".portfolio-horizontal__carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        dots: false,
        navText: [
          '<span class="icon nav-button-left"></span>',
          '<span class="icon nav-button-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4
          },
          1500: {
            items: 4
          },
          1600: {
            items: 4
          }
        }
      });
    }

    //Project Carousel
    if ($(".project-carousel").length) {
      $(".project-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 3
          },
          1500: {
            items: 4
          },
          1600: {
            items: 4
          }
        }
      });
    }

    //Project Carousel
    if ($(".project-carousel-two").length) {
      $(".project-carousel-two").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      });
    }

    //portfolio horizontal
    if ($(".portfolio-horizontal-two__carousel").length) {
      var myCarousel = $(".portfolio-horizontal-two__carousel");
      var textCountWrap = $(".portfolio-horizontal-two__carousel__count");
      var dotsBlock = $(".portfolio-horizontal-two__carousel__progress");

      myCarousel
        .on("initialized.owl.carousel changed.owl.carousel", function (e) {
          var carousel = e.relatedTarget;
          console.log(carousel);

          if (!e.namespace) {
            return;
          }
          var text =
            '<span class="current-number">' +
            "0" +
            (carousel.relative(carousel.current()) + 1) +
            "</span>" +
            '<span class="sep">/</span>' +
            '<span class="counted-number">' +
            "0" +
            carousel.items().length +
            "</span>";
          textCountWrap.html(text);

          var dotIndex = carousel.relative(carousel.current());
          dotsBlock.find("li").removeClass("active");
          dotsBlock.find("li").eq(dotIndex).addClass("active");
        })
        .owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          smartSpeed: 700,
          autoplay: 5000,
          autoplayTimeout: 5000,
          dots: false,
          navText: [
            '<span class="icon nav-button-left"></span>',
            '<span class="icon nav-button-right"></span>'
          ],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2,
              margin: 30
            },
            992: {
              items: 3,
              margin: 30
            },
            1200: {
              items: 4,
              margin: 40
            },
            1500: {
              items: 4,
              margin: 50
            },
            1600: {
              items: 5,
              margin: 50
            }
          }
        });

      dotsBlock.on("click", "li", function (e) {
        myCarousel.trigger("to.owl.carousel", [$(this).index(), 300]);
      });
    }
  };

  var WidgetTeamHandler = function () {
    //Team Carousel
    if ($(".team-carousel").length) {
      $(".team-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4
          },
          1500: {
            items: 4
          },
          1600: {
            items: 5
          }
        }
      });
    }

    //Team Carousel
    if ($(".team-carousel__one-page").length) {
      $(".team-carousel__one-page").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 3
          },
          1500: {
            items: 3
          },
          1600: {
            items: 3
          }
        }
      });
    }
  };

  var WidgetSponsorsHandler = function () {
    //Sponsors Carousel
    if ($(".sponsors-carousel").length) {
      $(".sponsors-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 5
          }
        }
      });
    }
  };

  var WidgetTestimonialsHandler = function () {
    //Testimonial Carousel
    if ($(".testimonials-carousel").length) {
      $(".testimonials-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          768: {
            items: 1
          },
          992: {
            items: 2
          },
          1200: {
            items: 2
          }
        }
      });
    }

    //Testimonial Carousel
    if ($(".testimonials-carousel-two").length) {
      $(".testimonials-carousel-two").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          768: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      });
    }
    if ($(".testimonials-four-carousel").length) {
      $(".testimonials-four-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 700,
        autoplay: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    }
  };

  var WidgetContactFormHandler = function () {
    //Custom Seclect Box
    if ($(".custom-select-box").length) {
      $(".custom-select-box")
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass("overflow");
    }
  };

  var WidgetFeaturedHandler = function () {
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
  };
  var WidgetPricingHandler = function () {
    if ($("#switch-toggle-tab").length) {
      var toggleSwitch = $("#switch-toggle-tab label.switch");
      var TabTitle = $("#switch-toggle-tab li");
      // hidden show deafult;
      $(".linoor-price-tab .pricing-box").hide();
      $(".linoor-price-tab .pricing-box.active").show();

      TabTitle.find("a").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        if (false === $(target).hasClass("active")) {
          TabTitle.removeClass("active");
          $(this).parent().addClass("active");
          $(".linoor-price-tab .pricing-box").hide().removeClass("active");
          $(target).show().addClass("active");
          TabTitle.find(".switch").toggleClass("off");
        }
      });

      toggleSwitch.on("click", function () {
        let defaultActive = $(".linoor-price-tab .pricing-box.active").attr(
          "id"
        );
        let inActive = $(".linoor-price-tab .pricing-box:not(.active)").attr(
          "id"
        );
        $("#" + defaultActive)
          .hide()
          .removeClass("active");
        $("#" + inActive)
          .show()
          .addClass("active");
        $("#switch-toggle-tab li." + defaultActive).removeClass("active");
        $("#switch-toggle-tab li." + inActive).addClass("active");
        $(this).toggleClass("off");
      });
    }
  };

  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-main-slider.default",
      WidgetMainSliderHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetDefaultHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/footer-subscribe.default",
      WidgetMailchimpHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-accordion.default",
      WidgetAccordionHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-portfolio.default",
      WidgetPortfolioHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-team.default",
      WidgetTeamHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-sponsors.default",
      WidgetSponsorsHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-testimonials.default",
      WidgetTestimonialsHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-contact-form.default",
      WidgetContactFormHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-featured.default",
      WidgetFeaturedHandler
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-coming-soon.default",
      WidgetCountdownHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/linoor-pricing.default",
      WidgetPricingHandler
    );
  });

  if ($(".portfolio-layout-four__carousel").length) {
    $(".portfolio-layout-four__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      smartSpeed: 700,
      autoplay: 5000,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      navText: [
        '<span class="icon fa fa-angle-left"></span>',
        '<span class="icon fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    });
  }
})(jQuery);