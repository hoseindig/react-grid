debugger;

let callback = (element) => element.innerHTML == "محل";

let elements = Array.from(document.getElementsByTagName("span"));

let result = elements.filter(callback);
result[0].click(); //محل کلیک
console.log(result); //click

setTimeout(() => {
  let callback2 = (element) => element.innerHTML == "تعیین محل";

  let elements2 = Array.from(document.getElementsByTagName("span"));

  let result2 = elements2.filter(callback2);
  if (!result2[0]) {
    console.log("%c!result2", "background:red");
    return;
  }
  result2[0].click(); //click

  let scrollTop = 100;
  let blockDis = [172, 205];

  let interVal = setInterval(function () {
    var elem = document.getElementsByClassName("multi-select-modal__scroll")[0];
    if (elem) {
      elem.scrollTop = scrollTop; // elem.scrollHeight/20;
      scrollTop += 100;
      let allCheckBox = Array.from(
        document.getElementsByClassName("kt-switch__input")
      );
      let arr1 = allCheckBox.map((x) => Number(x.value));

      let difference = arr1
        .filter((x) => !blockDis.includes(x))
        .concat(blockDis.filter((x) => !arr1.includes(x)));
      console.log("difference ", difference);
      difference.forEach((d) => {
        allCheckBox.forEach((checkbox) => {
          if (checkbox.value == d && !checkbox.checked) checkbox.click();
        });
      });

      if (scrollTop > elem.scrollHeight) {
        clearInterval(interVal);
        console.log("%cend of checkbox check", "background:green");
        document.getElementsByClassName("kt-button--primary")[1].click();
      }
    }
  }, 1);
}, 500);
