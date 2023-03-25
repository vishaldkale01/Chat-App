console.log("Script attach");
const socket = io()

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
let name = prompt("User Name")
socket.emit("new_connect" , name)
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', {msg : input.value , user_name : name});
    input.value = '';
  }
});
socket.on("new_connect" , (msg)=>{
    alert(`new user connect ${msg}`)
})
socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = `from ${msg.user_name} :-   ${msg.msg}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});