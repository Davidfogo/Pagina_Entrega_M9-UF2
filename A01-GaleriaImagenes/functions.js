let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

function openImg(ref){
    fullImgBox.style.display = "flex";
    fullImg.src = ref;
}

function closeImg(){
    fullImgBox.style.display = "none";
}