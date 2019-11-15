window.onload = function () {
    const lineUpMusic = document.getElementById('lineUpMusic');
    lineUpMusic.style.width = lineUpMusic.childElementCount * 500 + "px";

    let index = 1051321560 + lineUpMusic.childElementCount;

    document.getElementById('buttonPrev').addEventListener('click', function () {
        --index;
        console.log(index);
        lineUpMusic.style.transform = "translateX(" + (index % lineUpMusic.childElementCount * -500) + "px)";
    });
    document.getElementById('buttonNext').addEventListener('click', function () {
        ++index;
        console.log(index);
        lineUpMusic.style.transform = "translateX(" + (index % lineUpMusic.childElementCount * -500) + "px)";
    });
}