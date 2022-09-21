
    function filterSelection() {
      var x, i, t;
      x = document.getElementsByClassName("filterDiv");
      y = document.getElementsByClassName("filterDiv " + selectedMath + " " + selectedBlock);
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        addClass(x[i], "hide");
        for (t = 0; t < y.length; t++) {
          removeClass(y[t], "hide");
          addClass(y[t], "show");
        }
      }
    }

    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }

    function removeClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    var selectedMath;
    var selectedBlock;
    selectedMath = "";
    selectedBlock = "";

    function mathlevel() {
      var selectBox = document.getElementById("mathlevel");
      selectedMath = selectBox.options[selectBox.selectedIndex].value;
      filterSelection();
    }
    function frees() {
      var selectBox = document.getElementById("frees");
      selectedBlock = selectBox.options[selectBox.selectedIndex].value;
      filterSelection();
    }