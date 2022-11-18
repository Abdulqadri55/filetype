const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu =document.querySelector(".save-as select"),
saveBtn =document.querySelector(".save-btn");

selectMenu.addEventListener('change',() =>{
    let selectedOption =selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save as ${selectedOption.split(' ')[0]} File`;
    console.log(selectedOption.split(' ')[0]);
});

saveBtn.addEventListener('click', () =>{
    const blob = new Blob([textarea.value], {type:selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link =document.createElement("a");
    link.download =fileNameInput.value;
    link.href = fileUrl;
    link.click();
})
