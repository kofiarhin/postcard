const center = document.querySelector(".center")
const editor = document.querySelector(".editor")
const changeBg = document.querySelector("#background-color")
const fontSize = document.querySelector("#change-font-size")
const bold = document.querySelector(".bold")
const fontColor = document.querySelector("#change-font-color")
const fontType = document.querySelector("#select-font-type")
const colorsWrapper = document.querySelector(".colors-wrapper")
const preview = document.querySelector(".preview");
const close = document.querySelector(".close")
const save = document.querySelectorAll(".save")
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const editorContent = document.querySelector(".editor-content")
let overlay = getElement('.overlay');





// get image
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
            editorContent.appendChild(img);
        },
        false
    );

    if (file) {
        console.log("s");
        reader.readAsDataURL(file);
    }
}


// clear storage
function clearStorage() {

    localStorage.clear('postCard')

}

// close modal
function closeModal() {

    document.querySelector(".modal").classList.remove("active");
    overlay.classList.remove("active");
}

// show modal
function showModal() {

    document.querySelector(".modal").classList.add("active");

    console.log(overlay)
    overlay.classList.add("active")
}


// get element
function getElement(name) {

    return document.querySelector(`${name}`);
}
// localStorage.clear();



// check if there is template
let data = localStorage.getItem("postCard")

if (data && data.length > 0) {

    editor.innerHTML = data;
}


// close modal
close.addEventListener("click", function () {
    // modal.classList.remove("active");

    let element = getElement(".modal-content");
    element.innerHTML = "";
    closeModal()
});



//save content
save.forEach(item => {

    item.addEventListener("click", function () {

        let content = editor.innerHTML;
        let modalContent = getElement(".modalContent");
        // save item to local storage
        localStorage.setItem("postCard", content, false);

    })
})

// preview design

preview.addEventListener("click", function () {


    const content = getElement('.editor').innerHTML;
    const modalContent = getElement(".modal-content")

    modalContent.innerHTML = content;

    showModal();


})



// change background color
colorsWrapper.addEventListener("click", function (event) {

    let color = event.target.id;

    console.log(color)
    let editorContent = document.querySelector(".editor-content");

    if (color.length > 0) {
        editorContent.style.backgroundColor = color;
        console.log("pass ")

    }
})

fontType.addEventListener("change", function () {

    console.log(this.value)

    document.execCommand("fontName", false, this.value)

    // font-family: 'Open Sans', sans-serif
})




// change font color
fontColor.addEventListener("change", function () {

    const color = this.value;

    console.log(color)

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


// center text
center.addEventListener("click", function () {

    document.execCommand("justifyCenter", false, "")
})