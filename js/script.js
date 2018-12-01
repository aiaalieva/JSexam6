$(function () {
    var container = $('.container');
    var send = $('#btn');
    var author = $('#input-author');
    var message = $('#input-message');
    var messagesBlock = $('.messages');

    var getCurrentChat = function () {
        return $.ajax({
            method: 'GET',
            url: 'http://146.185.154.90:8000/messages'
        });
    };

    var showChats = function (answer) {
        var chats = answer.map(function (message) {
            return ('Date: ' + message.datetime + '<br>' + ' Author: ' + message.author + '<br>' + ' Message: ' + message.message + '<br>' + '________' + '<br>');
        });
        messagesBlock.html(chats.join('<br>'));
    };

    var sendMessage = function(){
        return $.post('http://146.185.154.90:8000/messages', {
            author: author.val(),
            message: message.val()
        });
    };

    var interval = function () {
        setInterval(function () {
            getCurrentChat()
                .then(showChats)
        }, 2000);
    };

    getCurrentChat()
        .then(showChats)
        .then(interval);


    send.on('click', function () {
        sendMessage();

    });

});