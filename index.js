const app = "I don't do much."
function kitttens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name){
  var newK = [...kittens];
  
  newK.push(name);
  
  return newK;
}
