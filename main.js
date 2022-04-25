let table = document.querySelector("#table"),
  trainName = document.querySelector("#train-name"),
  destination = document.querySelector("#destination"),
  nextTrain = document.querySelector("#next-train"),
  interval = document.querySelector("#interval"),
  button = document.querySelector("#btn");

button.addEventListener("click", function () {
  let name = trainName.value,
    trainDestination = destination.value,
    next = nextTrain.value,
    trainFrequency = interval.value;

  let tr = document.createElement("tr"),
    tdName = document.createElement("td"),
    tdDestination = document.createElement("td"),
    tdFrequency = document.createElement("td"),
    tdNext = document.createElement("td"),
    tdArriving = document.createElement("td"),
    tdBtns = document.createElement("td");
  tdName.innerHTML = name;
  tdDestination.innerHTML = trainDestination;
  tdFrequency.innerHTML = trainFrequency;
  tdNext.innerHTML = next;
  startTimer(timeCalc(next) * 60, tdArriving);
  let editBtn = document.createElement("button");
  editBtn.innerHTML = "✎";
  editBtn.classList.add("edit-btn");
  let delBtn = document.createElement("button");
  delBtn.innerHTML = "🗑";
  delBtn.addEventListener("click", function () {
    tr.remove();
  });
  delBtn.classList.add("del-btn");
  tdBtns.appendChild(editBtn);
  tdBtns.appendChild(delBtn);
  tr.appendChild(tdName);
  tr.appendChild(tdDestination);
  tr.appendChild(tdFrequency);
  tr.appendChild(tdNext);
  tr.appendChild(tdArriving);
  tr.appendChild(tdBtns);
  table.appendChild(tr);
});

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  let time = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(time);
    }
  }, 1000);
}

function timeCalc(time) {
  let hours = time.slice(0, 2),
    min = time.slice(3, 5);

  let timeInMin = parseInt(hours, 10) * 60 + parseInt(min, 10),
    now = new Date(),
    hoursNow = now.getHours(),
    minNow = now.getMinutes();

  return timeInMin - (hoursNow * 60 + minNow);
}
