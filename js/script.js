$(function () {
    var container = $('.container');
    var send = $('.send');
    var post = $('#input-message');
    var newsfeed = $('.newsFeed');
    var followBtn = $('.follow');
    var profile = $('.profileName');


    var getProfile = function () {
        return $.ajax({
            method: 'GET',
            url: 'http://146.185.154.90:8000/blog/inalieva.a@gmail.com/profile'
        });
    };

    var displayProfile = function (response) {
        var name = response.firstName;
        var lastName = response.lastName;
       return profile.text(name + lastName);
    };

    getProfile()
        .then(displayProfile)

//
//     var showChats = function (answer) {
//         var chats = answer.map(function (message) {
//             return ('Date: ' + message.datetime + '<br>' + ' Author: ' + message.author + '<br>' + ' Message: ' + message.message + '<br>' + '________' + '<br>');
//         });
//         messagesBlock.html(chats.join('<br>'));
//     };
//
//     var sendMessage = function(){
//         return $.post('http://146.185.154.90:8000/messages', {
//             author: author.val(),
//             message: message.val()
//         });
//     };
//
//     var interval = function () {
//         setInterval(function () {
//             getCurrentChat()
//                 .then(showChats)
//         }, 2000);
//     };
//
//     getCurrentChat()
//         .then(showChats)
//         .then(interval);
//
//
//     send.on('click', function () {
//         sendMessage();
//
//     });
//
});