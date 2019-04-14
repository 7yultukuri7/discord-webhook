$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("すべての欄に記入してください");
            return false;
        }
        $.post(link, {"content": content, "username": username});

        console.log("コンテンツ送信完了!");
    });
});
console.log("main.js 読み込み完了!");
