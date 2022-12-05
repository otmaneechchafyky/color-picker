const colorCode = document.getElementById('hexColor');
const btn = document.getElementById('btn');

const hex = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
"D", "E", "F"];

btn.addEventListener('click', function(){

    let vrb = "#";
    for ( let i = 0; i < 6; i++){
        vrb += hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.backgroundColor = vrb;
    colorCode.textContent = vrb;
    colorCode.style.color = vrb;
})