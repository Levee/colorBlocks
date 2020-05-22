$(readyNow);

function readyNow(){
  console.log('js');
  $('#btnZone button').click(addBlock);
  refreshCount();
  delBlock();

  addBlock('addRed');
  addBlock('addYellow');
  addBlock('addGreen');
  addBlock('addBlue');
}

function addBlock(param1){
  // param1 can either be `event` if this was clicked
  // if it isnt, it could be a string of the id we want
  // to pretend we clicked on

  let id;
  if (typeof(param1) === 'string') {
    // we passed in an id manually!
    id = param1;
  } else {
    // its an event probably!
    id = this.id;
  }
  // let id = this.id;
  if (id === 'addRed') {
    $('#boxes').append('<div class="red box"></div>');
    refreshCount();
  }
  else if (id === 'addYellow') {
    $('#boxes').append('<div class="yellow box"></div>');
    refreshCount();
  }
  else if (id === 'addGreen') {
    $('#boxes').append('<div class="green box"></div>');
    refreshCount();
  }
  else if (id === 'addBlue') {
    $('#boxes').append('<div class="blue box"></div>');
    refreshCount();
  }
  delBlock();
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
    refreshCount();
  });
}

// $('.boxes').on('click', 'div.box', function(){
//   $(this).remove();

// });
