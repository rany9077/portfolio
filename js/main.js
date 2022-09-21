$(function () {
  const progressBox = $(".progress-bar");
  const progressOst = $(".animation").offset().top - 500;
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
      //console.log(progressRate);
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
