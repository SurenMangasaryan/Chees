let cheesBorders = document.querySelector(".chees-borders");

for (let i = 0; i < cheesBorders.children.length; i++) {
    cheesBorders.children[i].style.color = 'rgba(0, 146, 114, 0.644)';
    cheesBorders.children[i].style.textTransform = 'uppercase';
}

(function Chees() {
    let chessBoard = document.querySelector(".chees-board");
    let steps = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (steps % 2 == 0) {
                chessBoard.innerHTML += `<div class="chees-blocks burlywood-block"></div>`;
            }
            else{
                chessBoard.innerHTML += `<div class="chees-blocks black-blocks"></div>`;
            }
            steps++;
        }
        steps++;
    }
})()

