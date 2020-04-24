const center = document.querySelector(".center")
const editor = document.querySelector(".editor")
const changeBg = document.querySelector("#background-color")
const fontSize = document.querySelector("#change-font-size")
const bold = document.querySelector(".bold")
const fontColor = document.querySelector("#change-font-color")
const fontType = document.querySelector("#select-font-type")



function getImage() {
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
    let dataURI;

    reader.addEventListener(
        "load",
        function () {
            dataURI = reader.result;
            const img = document.createElement("img");
            img.src = dataURI;
            img.classList.add("dragable")
            editor.appendChild(img);
        },
        false
    );

    if (file) {
        console.log("s");
        reader.readAsDataURL(file);
    }
}


editor.addEventListener("mouseover", function (event) {


})

fontType.addEventListener("change", function () {

    console.log(this.value)

    document.execCommand("fontName", false, this.value)

    // font-family: 'Open Sans', sans-serif
})




// change font color
fontColor.addEventListener("change", function () {

    const color = this.value;

    document.execCommand("foreColor", false, color)
})

// bold a text
bold.addEventListener("click", function () {

    document.execCommand("bold", false, "");

    console.log(editor.innerHTML)

})
// change font size of text

fontSize.addEventListener("change", function () {

    const value = parseInt(this.value);

    document.execCommand("fontSize", false, value)
})

// change background color
changeBg.addEventListener("change", function () {

    // get color
    const color = this.value;
    // change  background color of editor
    editor.style.backgroundColor = color;
})


// center text
center.addEventListener("click", function () {

    document.execCommand("justifyCenter", false, "")
})