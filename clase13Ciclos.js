function aleatorio(min, max) {//funcion que me da numeros entre el1 y 4 sin incluir el cuatro aleatorio
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugador) {//la eleccion que tuvo cortana o el player
    let ustedEligio = ""
    if (jugador == 1)
        ustedEligio = "piedra🥌"
    else if (jugador == 2)
        ustedEligio = "papel🧻"
    else if (jugador == 3)
        ustedEligio = "tijera👯"
    else
        ustedEligio = "eres 🏳‍🌈"

    return ustedEligio
}


//variables de los jugadores
let player = 0
let cortana = 0
let victoria = 0
let derrota = 0
//batalla y cilo de derrotas o victorias
while (victoria < 3 && derrota < 3) {

    cortana = aleatorio(1, 3)
    player = prompt("Seleccione: 1.piedra🥌 2.papel🧻 3.tijera👯")


    alert("tu elijes: " + eleccion(player))
    alert("Cortna elije: " + eleccion(cortana))

    if (player == cortana) {
        alert("EMPATE🤝")

    }
    else if (player == 1 && cortana == 3) {
        alert("GANASTE🤴")
        victoria = victoria + 1
    }
    else if (player == 2 && cortana == 1) {
        alert("GANO👩‍💻")
        victoria = victoria + 1
    }
    else if (player == 3 && cortana == 2) {
        alert("GANO💻")
        victoria = victoria + 1
    }
    else {
        alert("PERDISTE❌")
        derrota = derrota + 1
    }

}
if(victoria<3 ){
    alert(" Perdiste tres veces fin del juego")
}
else{
    alert(" Ganaste tres veces fin del juego")
}