export function converTimeAudio(time) {
  var minutess = "0" + Math.floor(time / 60);
  var secondss = "0" + Math.floor(time - minutess * 60);

  var dur = minutess.substr(-2) + ":" + secondss.substr(-2);
  return dur;
}
