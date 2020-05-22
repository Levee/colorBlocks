$(readyNow);

function readyNow(){
  console.log('js');
  $('#btnZone button').click(addBlock);
}

function addGreenBox(){
  $('#boxes').append('<div class="green box"></div>');
}

function addBlueBox(){
  $('#boxes').append('<div class="blue box"></div>');
}

function addBlock(){
  let id = this.id;
  if (id === 'addRed') {
    $('#boxes').append('<div class="red box"></div>');
    delBlock();
  }
  else if (id === 'addYellow') {
    $('#boxes').append('<div class="yellow box"></div>');
    delBlock();
  }
  else if (id === 'addGreen') {
    $('#boxes').append('<div class="green box"></div>');
    delBlock();
  }
  else if (id === 'addBlue') {
    $('#boxes').append('<div class="blue box"></div>');
    delBlock();
  }
}

function refreshCount(){
  let redInc = $('.red').length;
  $('#redCount').text(`Red Count: ${redInc}`);
  let yellowInc = $('.yellow').length;
  $('#yellowCount').text(`Yellow Count: ${yellowInc}`);
  let greenInc = $('.green').length;
  $('#greenCount').text(`Green Count: ${greenInc}`);
  let blueInc = $('.blue').length;
  $('#blueCount').text(`Blue Count: ${blueInc}`);
}

function delBlock(){
  $('.box').click(function (event) {
    let el = event.target;
    $(el).remove();
  });
}

$('.boxes').on('click', 'div.box', function(){
  $(this).remove();

});