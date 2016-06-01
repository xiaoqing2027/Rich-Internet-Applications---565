var socket = io();
var user = $('#user').text();


$('form').submit(function () {

  socket.emit('chat_msg', $('#message').val());
  $('#message').val('');
  return false;
});

socket.on('chat_msg', function (msg) {
    var now =  (new Date()).toLocaleTimeString();
    $('#messages').append($('<p>').html(now + " " +msg));
});

$('#thumb').click(function () {

  var img = '<img src="images/thumb_up.jpeg" height=\'100\'"></img>';
  socket.emit('chat_msg', img);
  img;
  return false;
});

socket.emit("chat_join", user);
