$(document).ready(function() {

  $button = $('#quote-now');  // this is the button
  $content = $('#quote-content'); // this selects the result <p>

$button.on('click', function() {

  console.log('click');

  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',

    type: 'POST',
    data: {
      cat: "famous"
    },

    success: function(data) {alert(data);
    $('#quote-content').html(data);
    },

    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'fKNj4SkY1lmshrYv3plHC6jXCNmdp1YPo3XjsnujdpbI1rHohn');
    }
    })
    .fail(function(request, textStatus, errorThrown) {
      $result.html(request.status + ' ' + textStatus + ' ' + errorThrown);
    });
    
  });

});
