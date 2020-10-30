const menuBtn = document.getElementById("jsMenuBtn");
const navigationArea = document.getElementById("jsNavigationArea");
const fixedContainer = document.getElementById("jsFixedContainer");
const mainContents = document.getElementById("jsMainContents");

const activateElement = () => {
    menuBtn.classList.add("active");
    navigationArea.classList.add("active");
    fixedContainer.classList.add("active");
    mainContents.classList.add("active")
}

const deactivateElement = () => {
    menuBtn.classList.remove("active");
    navigationArea.classList.remove("active");
    fixedContainer.classList.remove("active");
    mainContents.classList.remove("active");
}

const menuBtnClick = () => {
    if(menuBtn.classList.contains("active")){
        deactivateElement(); 
    }else{
        activateElement(); 
    }
}

const dropDownInit = () => {
    menuBtn.addEventListener("click", menuBtnClick);
}

if(menuBtn) {
    dropDownInit();
}