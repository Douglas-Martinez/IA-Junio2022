function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states){
    var location = states[0];
    
    // Ver estados y break
    verifyStates()		
    
    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";		
    setTimeout(function(){ test(states); }, 1500);

    if (totalStates.length == 0) {
        document.getElementById("log").innerHTML+="<br>Todos los estados visitados";
        return;
    };
    
    // Ensuciar habitaciones
    var rand = Math.floor(Math.random() * 101);
    console.log("Random: " + rand);

    if (rand >= 79 && rand < 86) { // Ensuciar A
        states[1] = "DIRTY";
        console.log("Ensuciar A");
    } else if (rand >= 86 && rand < 93) { // Ensuaciar B        
        states[2] = "DIRTY"; 
        console.log("Ensuciar B");
    } else if (rand >= 93) { // Ensuciar Ambos
        states[1] = "DIRTY";
        states[2] = "DIRTY";
        console.log("Ensuciar Ambos");
    }    
}

function verifyStates() {
    console.log("Estados faltantes: " + totalStates.length + " | Verificando estado: ");
    console.log(states);
    if (states[0] == "A" && states[1] == "DIRTY" && states[2] == "DIRTY") totalStates.splice(0,1)
    else if (states[0] == "A" && states[1] == "DIRTY" && states[2] == "CLEAN") totalStates.splice(1,1)
    else if (states[0] == "A" && states[1] == "CLEAN" && states[2] == "DIRTY") totalStates.splice(2,1)
    else if (states[0] == "A" && states[1] == "CLEAN" && states[2] == "CLEAN") totalStates.splice(3,1)
    else if (states[0] == "B" && states[1] == "DIRTY" && states[2] == "DIRTY") totalStates.splice(4,1)
    else if (states[0] == "B" && states[1] == "DIRTY" && states[2] == "CLEAN") totalStates.splice(5,1)
    else if (states[0] == "B" && states[1] == "CLEAN" && states[2] == "DIRTY") totalStates.splice(6,1)
    else if (states[0] == "B" && states[1] == "CLEAN" && states[2] == "CLEAN") totalStates.splice(7,1)
    console.log(totalStates[0])
    
}

var states = ["A","DIRTY","DIRTY"];
var totalStates = [
    ["A","DIRTY","DIRTY"],["A","DIRTY","CLEAN"],["A","CLEAN","DIRTY"],["A","CLEAN","CLEAN"],
    ["B","DIRTY","DIRTY"],["B","DIRTY","CLEAN"],["B","CLEAN","DIRTY"],["B","CLEAN","CLEAN"]
];
test(states);