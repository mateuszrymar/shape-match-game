// let currentScore = 0;
// let is similar to var, but are block-scoped (can be accessed outside of functions they were created in). Example:
// if(currentScore < 5) {
    //     let currentScore = 10;
    //     console.log(currentScore + ' inside');
    // }
    // console.log(currentScore + ' outside');
    
let currentScore = 0;
let playing = false;
let shape1;
let shape2;
const matchBtn = document.getElementById('match');

const shapes = [
    {color: '#FF595E', width: 250, height: 160},
    {color: '#FF595E', width: 270, height: 150},
    {color: '#FFCA3A', width: 320, height: 170},
    {color: '#FFCA3A', width: 310, height: 180},
    {color: '#8AC926', width: 190, height: 160},
    {color: '#8AC926', width: 200, height: 175},
    {color: '#1982C4', width: 380, height: 185},
    {color: '#1982C4', width: 400, height: 120},
    {color: '#6A4C93', width: 370, height: 145},
    {color: '#6A4C93', width: 440, height: 160},
]

const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    const randomSelection = shapes[randomNum];
    return randomSelection;
}

const repeatRandomShape = () => {
    setInterval(() => {

        matchBtn.disabled = false;
        shape1 = selectRandomShape();
        shape2 = selectRandomShape();

        const shape1Styles = `width:${shape1.width + 'px'};
                              background:${shape1.color};
                              height:${shape1.height + 'px'};`

        const shape2Styles = `width:${shape2.width + 'px'};
                              background:${shape2.color};
                              height:${shape2.height + 'px'};`

        document.getElementById('shape1').style.cssText = shape1Styles;
        document.getElementById('shape2').style.cssText = shape2Styles;

    }, 1000);  
};

// Start game
document.getElementById('play').onclick = () => {
    playing = true;

    // Disable play button while playing
    document.getElementById('play').disabled = true;
    repeatRandomShape();
};

// Compare
document.getElementById('match').onclick = () => {

    if (playing) {
        matchBtn.disabled = true;
        if(Object.is(shape1, shape2)) {
            currentScore++;
            document.getElementById('score').innerHTML = currentScore;
        } else {
            currentScore--;
            document.getElementById('score').innerHTML = currentScore;
        }
    }
}

// var name = `Mateuszdiushfliuhsdliufghkysdgkfjgds,jbflsdughf
// kdsfgkjdsgfkdsgfkusgyfukysgdfkusgy`;
// console.log(`Hello  ${name}`);
