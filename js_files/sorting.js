function sorting() {
    let array = new Array(100);

    for(let i=0; i<100; i++){
        array[i] = Math.floor(Math.random() * 100)+1;
    }

    for(let i=0; i<100; i++){
        let barDiv = document.createElement("div");
        barDiv.classList.add("barStyle");
        barDiv.style.height = array[i] * 5 + "px";
        document.getElementById("bars").appendChild(barDiv);
    }    
}

sorting();
