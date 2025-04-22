// dynamically changing text content and style

document.getElementById("primary-btn").addEventListener("click", () =>{
    const text = document.getElementById("text");
    text.textContent = "update in style successful!"
    text.style.color = "rgb(147, 103, 8)"
    text.style.fontSize = "24px";
    text.style.padding = "16px";
    text.style.borderRadius = "24px";
});


// add new item dynamically
document.getElementById("add-btn").addEventListener("click", () =>{
    const newItem = document.createElement("p");
    newItem.textContent = "Added New Item";
    newItem.style.margin = "12px 0";
    document.getElementById("input-area").appendChild("newItem");
});


// removing the last item
document.getElementById("remove-btn").addEventListener("click", () => {
    const inputArea = document.getElementById("input-area");
    if (inputArea.lastChild){
        inputArea.removeChild(inputArea.lastChild);
    }
});