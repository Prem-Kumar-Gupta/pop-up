const subBtn = document.querySelector(".subBtnBox");
const okBtn = document.querySelector(".btnOk");
const cardCont = document.querySelector(".cardCont");

// cardCont.classList.add(`topInc`);

subBtn.addEventListener("click", function () {
  cardCont.classList.add("topInc");
});
okBtn.addEventListener("click",function(){
    cardCont.classList.remove("topInc")
})
