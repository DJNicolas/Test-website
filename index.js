const $body = document.querySelector('body');
$body.innerHTML += '<p>Nicolas</p>';

const $text = document.getElementById("text");
const $button = document.getElementById("button");
$button.addEventListener("click", function() {
    if(document.getElementById("text") === "test") {
      document.getElementById('text').innerHTML = "cc";
    }else{
      if (document.getElementById("text") === "cc") {
        document.getElementById('text').innerHTML = "çava";
      }
    }
});
function test(){
    console.log('Nicolas')
}
test()
 