$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        console.log("Link: " + "%s" + "Username: " + " %s" + "content: " + " %s", link, username, content);
        if (link==null || link=="",content==null || content=="")
        {
            alert("すべての欄に記入してください");
            return false;
        }
        $.post(link, {"content": content, "username": username});

    });
});

console.log("main.js 読み込み完了!");
