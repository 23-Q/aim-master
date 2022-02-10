//---------------------------------십자선 설정------------------------------------
const optionCorssConsole = warp.querySelector(".option-corss");
//length
crossOptionLength = optionCorssConsole.querySelector(".option-length"),
crossOptionLengthMinus = crossOptionLength.querySelector(".btn-option-minus"),
crossOptionLengthPlus = crossOptionLength.querySelector(".btn-option-plus"),
inputCrossOptionLength = crossOptionLength.querySelector(".input-option"),
//between
crossOptionBetween = optionCorssConsole.querySelector(".option-between"),
crossOptionBetweenMinus = crossOptionBetween.querySelector(".btn-option-minus"),
crossOptionBetweenPlus = crossOptionBetween.querySelector(".btn-option-plus"),
inputCrossOptionBetween = crossOptionBetween.querySelector(".input-option"),
//border
crossOptionBorder = optionCorssConsole.querySelector(".option-border"),
crossOptionBorderMinus = crossOptionBorder.querySelector(".btn-option-minus"),
crossOptionBorderPlus = crossOptionBorder.querySelector(".btn-option-plus"),
inputCrossOptionBorder = crossOptionBorder.querySelector(".input-option"),
//opacity
crossOptionOpacity = optionCorssConsole.querySelector(".option-opacity"),
crossOptionOpacityMinus = crossOptionOpacity.querySelector(".btn-option-minus"),
crossOptionOpacityPlus = crossOptionOpacity.querySelector(".btn-option-plus"),
inputCrossOptionOpacity = crossOptionOpacity.querySelector(".input-option"),
//color
crossColor1 = optionCorssConsole.querySelector(".btn-color1"),
crossColor2 = optionCorssConsole.querySelector(".btn-color2"),
crossColor3 = optionCorssConsole.querySelector(".btn-color3"),
crossColor4 = optionCorssConsole.querySelector(".btn-color4"),
crossColor5 = optionCorssConsole.querySelector(".btn-color5"),
crossColorR = optionCorssConsole.querySelector("#input-R"),
crossColorG = optionCorssConsole.querySelector("#input-G"),
crossColorB = optionCorssConsole.querySelector("#input-B"),

btnCorssReset = optionCorssConsole.querySelector(".btn-corss-reset")

crossOptionLengthMinus.addEventListener("click",()=>{ minusClick( inputCrossOptionLength )});
crossOptionLengthPlus.addEventListener("click",()=>{plusClick( inputCrossOptionLength )});
inputCrossOptionLength.addEventListener("input", lengthInput);

crossOptionBetweenMinus.addEventListener("click",()=>{minusClick( inputCrossOptionBetween )});
crossOptionBetweenPlus.addEventListener("click",()=>{plusClick( inputCrossOptionBetween )});
inputCrossOptionBetween.addEventListener("input", betweenInput);

crossOptionBorderMinus.addEventListener("click",()=>{minusClick( inputCrossOptionBorder )});
crossOptionBorderPlus.addEventListener("click",()=>{plusClick( inputCrossOptionBorder )});
inputCrossOptionBorder.addEventListener("input", borderInput);

crossOptionOpacityMinus.addEventListener("click",()=>{minusClick( inputCrossOptionOpacity )});
crossOptionOpacityPlus.addEventListener("click",()=>{plusClick( inputCrossOptionOpacity )});
inputCrossOptionOpacity.addEventListener("input", opacityInput);

crossColor1.addEventListener("click",()=>{BtnCrossColor(0, 255, 0)});
crossColor2.addEventListener("click",()=>{BtnCrossColor(0, 255, 255)});
crossColor3.addEventListener("click",()=>{BtnCrossColor(255, 0, 255)});
crossColor4.addEventListener("click",()=>{BtnCrossColor(255, 0, 0)});
crossColor5.addEventListener("click",()=>{BtnCrossColor(255, 255, 0)});

crossColorR.addEventListener("input", rInput);
crossColorG.addEventListener("input", gInput);
crossColorB.addEventListener("input", bInput);

btnCorssReset.addEventListener("click", ()=>{reset()});

//버튼 + -
function minusClick(e){
  e.value--;
  crossChangeClick();
  inputNumberLimit();
};
function plusClick(e){
  e.value++;
  crossChangeClick();
  inputNumberLimit();
};

//인풋 선택해서 변경
//length
function lengthInput(e){
  inputNumberLimit();
  crossTop.style.top = '-' + e.target.value + 'px';
  crossTop.style.height = '' +  e.target.value + 'px';
  crossRight.style.right = '-' +  e.target.value + 'px';
  crossRight.style.width = '' +  e.target.value + 'px';
  crossBottom.style.bottom = '-' +  e.target.value + 'px';
  crossBottom.style.height = '' +  e.target.value + 'px';
  crossLeft.style.left = '-' +  e.target.value + 'px';
  crossLeft.style.width = '' +  e.target.value + 'px';
};
//between
function betweenInput(e){
  inputNumberLimit();
  crossHiarCross.style.width = '' + (e.target.value * 2) + 'px';
  crossHiarCross.style.height = '' + (e.target.value * 2) + 'px';
};
//border
function borderInput(e){
  inputNumberLimit();
  crossTop.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (e.target.value * 0.1) + ')';
  crossRight.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (e.target.value * 0.1) + ')';
  crossBottom.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (e.target.value * 0.1) + ')';
  crossLeft.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (e.target.value * 0.1) + ')';
};
//opacity
function opacityInput(e){
  inputNumberLimit();
  crossHiarCross.style.opacity = '' + (e.target.value * 0.1) + '';
};

//색상변경버튼
function BtnCrossColor(a,b,c){
  crossColorR.value = a;
  crossColorG.value = b;
  crossColorB.value = c;
  let R = crossColorR.value;
  let G = crossColorG.value;
  let B = crossColorB.value;
  crossTop.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossRight.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossBottom.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossLeft.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};
//색상변경인풋
function rInput(e){
  inputNumberLimit();
  let R = e.target.value;
  let G = crossColorG.value;
  let B = crossColorB.value;
  crossTop.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossRight.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossBottom.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossLeft.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};
function gInput(e){
  inputNumberLimit();
  let R = crossColorR.value;
  let G = e.target.value;
  let B = crossColorB.value;
  crossTop.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossRight.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossBottom.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossLeft.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};
function bInput(e){
  inputNumberLimit();
  let R = crossColorR.value;
  let G = crossColorG.value;
  let B = e.target.value;
  crossTop.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossRight.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossBottom.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
  crossLeft.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};

//----------------십자선
const crossHiarCross = document.getElementById("cross"),
crossTop = crossHiarCross.querySelector(".top"),
crossRight = crossHiarCross.querySelector(".right"),
crossBottom = crossHiarCross.querySelector(".bottom"),
crossLeft = crossHiarCross.querySelector(".left")

function crossChangeClick(){
  //length
  crossTop.style.top = '-' + inputCrossOptionLength.value + 'px';
  crossTop.style.height = '' + inputCrossOptionLength.value + 'px';
  crossRight.style.right = '-' + inputCrossOptionLength.value + 'px';
  crossRight.style.width = '' + inputCrossOptionLength.value + 'px';
  crossBottom.style.bottom = '-' + inputCrossOptionLength.value + 'px';
  crossBottom.style.height = '' + inputCrossOptionLength.value + 'px';
  crossLeft.style.left = '-' + inputCrossOptionLength.value + 'px';
  crossLeft.style.width = '' + inputCrossOptionLength.value + 'px';
  //between
  crossHiarCross.style.width = '' + (inputCrossOptionBetween.value * 2) + 'px';
  crossHiarCross.style.height = '' + (inputCrossOptionBetween.value * 2) + 'px';
  //border
  crossTop.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (inputCrossOptionBorder.value * 0.1) + ')';
  crossRight.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (inputCrossOptionBorder.value * 0.1) + ')';
  crossBottom.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (inputCrossOptionBorder.value * 0.1) + ')';
  crossLeft.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (inputCrossOptionBorder.value * 0.1) + ')';
  //opacity
  crossHiarCross.style.opacity = '' + (inputCrossOptionOpacity.value * 0.1) + '';
};

//숫자 제한
function inputNumberLimit(){
  //length
  if(inputCrossOptionLength.value <= -1){inputCrossOptionLength.value = 0};
  if(inputCrossOptionLength.value >= 31){inputCrossOptionLength.value = 30};
  //between
  if(inputCrossOptionBetween.value <= -1){inputCrossOptionBetween.value = 0};
  if(inputCrossOptionBetween.value >= 31){inputCrossOptionBetween.value = 30};
  //border
  if(inputCrossOptionBorder.value <= -1){inputCrossOptionBorder.value = 0};
  if(inputCrossOptionBorder.value >= 11){inputCrossOptionBorder.value = 10};
  //opacity
  if(inputCrossOptionOpacity.value <= -1){inputCrossOptionOpacity.value = 0};
  if(inputCrossOptionOpacity.value >= 11){inputCrossOptionOpacity.value = 10};
  //color
  if(crossColorR.value <= -1){crossColorR.value = 0};
  if(crossColorR.value >= 256){crossColorR.value = 255};
  if(crossColorG.value <= -1){crossColorG.value = 0};
  if(crossColorG.value >= 256){crossColorG.value = 255};
  if(crossColorB.value <= -1){crossColorB.value = 0};
  if(crossColorB.value >= 256){crossColorB.value = 255};
};

function reset(){
  BtnCrossColor(0, 255, 0);
  inputCrossOptionLength.value = 10;
  inputCrossOptionBetween.value = 3;
  inputCrossOptionBorder.value = 10;
  inputCrossOptionOpacity.value = 10;
  crossChangeClick();
};
