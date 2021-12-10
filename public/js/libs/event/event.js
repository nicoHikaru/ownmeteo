export function eventList() {
    let tmp1 = document.getElementById('tmp1');
    let tmp2 = document.getElementById('tmp2');
    let tmp3 = document.getElementById('tmp3');
    let tmp4 = document.getElementById('tmp4');

    let detailTmp1 = document.getElementById("detailTmp1");
    let detailTmp2 = document.getElementById("detailTmp2");
    let detailTmp3 = document.getElementById("detailTmp3");
    let detailTmp4 = document.getElementById("detailTmp4");

    tmp1.addEventListener('click',()=> {
        detailTmp1.style.display = "flex";
        detailTmp1.style.transitionDuration = "1s";

        detailTmp2.style.display = "none";
        detailTmp2.style.transitionDuration = "1s";
        detailTmp3.style.display = "none";
        detailTmp3.style.transitionDuration = "1s";
        detailTmp4.style.display = "none";
        detailTmp4.style.transitionDuration = "1s";
        
        tmp1.style.border = "1px solid rgb(238, 238, 238)";
        tmp1.style.transitionDuration = "1s";
        
        tmp2.style.border = "0";
        tmp2.style.transitionDuration = "1s";

        tmp3.style.border = "0";
        tmp3.style.transitionDuration = "1s";

        tmp4.style.border = "0";
        tmp4.style.transitionDuration = "1s";
    });
    tmp2.addEventListener('click',()=> {
        detailTmp1.style.display = "none";
        detailTmp1.style.transitionDuration = "1s";

        detailTmp2.style.display = "flex";
        detailTmp2.style.transitionDuration = "1s";
        detailTmp3.style.display = "none";
        detailTmp3.style.transitionDuration = "1s";
        detailTmp4.style.display = "none";
        detailTmp4.style.transitionDuration = "1s";

        tmp1.style.border = "0";
        tmp1.style.transitionDuration = "1s";
        
        tmp2.style.border = "1px solid rgb(238, 238, 238)";
        tmp2.style.transitionDuration = "1s";

        tmp3.style.border = "0";
        tmp3.style.transitionDuration = "1s";

        tmp4.style.border = "0";
        tmp4.style.transitionDuration = "1s";
    });

    tmp3.addEventListener('click',()=> {
        detailTmp1.style.display = "none";
        detailTmp1.style.transitionDuration = "1s";
        detailTmp2.style.display = "none";
        detailTmp2.style.transitionDuration = "1s";
        detailTmp3.style.display = "flex";
        detailTmp3.style.transitionDuration = "1s";
        detailTmp4.style.display = "none";
        detailTmp4.style.transitionDuration = "1s";
        
        tmp1.style.border = "0";
        tmp1.style.transitionDuration = "1s";
        
        tmp2.style.border = "0";
        tmp2.style.transitionDuration = "1s";

        tmp3.style.border = "1px solid rgb(238, 238, 238";
        tmp3.style.transitionDuration = "1s";

        tmp4.style.border = "0";
        tmp4.style.transitionDuration = "1s";
    });

    tmp4.addEventListener('click',()=> {
        detailTmp1.style.display = "none";
        detailTmp1.style.transitionDuration = "1s";
        detailTmp2.style.display = "none";
        detailTmp2.style.transitionDuration = "1s";
        detailTmp3.style.display = "none";
        detailTmp3.style.transitionDuration = "1s";
        detailTmp4.style.display = "flex";
        detailTmp4.style.transitionDuration = "1s";
        
        tmp1.style.border = "0";
        tmp1.style.transitionDuration = "1s";
        
        tmp2.style.border = "0";
        tmp2.style.transitionDuration = "1s";

        tmp3.style.border = "0";
        tmp3.style.transitionDuration = "1s";

        tmp4.style.border = "1px solid rgb(238, 238, 238)";
        tmp4.style.transitionDuration = "1s";
    });

}