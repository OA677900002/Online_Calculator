function appendVal(value) {
    document.getElementById("res").value += value;
  }
  
  function answer() {
    var ans = document.getElementById("res").value;
    var calculatedAns = eval(ans);
    document.getElementById("res").value = calculatedAns;
  }
  
  function clearRes() {
    document.getElementById("res").value = "";
  }