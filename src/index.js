
const root = document.querySelector("#root")
const scriptInsert = document.querySelector("#script")
const comments = ["I will ace it no matter what!!", "Seems easy but quite disappinting if failed..."]
const selectedImg = document.querySelector("#img")


const renderHello = () => {
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
        btn.addEventListener("click", (e)=> {
            selectImg(btn)
        })
        li.insertAdjacentElement("beforeend", btn)
        ol.append(li)
    }    
    div.append(h1,ol)
    root.appendChild(div)
};

renderHello()

// const selectImg = (btn) => {
//     if (btn.value === "1") {
//         scriptInsert.innerHTML =  `<img class="img jqPuzzle" src="img/img4.jpg" alt="Puzzle Image"/>
//         <script type="text/javascript" src="src/jquery.jqpuzzle.min.js"></script>`
//     } else {
//         scriptInsert.innerHTML =  `<img class="img jqPuzzle" src="img/img1.jpg" alt="Puzzle Image"/>
//         <script type="text/javascript" src="src/jquery.jqpuzzle.min.js"></script>`
//     }
// }


const selectImg = (btn) => {
    if (btn.value === "1") {
        console.log("check")
        selectedImg.src =  ""
        scriptInsert.src = ""
    　　 console.log(selectedImg.src)
        console.log(scriptInsert.src)
        selectedImg.src =  "img/img4.jpg"
        scriptInsert.src = "src/jquery.jqpuzzle.min.js"
        console.log(selectedImg.src)
        console.log(scriptInsert.src)
    } else {
        console.log("check")
        selectedImg.src =  ""
        scriptInsert.src = ""
        console.log(selectedImg.src)
        console.log(scriptInsert.src)
        selectedImg.src =  "img/img1.jpg"
        scriptInsert.src = "src/jquery.jqpuzzle.min.js"
        console.log(selectedImg.src)
        console.log(scriptInsert.src)

    }
}

// const selectImg = (btn) => {
//     if (btn.value === "1") {
//         console.log("check")
//         selectedImg.src =  ""
//         let d = `<script type="text/javascript" src="src/jquery.jqpuzzle.min.js"></script>`
//     　　 console.log(selectedImg.src)
//         console.log(scriptInsert.src)
//         selectedImg.src =  "img/img4.jpg"
//         scriptInsert.appendChild(d)
//         console.log(selectedImg.src)
//         console.log(scriptInsert)
//     } else {
//         console.log("check")
//         selectedImg.src =  ""
//         let d = `<script type="text/javascript" src="src/jquery.jqpuzzle.min.js"></script>`
//     　　 console.log(selectedImg.src)
//         console.log(scriptInsert.src)
//         selectedImg.src =  "img/img1.jpg"
//         scriptInsert.appendChild(d)
//         console.log(selectedImg.src)
//         console.log(scriptInsert)

//     }
// }


