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

    // success: function(data) {alert(data);
    // $content.html(data);
    // },

    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'fKNj4SkY1lmshrYv3plHC6jXCNmdp1YPo3XjsnujdpbI1rHohn');
    }
    })
    .done(function(data) {
      alert(data);
      $content.html(data);
    })
    .fail(function(request, textStatus, errorThrown) {
      $content.html(request.status + ' ' + textStatus + ' ' + errorThrown);
    });

  });

  var conflict = 'making conflict';
  conflict.concat('resolved?');

});



// $(function(){
//   $button = $('#quote-now');  // this is the button
//   $result = $('#result'); // this selects the result <p>
//   api_url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous"; // this is the url for the api
//
//   $button.on('click', function(){
//     $.ajax({
//       // put the necessary code here to hit the api
//       dataType: 'json',
//       type: 'POST',
//       data: {
//         cat: "famous"
//       },
//       beforeSend: function(xhr) {
//         xhr.setRequestHeader('X-Mashape-Key', 'fKNj4SkY1lmshrYv3plHC6jXCNmdp1YPo3XjsnujdpbI1rHohn');
//       }
//     }).success(successFunction)
//       .fail(failFunction);
//
//
//   // function alwaysFunction(){
//   //   console.log("yay!");
//   //   // do we need this? if not take it out
//   // }
//
//   function successFunction(data){
//     // put the action to show only the quote in the $result
//     // we can have this do some changes to the styling to (eg make the container for the result appear only when success)
//     alert(data);
//     $('#quote-content').html(data);
//   }
//
//   function failFunction(jqXHR, textStatus, errorThrown){
//     console.log(errorThrown);
//   }
//   })
// })
