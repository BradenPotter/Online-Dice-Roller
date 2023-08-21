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
            // total += (roll + document.getElementById("addition" + (i+1)).value);
            addition = document.getElementById("addition" + (i+1)).value;
            total += Number(roll) + Number(addition);
            rollTotal = Number(roll) + Number(addition);
            document.getElementById("output" + (i+1)).innerHTML = roll + " + " + addition;
        }
    console.log(total);
    if (total < 1) {
        total = 1;
    }
    document.getElementById("total").innerHTML = "Total: " + total;
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
    node = document.createTextNode("Sides: ")
    div.appendChild(node);

    // Create Number of Sides input
    node = document.createElement("input");
    node.setAttribute('type', 'number');
    node.setAttribute('min', '1');
    node.setAttribute('value', '1');
    node.setAttribute('id', 'side' + numOfDice);
    div.appendChild(node);

    // Create Text Node
    node = document.createTextNode(" + ");
    div.appendChild(node);

    // Create Number of Addition input
    node = document.createElement("input");
    node.setAttribute('type', 'number');
    node.setAttribute('value', '0');
    node.setAttribute('id', 'addition' + numOfDice);
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

var current = "light";
var r = document.querySelector(':root');
function darkMode() {
    if (current === "light") {
        r.style.setProperty('--headerfootercolor', '#071217');
        r.style.setProperty('--backgroundcolor', '#121a1f');
        r.style.setProperty('--text', '#f2f2f2');
        document.getElementById("themeChanger").src = "/Images/Sun.png";
        current = "dark";
        console.log("something");
        } else {
        r.style.setProperty('--headerfootercolor', '#263740');
        r.style.setProperty('--backgroundcolor', '#f2f2f2');
        r.style.setProperty('--text', 'black');
        document.getElementById("themeChanger").src = "/Images/Moon.png"
        current = "light";
        console.log("else");
        };
}