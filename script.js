
//canvas-textdraw
window.onload = function () {
  const canvas = document.getElementById("canv");
  const ctx = canvas.getContext("2d");

  const string = "WE MAINTAIN PLANT AND THE PLANT MAINTAINS US";
  const angle = Math.PI * 0.61;
  const radius = 950;
  let alpha = 0; // Start transparent

  ctx.font = "40px sans-serif";
  ctx.textAlign = "center";

  function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(750, 1098);
    ctx.rotate(-1.08 * angle / 2);
    ctx.globalAlpha = alpha;

    for (let i = 0; i < string.length; i++) {
      ctx.rotate(angle / string.length);
      ctx.save();
      ctx.translate(0, -1 * radius);
      ctx.fillStyle = "black";
      ctx.fillText(string[i], 0, 0);
      ctx.restore();
    }

    ctx.restore();

    if (alpha < 1) {
      alpha += 0.01; // Speed of fade-in
      requestAnimationFrame(drawText);
    }
  }

  drawText();
};
//fancybox
    $(document).ready(function() {
        $("[data-fancybox]").fancybox();
    });













