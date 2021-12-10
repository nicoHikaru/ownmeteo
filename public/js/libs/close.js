export function close() {
    let close = document.getElementById('close');
    let duration = "0.5s";
    close.addEventListener('click', ()=> {
        let body = document.getElementById('body');
        let head = document.getElementById("head");
        // let current_condition_contenair = document.getElementById("current_condition_contenair");
        let detailCurrentConditionHome = document.getElementById("detailCurrentConditionHome");
        let navigation = document.getElementById("navigation");
        let contenairListeTodayTmp = document.getElementById("contenairListeTodayTmp");

        head.style.transitionDuration = duration;
        head.style.opacity = "1";

        // current_condition_contenair.style.transitionDuration = duration;
        // current_condition_contenair.style.opacity = "1";

        detailCurrentConditionHome.style.transitionDuration = duration;
        detailCurrentConditionHome.style.opacity= "1";

        navigation.style.transitionDuration = duration;
        navigation.style.opacity= "1";

        body.style.transitionDuration = duration;
        body.style.left = "-100%";

        contenairListeTodayTmp.style.transitionDuration = duration;
        contenairListeTodayTmp.style.opacity = "1";
    });
}