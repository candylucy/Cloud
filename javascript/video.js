/**
 * Created by SUMMER on 2017/9/26.
 */
window.onload = function () {
    var bro_op = document.getElementById("bro-op");
    var bro_section_list = document.getElementById("bro-section-list");
    bro_op.onclick = function () {
        if (bro_section_list.style.right == "0px"){
            bro_section_list.style.right = "-300px";
            console.log("1+"+bro_section_list.style.right);
        } else {
            bro_section_list.style.right = "0px";
            console.log("2+"+bro_section_list.style.right);

        }
        console.log("3+"+bro_section_list.style.right);
    }
}