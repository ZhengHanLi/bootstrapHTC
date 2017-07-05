// banner 自動變畫圖片
var index = 0;
setInterval("change()", 2000);
function change() {

    var imgs = document.getElementsByClassName("smallPic");
    var bigImg = document.getElementById("bigPic");

    index++;
    if (index == imgs.length) index = 0;

    bigImg.setAttribute("src", imgs[index].getAttribute("src"));
}


// footer 展開
$(document).ready(function() {
    $("#btnn").click(function() {
        $("#footer").slideToggle("slow");
        $("html,body").animate({ scrollTop: 5000 }, 500);
    });
});
