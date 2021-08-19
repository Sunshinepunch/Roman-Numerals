//Business Logic

let romanNumerals = ["I","V","X","L","C","D","M"]


function convert(num) {
  if (Number(num) === 1) {
    return "I";
  } else if (Number(num) === 2) {
      return "II";
  } else if (Number(num) === 3) {
      return "III";
  } else if (Number(num) === 4) {
      return "IV";
  } else if (Number(num) === 5) {
      return "V";
  } else if (Number(num) === 6) {
      return "VI";
  } else if (Number(num) === 7) {
      return "VII";
  } else if (Number(num) === 8) {
      return "VIII";
  } else if (Number(num) === 9) {
      return "IX";
  } else if (Number(num) === 10) {
      return "X";
  } else {
    return "NAN"
  }
}









//UI logic

$(document).ready(function() {
  $("form#output").submit(function (event) {
    event.preventDefault();
    const rommie = $("#num-input").val();
    const result = " " + convert(rommie);
    $("#display").html(result);
  })
})