//console.info("hola")
module.exports = Sheldon;




function Sheldon(tiradaDelPlayer1, tiradaDelPlayer2){
    if ((tiradaDelPlayer1== "tijeras") && tiradaDelPlayer2 != "Spock") {
        return "Gana " + tiradaDelPlayer1
    }

    else if ((tiradaDelPlayer1=="papel") && tiradaDelPlayer2 != "tijeras" || "lagarto"){
        return "Gana " + tiradaDelPlayer1
    }
    else if ((tiradaDelPlayer1=="lagarto") && tiradaDelPlayer2 !="tijeras"){
        return "Gana " + tiradaDelPlayer1
    }
    else if ((tiradaDelPlayer1=="Spock") && tiradaDelPlayer2 !="papel" || "lagarto"){
        return "Gana " + tiradaDelPlayer1
    }
    else {
        return "Gana " + tiradaDelPlayer2
    }
}