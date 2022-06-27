window.onload = function () {
  let numberOne = "";
  let numberTwo = "";
  let operator = "";

  const $operator = document.getElementById("operator");
  const $result = document.getElementById("result");
  const onClickNumber = (number) => {
    return () => {
      if (operator) {
        if (!numberTwo) {
          $result.value = "";
        }
        numberTwo += number;
        $result.value += number;
      } else {
        numberOne += number;
        $result.value += number;
      }
    };
  };

  document
    .querySelector("#num-0")
    .addEventListener("click", onClickNumber("0"));
  document
    .querySelector("#num-1")
    .addEventListener("click", onClickNumber("1"));
  document
    .querySelector("#num-2")
    .addEventListener("click", onClickNumber("2"));
  document
    .querySelector("#num-3")
    .addEventListener("click", onClickNumber("3"));
  document
    .querySelector("#num-4")
    .addEventListener("click", onClickNumber("4"));
  document
    .querySelector("#num-5")
    .addEventListener("click", onClickNumber("5"));
  document
    .querySelector("#num-6")
    .addEventListener("click", onClickNumber("6"));
  document
    .querySelector("#num-7")
    .addEventListener("click", onClickNumber("7"));
  document
    .querySelector("#num-8")
    .addEventListener("click", onClickNumber("8"));
  document
    .querySelector("#num-9")
    .addEventListener("click", onClickNumber("9"));

  const onClickOperator = (op) => {
    return () => {
      if (numberOne) {
        operator = op;
        $operator.value = op;
      } else {
        alert("숫자를 먼저 입력해 주세요.");
      }
    };
  };

  document
    .querySelector("#plus")
    .addEventListener("click", onClickOperator("+"));
  document
    .querySelector("#minus")
    .addEventListener("click", onClickOperator("-"));
  document
    .querySelector("#multiply")
    .addEventListener("click", onClickOperator("x"));
  document
    .querySelector("#divide")
    .addEventListener("click", onClickOperator("/"));

  const onClickEqual = () => {
    if (!numberTwo) {
      alert("숫자를 입력해 주세요.");
    }

    if (operator === "+") {
      $result.value = Number(numberOne) + Number(numberTwo);
    } else if (operator === "-") {
      $result.value = Number(numberOne) - Number(numberTwo);
    } else if (operator === "x") {
      $result.value = Number(numberOne) * Number(numberTwo);
    } else {
      $result.value = Number(numberOne) / Number(numberTwo);
    }
  };

  document.querySelector("#equal").addEventListener("click", onClickEqual);

  document.querySelector("#clear").addEventListener("click", () => {
    $result.value = "";
    $operator.value = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
  });
};
