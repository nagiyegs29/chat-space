$(function(){
  function buildHTML(message) {
    if (message.image){
      let html = 
        `<div class="MessageBox">
          <div class="MessageInfo">
            <div class="MessageInfo__UserName">
              ${message.user_name}
            </div>
            <div class="MessageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    }
    else {
      let html = 
        `<div class="MessageBox">
          <div class="MessageInfo">
            <div class="MessageInfo__UserName">
              ${message.user_name}
            </div>
            <div class="MessageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType:'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message);
      $('.MessageField').append(html);
      $('form')[0].reset();
      $('.Form__Submit').prop('disabled', false);
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  });
});