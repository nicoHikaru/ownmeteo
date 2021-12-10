export function todayAnimation() {
    let todayA = document.getElementById("nextDay");
    let duration = "0.5s";
    todayA.addEventListener('click',() => {

        let body = document.getElementById("body");
        let head = document.getElementById("head");
        //let current_condition_contenair = document.getElementById("current_condition_contenair");
        let detailCurrentConditionHome = document.getElementById("detailCurrentConditionHome");
        let navigation = document.getElementById("navigation");
        let contenairListeTodayTmp = document.getElementById("contenairListeTodayTmp");

        head.style.transitionDuration = "1s";
        head.style.opacity = "0";

        // current_condition_contenair.style.transitionDuration = duration;
        // current_condition_contenair.style.opacity= "0";
        detailCurrentConditionHome.style.transitionDuration = duration;
        detailCurrentConditionHome.style.opacity= "0";

        navigation.style.transitionDuration = duration;
        navigation.style.opacity= "0";

        body.style.transitionDuration = duration;
        body.style.left = "0";

        contenairListeTodayTmp.style.transitionDuration = duration;
        contenairListeTodayTmp.style.opacity = "0";
    });
}