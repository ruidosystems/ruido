function myFunction() {
    navigator.clipboard.writeText("info@ruido.systems");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }