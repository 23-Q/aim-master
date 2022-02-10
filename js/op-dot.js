//-------------------------------------점설정------------------------------------------------
const optionDotConsole = warp.querySelector(".option-dot"),
//size
dotOptionSize = optionDotConsole.querySelector(".option-size"),
dotOptionSizeMinus = dotOptionSize.querySelector(".btn-option-minus"),
dotOptionSizePlus = dotOptionSize.querySelector(".btn-option-plus"),
inputDotOptionSize = dotOptionSize.querySelector(".input-option"),
//border
dotOptionBorder = optionDotConsole.querySelector(".option-border"),
dotOptionBorderMinus = dotOptionBorder.querySelector(".btn-option-minus"),
dotOptionBorderPlus = dotOptionBorder.querySelector(".btn-option-plus"),
inputDotOptionBorder = dotOptionBorder.querySelector(".input-option"),
//opacity
dotOptionOpacity = optionDotConsole.querySelector(".option-opacity"),
dotOptionOpacityMinus = dotOptionOpacity.querySelector(".btn-option-minus"),
dotOptionOpacityPlus = dotOptionOpacity.querySelector(".btn-option-plus"),
inputDotOptionOpacity = dotOptionOpacity.querySelector(".input-option")
//color
dotColor1 = optionDotConsole.querySelector(".btn-color1"),
dotColor2 = optionDotConsole.querySelector(".btn-color2"),
dotColor3 = optionDotConsole.querySelector(".btn-color3"),
dotColor4 = optionDotConsole.querySelector(".btn-color4"),
dotColor5 = optionDotConsole.querySelector(".btn-color5"),
dotColorR = optionDotConsole.querySelector("#input-R"),
dotColorG = optionDotConsole.querySelector("#input-G"),
dotColorB = optionDotConsole.querySelector("#input-B"),

btnDotReset = optionDotConsole.querySelector(".btn-dot-reset")

dotOptionSizeMinus.addEventListener("click",()=>{dotMinusClick( inputDotOptionSize )});
dotOptionSizePlus.addEventListener("click",()=>{dotPlusClick( inputDotOptionSize )});
inputDotOptionSize.addEventListener("input", sizeInput);

dotOptionBorderMinus.addEventListener("click",()=>{dotMinusClick( inputDotOptionBorder )});
dotOptionBorderPlus.addEventListener("click",()=>{dotPlusClick( inputDotOptionBorder )});
inputDotOptionBorder.addEventListener("input", borderInputDot);

dotOptionOpacityMinus.addEventListener("click",()=>{dotMinusClick( inputDotOptionOpacity )});
dotOptionOpacityPlus.addEventListener("click",()=>{dotPlusClick( inputDotOptionOpacity )});
inputDotOptionOpacity.addEventListener("input", opacityInputDot);

dotColor1.addEventListener("click",()=>{BtnDotColor(0, 255, 0)});
dotColor2.addEventListener("click",()=>{BtnDotColor(0, 255, 255)});
dotColor3.addEventListener("click",()=>{BtnDotColor(255, 0, 255)});
dotColor4.addEventListener("click",()=>{BtnDotColor(255, 0, 0)});
dotColor5.addEventListener("click",()=>{BtnDotColor(255, 255, 0)});
dotColorR.addEventListener("input", rInputD);
dotColorG.addEventListener("input", gInputD);
dotColorB.addEventListener("input", bInputD);

btnDotReset.addEventListener("click",()=>{resetDot()});

//버튼 + -
function dotMinusClick(e){
  e.value--;
  dotChangeClick()
  inputDotNumberLimit();
};
function dotPlusClick(e){
  e.value++;
  dotChangeClick()
  inputDotNumberLimit();
};

//인풋 선택해서 변경
//size
function sizeInput(e){
  inputDotNumberLimit();
  crossHiarDot.style.width = '' + e.target.value + 'px';
  crossHiarDot.style.height = '' + e.target.value + 'px';
};
//border
function borderInputDot(e){
  inputDotNumberLimit();
  crossHiarDot.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (e.target.value * 0.1) + ')';
};
//opacity
function opacityInputDot(e){
  inputDotNumberLimit();
  crossHiarDot.style.opacity = '' + (e.target.value * 0.1) + '';
};

//색상변경버튼
function BtnDotColor(a,b,c){
  dotColorR.value = a;
  dotColorG.value = b;
  dotColorB.value = c;
  let R = dotColorR.value;
  let G = dotColorG.value;
  let B = dotColorB.value;
  crossHiarDot.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};
//색상변경인풋
function rInputD(e){
  inputDotNumberLimit();
  let R = e.target.value;
  let G = dotColorG.value;
  let B = dotColorB.value;
  crossHiarDot.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};
function gInputD(e){
  inputDotNumberLimit();
  let R = dotColorR.value;
  let G = e.target.value;
  let B = dotColorB.value;
  crossHiarDot.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};
function bInputD(e){
  inputDotNumberLimit();
  let R = dotColorR.value;
  let G = dotColorG.value;
  let B = e.target.value;
  crossHiarDot.style.background = 'rgba(' + R + ',' + G + ',' + B + ',1)';
};

const crossHiarDot = document.getElementById("dot");

function dotChangeClick(){
  crossHiarDot.style.width = '' + inputDotOptionSize.value + 'px';
  crossHiarDot.style.height = '' + inputDotOptionSize.value + 'px';
  crossHiarDot.style.boxShadow = '0px 0px 0px 1px rgba(0, 0, 0, ' + (inputDotOptionBorder.value * 0.1) + ')';
  crossHiarDot.style.opacity = '' + (inputDotOptionOpacity.value * 0.1) + '';
};

//숫자 제한
function inputDotNumberLimit(){
  //size
  if(inputDotOptionSize.value <= -1){inputDotOptionSize.value = 0};
  if(inputDotOptionSize.value >= 31){inputDotOptionSize.value = 30};
  //border
  if(inputDotOptionBorder.value <= -1){inputDotOptionBorder.value = 0};
  if(inputDotOptionBorder.value >= 11){inputDotOptionBorder.value = 10};
  //opacity
  if(inputDotOptionOpacity.value <= -1){inputDotOptionOpacity.value = 0};
  if(inputDotOptionOpacity.value >= 11){inputDotOptionOpacity.value = 10};
  //color
  if(dotColorR.value <= -1){dotColorR.value = 0};
  if(dotColorR.value >= 256){dotColorR.value = 255};
  if(dotColorG.value <= -1){dotColorG.value = 0};
  if(dotColorG.value >= 256){dotColorG.value = 255};
  if(dotColorB.value <= -1){dotColorB.value = 0};
  if(dotColorB.value >= 256){dotColorB.value = 255};
};

function resetDot(){
  BtnDotColor(0, 255, 0);
  inputDotOptionSize.value = 6;
  inputDotOptionBorder.value = 10;
  inputDotOptionOpacity.value = 10;
  dotChangeClick();
};