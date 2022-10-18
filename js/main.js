//gnb
let win = $(window),
  sections = $(".section"),
  gnb = $(".gnb li");

const gnbOff = () => {
  gnb.each(() => {
    this.removeClass("on");
  });
};
gnb.click(function (e) {
  e.preventDefault();
  let tg = $(this);
  let index = tg.index();
  let section = sections.eq(index);
  let offset = section.offset().top;
  $("html,body").stop().animate({ scrollTop: offset }, 1000, "easeOutCirc");
});
win.scroll(function () {
  let sct = win.scrollTop();
  sections.each(function (i) {
    if (sct >= sections.eq(i).offset().top - 300) {
      gnb.eq(i).addClass("on").siblings().removeClass("on");
      sections.eq(i).addClass("on").siblings().removeClass("on");
    }
  });
  sct > 400 ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
});

//bar
$(function () {
  const progressBox = $(".progress-bar");
  const progressOst = $(".animation").offset().top - 700;
  let isAni = false;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= progressOst && !isAni) {
      progressAni();
    }
  });
  function progressAni() {
    progressBox.each(function () {
      let $this = $(this),
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate");
      progressBar.animate({ width: progressRate + "%" }, 2800);
      //변수 text 선언
      let text = function () {
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              let now = this.rate;
              progressText.text(Math.floor(now) + "%");
            },
            complete: function () {
              isAni = true;
            },
          }
        );
      };
      text();
    });
  }
});

//project fade in
$(document).ready(function () {
  $(window).scroll(function () {
    $(".pj_desc img").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 100);
      }
    });
  });
});

//cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});

//top button
$(function () {
  "use strict";
  $(document).ready(function () {
    var offset = 300;
    var duration = 400;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".top_btn").addClass("active-arrow");
      } else {
        jQuery(".top_btn").removeClass("active-arrow");
      }
    });
    jQuery(".top_btn").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
});
