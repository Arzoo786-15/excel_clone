let allAlignmentOptions=document.querySelectorAll(".align-cell-content span");
let leftAlign=allAlignmentOptions[0];
let centerAlign=allAlignmentOptions[1];
let rightAlign=allAlignmentOptions[2];
leftAlign.addEventListener("click",function(){
if(lastCell){
    lastCell.style.textAlign="left";
    let address=lastCell.getAttribute("data-address");
    dataObj[address].align="left";
}
})
centerAlign.addEventListener("click",function(){
    if(lastCell){
        lastCell.style.textAlign="center";
        let address=lastCell.getAttribute("data-address");
        dataObj[address].align="center";
    } 
})
rightAlign.addEventListener("click",function(){
    if(lastCell){
        lastCell.style.textAlign="right";
        let address=lastCell.getAttribute("data-address");
        dataObj[address].align="right";
    } 
})
let allFormatOptions=document.querySelectorAll(".bold-italics-underline span");
let bold=allFormatOptions[0];
let italic=allFormatOptions[1];
let underline=allFormatOptions[2];
bold.addEventListener("click",function(){
    if(lastCell){
        lastCell.style.fontWeight="bolder";
        let address=lastCell.getAttribute("data-address");
        dataObj[address].format="bold";
    }
})
italic.addEventListener("click",function(){
    if(lastCell){
        lastCell.style.fontStyle="italic";
        let address=lastCell.getAttribute("data-address");
        dataObj[address].format="italic";
    }
})
underline.addEventListener("click",function(){
    if(lastCell){
        lastCell.style.textDecoration="underline";
        let address=lastCell.getAttribute("data-address");
        dataObj[address].format="underline";
    }
})

let body=document.querySelector("body");
let allColorOptions = document.querySelectorAll(".cell-color-options span");
let bgColorPicker=allColorOptions[0];
let fontColorPicker=allColorOptions[1];
bgColorPicker.addEventListener("click", function () {
    let colorPickerElement = document.createElement("input");
    colorPickerElement.type = "color";
    body.append(colorPickerElement);
    colorPickerElement.click();
  
    colorPickerElement.addEventListener("input", function (e) {
      console.log(e.currentTarget.value);
      if (lastCell) {
        lastCell.style.backgroundColor = e.currentTarget.value;
        let address = lastCell.getAttribute("data-address");
        dataObj[address].bgColor = e.currentTarget.value;
      }
    });
  });
  
  
  fontColorPicker.addEventListener("click", function () {
      let colorPickerElement = document.createElement("input");
      colorPickerElement.type = "color";
      body.append(colorPickerElement);
      colorPickerElement.click();
    
      colorPickerElement.addEventListener("input", function (e) {
        console.log(e.currentTarget.value);
        if (lastCell) {
          lastCell.style.color = e.currentTarget.value;
          let address = lastCell.getAttribute("data-address");
          dataObj[address].color = e.currentTarget.value;
        }
      });
    });
    let menuBarOptions=document.querySelectorAll(".menu-bar-section div")
    let fileOptions=menuBarOptions[0];

    fileOptions.addEventListener("click",function(){
        
        let dropDown=document.createElement("div");
        dropDown.innerHTML="<p>Save</p><p>Clear</p>"
        dropDown.classList.add("file-drop-down")
        fileOptions.append(dropDown);
    })