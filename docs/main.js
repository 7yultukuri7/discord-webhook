$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var sty1 = 'color:#40e0d0;background:#484b52;';
        console.log("%c Webhook Link:      " + "%s \n" + " Bot Username: " + " %s \n" + " content:  " + " %s \n", sty1, link, username, content);
        if (link==null || link=="",content==null || content=="")
        {
            alert("すべての欄に記入してください");
            return false;
        }
        $.post(link, {"content": content, "username": username});
        $('#log').append('<br><span>Webhook Link:' + link + '<br>Bot Username:' + username + '<br>content:' + content + '</span><br>');
        console.log("コンテンツ送信完了!");
    });
});

$('.msg').append('<span>Ver.1.0.0(beta)</span>');
        console.log(".msg完了!");

console.log("main.js 読み込み完了!");
