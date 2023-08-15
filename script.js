let numOfDice = 0;
function rollDice() {
    console.log("number of dice: " + numOfDice);
    let total = 0;
        for (let i = 0; i < numOfDice; i++) { 
            let sides = document.getElementById("side" + (i+1)).value;
            if (sides<1) {
                sides = -1;
            } 
            let roll = Math.floor(Math.random() * (sides) + 1);
            total += roll;
            document.getElementById("output" + (i+1)).innerHTML = roll;
        }
    console.log(total);
    document.getElementById("total").innerHTML = total;
}

function addDice() {
    numOfDice++;
    let div;
    let node;
    // Create Div
    div = document.createElement("div");
    div.setAttribute('class', 'dice');
    div.setAttribute('id', 'dice' + numOfDice);

    // Create Text Node
    node = document.createTextNode("Dice " + numOfDice +  " number of Sides: ")
    div.appendChild(node);


    // Create Number of Sides input
    node = document.createElement("input");
    node.setAttribute('type', 'number');
    node.setAttribute('id', 'side' + numOfDice);
    div.appendChild(node);

    // Create Text Node
    node = document.createTextNode("Roll: ")
    div.appendChild(node);

    // Create output
    node = document.createElement("span");
    node.setAttribute('id', 'output' + numOfDice);
    div.appendChild(node);


    // Append Div to container
    const element = document.getElementById("diceContainer");
    element.appendChild(div);
};

function removeDice() {
    let dice = document.getElementById('dice' + numOfDice);
    dice.remove()
    numOfDice--;
}