
const root = document.querySelector("#root")
const scriptInsert = document.querySelector("#script")
const comments = ["I will ace it no matter what!!", "Seems easy but quite disappinting if failed..."]
const selectedImg = document.querySelector("#img-number")
const ranArray = ["img1.jpg","img2.jpg","img3.jpg"]


const renderMain = () => {
    const div = document.createElement("div")
    div.className = "instruction"
    const h1 = document.createElement("h1")
    h1.innerText = "I Will Puzzle You!!"
    const ol = document.createElement("ol")

    for(let i=0; i<2; i++){
        const li = document.createElement("li");
        li.className = `${i}`;
        li.innerText = comments[i];
        const btn = document.createElement("button")
        btn.innerText = "Give this a challenge!"
        btn.value = `${i}`
        btn.className = "btn-square"
        btn.addEventListener("click", (e)=> {
            selectImg(btn)
        })
        li.insertAdjacentElement("beforeend", btn)
        ol.append(li)
    }    
    div.append(h1,ol)
    root.appendChild(div)
};

renderMain()

const selectImg = (btn) => {
    if (btn.value === "1") {
        selectedImg.src =  "img/img4.jpg"
        // selectedImg.className = "jqPuzzle"
        console.log(selectedImg.src)
        
        } else {
        ranSelectedImg = ranArray[Math.floor(Math.random()*ranArray.length )]
        selectedImg.src = `img/${ranSelectedImg}`
        // selectedImg.className = "jqPuzzle"
        console.log(selectedImg.src)
    }
    renderPuzzle()
}

const renderPuzzle = () =>{
    root.innerHTML = ""
    const scr = document.createElement("script")
    scr.type = "text/javascript"
    scr.src = "src/jquery.jqpuzzle.min.js"
    scriptInsert.appendChild(scr)
    const h1 = document.createElement("h1")
    h1.innerText = "ENJOY!!"
    root.appendChild(h1)

    ///////////// To Go back to Main\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    // const btn2 = document.createElement("button")
    // btn2.innerText = "Back to Main Page"
    // btn2.className = "btn-square"
    // btn2.addEventListener("click", (e)=> {
    //     rerenderMain()
    // })
    // root.appendChild(btn2)
}

// const rerenderMain = () => {
//         root.innerHTML = ""
//         // debugger
//         scriptInsert.removeChild(scriptInsert.lastChild)
//         const removeElem = document.querySelector('.jqPuzzle'); //生成された<div class="jqPuzzle"/>をがっさり削除
//         removeElem.parentNode.removeChild(removeElem);//生成された<div class="jqPuzzle"/>をがっさり削除
// 　　　　　root.insertAdjacentHTML("afterend",`<img id="img" class="jqPuzzle" alt="Puzzle Image Will Be Poped up" />` )//消えてしまうのでこれはたし戻す
//         renderMain()
// }