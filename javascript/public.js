/**
 * Created by Administrator on 2017/4/14.
 */
/**
 * Created by Administrator on 2017/4/13.
 */
$(function(){
    $.get("header.html", function (data) {
        $(".page-header").html(data);
    });
    $.get("footer.html", function (data) {
        $(".footerE").html(data);
    });
    $.get("../se-header.html", function (data) {
        $(".page-header").html(data);
    });
    $.get("../se-footer.html", function (data) {
        $(".footerE").html(data);
    });
    $.get("../../th-header.html", function (data) {
        $(".page-header").html(data);
    });
    $.get("../../th-footer.html", function (data) {
        $(".footerE").html(data);
    });

   /* $.get("help-banner.html", function (data) {
        $(".doc-banner").html(data);
    });

    $.get("../help-banner.html", function (data) {
        $(".doc-banner").html(data);
    });

    $.get("../../product/help-banner.html", function (data) {
        $(".doc-banner").html(data);
    });

    $.get("standard-banner.html", function (data) {
        $(".doc-banner").html(data);
    });

    $.get("../se-standard-banner.html", function (data) {
        $(".doc-banner").html(data);
    });*/

    $.get("sesb-menu.html",function(data){
        $("#help-menu-box-sesb").html(data);
    });
    
    $.get("cloud-menu.html",function(data){
        $("#help-menu-box-cloud").html(data);
    });
    

    $.get("esb-menu.html",function(data){
        $("#help-menu-box-esb").html(data);
    });    

    $.get("wsp-menu.html",function(data){
        $("#help-menu-box-wsp").html(data);
    });

    $.get("paas-menu.html",function(data){
        $("#help-menu-box-paas").html(data);
    });

      $.get("tip.html",function(data){
     $(".ban").html(data)
     });

     $.get("../tip.html",function(data){
     $(".ban").html(data)
     });

     $.get("../../tip.html",function(data){
     $(".ban").html(data)
     });

});


$(document).ready(function(){

    $('.forbid').mouseover(function(){
        $('#tip').show();
    });

    $('.forbid').mousemove(function(e){
        var sT=$(document).scrollTop();
        var top = e.pageY-sT;
        var left = e.pageX-50;
        $('#tip').css({
            'top' : top + 'px',
            'left': left+ 'px'
        });
    });

    $('.forbid').mouseout(function(){
        $('#tip').hide();
    });

});

$(function(){
    var str="";
    str += "<div id='goTo'>";
    str+="<em></em>";
    str+="</div>";
    $(".page-header").before(str);
});

$(window).scroll(function () {

    var curH =window.screen.availHeight;
    var curT = $(document).scrollTop();
    if (curT > curH) {
        $("#goTo").css("display", "block");
    } else {
        $("#goTo").css("display", "none");
    }

});

$("#goTo").click("on", function () {
    var curT = $(document).scrollTop();
    curT = $(document).scrollTop(0);
});



$(".offset").on("mouseover",function(){
    $(this).addClass("disabledB");
    $(this).text("暂不可用");
});
$(".offset").on("mouseout",function(){
    $(this).removeClass("disabledB");
    $(this).text("点击进入");
});


/*all  product*/
/*$("#J_menu").click("on",function(){
    alert("sd");
    // $(this).toggleClass("action");
    // event.stopPropagation();
    $.get("../product-all.html",function(data){
        $("#J_menu_product_all").html(data);
    });
});
$("body").click("on",function(event){
    $("#J_menu").removeClass("action");
});*/








<!--— Piwik —-->

var _paq = _paq || [];
// tracker methods like "setCustomDimension" should be called before "trackPageView"
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//dev.clic:8080/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '5']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

<!--— End Piwik Code —-->
