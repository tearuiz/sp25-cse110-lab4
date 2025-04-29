function printCurrentTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
printCurrentTime();
const intervalId = setInterval(printCurrentTime, 1000); //1000 used for every second to print
