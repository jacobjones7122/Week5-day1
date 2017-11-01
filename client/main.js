// $(document).ready(function(){
    
//     var $chirperList = $('#chirperList');
//     var $user = $('#user');
//     var $timeStamp = $('#timeStamp');
//     var $message = $('#message');
//     var $userOption = $('#userOption');
//     var $username = $('#username');
 
    
//     function getOneTweet(){
//         var userId = $userOption.val();
//          $.ajax({
//              method: "GET",
//              url: ("/api/users/" + userId),
//              contentType: "application/json",
//              success: function(chirps){
//                  $.each(chirps[0], function(i, chirp){
//                      $('#chirperDiv').append("<div class= 'chirp'>" + chirp.user + ' @ ' + chirp.timestamp + ': ' + chirp.message + "<br /><button class= 'updateBtn' id= " + chirp.id + ">Update</button><button class= 'deleteBtn' id= " + chirp.id + '>Delete</button></div>');
//                      $('.deleteBtn').unbind().on('click', function(){
//                          deleteTweetOne(this.id);
//                      });
//                      $('.updateBtn').unbind().on('click', function(){
//                          if($message.val().length > 0){
//                              updateTweetSelect(this.id);
//                          } else {
//                              aleart('There is not text.');
//                          };
//                      });
//                  })
//              }
//          });
//     };


//     function createUsers(){
//         var user = {userName: $username.val()};
//         console.log(user);
//         $.ajax({
//             method: "POST",
//             url: "/api/users",
//             contentType: "application/json",
//             data: JSON.stringify(user)
//         }).then(function(){
//             $('select option').remove();
//             getUsers();
//         });
//     };
    
// function deleteTweet(ajaxId) {
//     var id = ajaxId;
//     $.ajax({
//         method: "DELETE",
//         url: ("/api/chirps/" + id)
//     }).then(function(){
//         $('#chirperDiv').empty();
//         getTweets();
//     })
// };


// function deleteTweetOne(ajaxId) {
//     var id = ajaxId;
//     $.ajax({
//         method: "DELETE",
//         url: ("/api/users/" + id)
//     }).then(function(){
//         $('#chirperDiv').empty();
//         getOneTweet();
//     });
// };

// function updateTweet(updateId){
//     var update = {
//         id: updateId,
//         message: $message.val()
//     };
//     $.ajax({
//         method: "POST",
//         url: "/api/chirps/update",
//         contentType: "application/json",
//         data: JSON.stringify(update)
//     }).then(function(){
//         $('#chirperDiv').empty();
//         getTweets();
//     });
// };


// function updateTweetSelect(updateId){
//     var update = {
//         id: updateId,
//         message: $message.val()
//     };
//     $.ajax({
//         method: "POST",
//         url: "/api/chirps/update",
//         contentType: "application/json",
//         data: JSON.stringify(update)
//     }).then(function(){
//         $('#chirperDiv').empty();
//         getOneTweet();
//     });
// };


//     // $('#btnText').on('click', function(){
//     //     if($message.val().length > 0){
//     //         postTweet();
//     //     } else {
//     //         alert('There is no message');
//     //     };
//     // });

//     // $('#btnCreateUser').on('click', function(){
//     //     if($username.val().length > 0){
//     //         createUsers();
//     //     } else {
//     //         alert('There is no username');
//     //     };
//     // });

//     // $('#btnSelect').on('click', function(){
//     //     $('#chirperDiv').empty();
//     //     getOneTweet();
//     // });

//     // $('#btnReset').on('click', function(){
//     //     $('#chirperDiv').empty();
//     //     getTweets();
//     // });

// })