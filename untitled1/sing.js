window.onload = function () {
    const lineUpMusic = document.getElementById('lineUpMusic');
    lineUpMusic.style.width = lineUpMusic.childElementCount * 500 + "px";

    let index = 1051321560 + lineUpMusic.childElementCount;

    document.getElementById('button_prev').addEventListener('click', function () {
        --index;
        console.log(index);
        lineUpMusic.style.transform = "translateX(" + (index % lineUpMusic.childElementCount * -500) + "px)";
    });
    document.getElementById('button_next').addEventListener('click', function () {
        ++index;
        console.log(index);
        lineUpMusic.style.transform = "translateX(" + (index % lineUpMusic.childElementCount * -500) + "px)";
    });
}