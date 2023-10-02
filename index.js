/* AL FINAL, LAS ULTIMAS CARTAS, HACER QUE LA MAQUINA ELIJA LA CARTA DISPONIBLE - RANDOM Y COMPARAR */

const p1Carta1 = document.getElementById("p1-carta1");
const p1Carta2 = document.getElementById("p1-carta2");
const p1Carta3 = document.getElementById("p1-carta3");
const p2Carta1 = document.getElementById("p2-carta1");
const p2Carta2 = document.getElementById("p2-carta2");
const p2Carta3 = document.getElementById("p2-carta3");
const p1Puntos = document.getElementById("p1-puntos");
const p2Puntos = document.getElementById("p2-puntos");
const mainMenu = document.getElementById("main-menu");
const primeraCarta = document.getElementById("primera-carta");
const segundaCarta = document.getElementById("segunda-carta");

const game = document.getElementById("game");

game.hidden = true;
const paqueteCentro = document.getElementById("paquete-centro");
const cartaVida = document.getElementById("vida-centro");
const bigAlert = document.getElementById("big-alert");
bigAlert.addEventListener("click", () => {
    window.location.reload();
})
let deltaTime = 0;
let Wait = 0;
const ultimaCarta = 47;
console.log(ultimaCarta)
const print = console.log;


mainMenu.addEventListener("click", () => {
    mainMenu.hidden = true;
    game.hidden = false;
})


p2Carta1.src = "./assets/detras-b.gif";
p2Carta2.src = "./assets/detras-b.gif";
p2Carta3.src = "./assets/detras-b.gif";
///test comit
// CREATE CARDS
const cartas = [
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_1.gif", back: "./assets/detras-b.gif", numero: 1, valor: 11 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_2.gif", back: "./assets/detras-b.gif", numero: 2, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_3.gif", back: "./assets/detras-b.gif", numero: 3, valor: 10 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_4.gif", back: "./assets/detras-b.gif", numero: 4, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_5.gif", back: "./assets/detras-b.gif", numero: 5, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_6.gif", back: "./assets/detras-b.gif", numero: 6, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_7.gif", back: "./assets/detras-b.gif", numero: 7, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_8.gif", back: "./assets/detras-b.gif", numero: 8, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_9.gif", back: "./assets/detras-b.gif", numero: 9, valor: 0 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_10.gif", back: "./assets/detras-b.gif", numero: 10, valor: 2 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_11.gif", back: "./assets/detras-b.gif", numero: 11, valor: 3 },
    { tipo: "oro", back: "./assets/detras-b.gif", imgSource: "./assets/oro_12.gif", back: "./assets/detras-b.gif", numero: 12, valor: 4 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_1.gif", back: "./assets/detras-b.gif", numero: 1, valor: 11 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_2.gif", back: "./assets/detras-b.gif", numero: 2, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_3.gif", back: "./assets/detras-b.gif", numero: 3, valor: 10 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_4.gif", back: "./assets/detras-b.gif", numero: 4, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_5.gif", back: "./assets/detras-b.gif", numero: 5, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_6.gif", back: "./assets/detras-b.gif", numero: 6, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_7.gif", back: "./assets/detras-b.gif", numero: 7, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_8.gif", back: "./assets/detras-b.gif", numero: 8, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_9.gif", back: "./assets/detras-b.gif", numero: 9, valor: 0 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_10.gif", back: "./assets/detras-b.gif", numero: 10, valor: 2 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_11.gif", back: "./assets/detras-b.gif", numero: 11, valor: 3 },
    { tipo: "basto", back: "./assets/detras-b.gif", imgSource: "./assets/basto_12.gif", back: "./assets/detras-b.gif", numero: 12, valor: 4 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_1.gif", back: "./assets/detras-b.gif", numero: 1, valor: 11 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_2.gif", back: "./assets/detras-b.gif", numero: 2, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_3.gif", back: "./assets/detras-b.gif", numero: 3, valor: 10 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_4.gif", back: "./assets/detras-b.gif", numero: 4, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_5.gif", back: "./assets/detras-b.gif", numero: 5, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_6.gif", back: "./assets/detras-b.gif", numero: 6, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_7.gif", back: "./assets/detras-b.gif", numero: 7, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_8.gif", back: "./assets/detras-b.gif", numero: 8, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_9.gif", back: "./assets/detras-b.gif", numero: 9, valor: 0 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_10.gif", back: "./assets/detras-b.gif", numero: 10, valor: 2 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_11.gif", back: "./assets/detras-b.gif", numero: 11, valor: 3 },
    { tipo: "copa", back: "./assets/detras-b.gif", imgSource: "./assets/copa_12.gif", back: "./assets/detras-b.gif", numero: 12, valor: 4 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_1.gif", back: "./assets/detras-b.gif", numero: 1, valor: 11 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_2.gif", back: "./assets/detras-b.gif", numero: 2, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_3.gif", back: "./assets/detras-b.gif", numero: 3, valor: 10 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_4.gif", back: "./assets/detras-b.gif", numero: 4, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_5.gif", back: "./assets/detras-b.gif", numero: 5, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_6.gif", back: "./assets/detras-b.gif", numero: 6, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_7.gif", back: "./assets/detras-b.gif", numero: 7, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_8.gif", back: "./assets/detras-b.gif", numero: 8, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_9.gif", back: "./assets/detras-b.gif", numero: 9, valor: 0 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_10.gif", back: "./assets/detras-b.gif", numero: 10, valor: 2 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_11.gif", back: "./assets/detras-b.gif", numero: 11, valor: 3 },
    { tipo: "espada", back: "./assets/detras-b.gif", imgSource: "./assets/espada_12.gif", back: "./assets/detras-b.gif", numero: 12, valor: 4 }
];
const empty = { tipo: "oro", imgSource: "./assets/empty.gif", numero: 0, valor: -1, back: "./assets/empty.gif" };


const p1 = {
    nombre: "p1",
    cartas: [],
    paquete: [],
    total: 0,
    puedeSeleccionar: false,
    tiroPrimero: false,
    turno: false,
    selecciona: (d) => {

        if (Wait < 1) {
            Wait += 0.8 * d
            console.log("selecciona: " + Wait)
        } else {
            if (p1Carta1.style.opacity != 0 && p1Carta2.style.opacity != 0 && p1Carta3.style.opacity != 0)
                p1.puedeSeleccionar = true;

        }

        p1Carta1.onclick = () => {
            if (p1.turno === true && p1.puedeSeleccionar && p1.cartas[0].valor != -1) {

                //si no se ha tirado primera carta
                if (!eventos.primeraCartaPuesta) {
                    eventos.cartasSeleccionadas[0] = p1.cartas[0];
                    primeraCarta.src = eventos.cartasSeleccionadas[0].imgSource;

                    eventos.primeraCartaPuesta = true;
                    p1.tiroPrimero = true;
                    p2.turno = true;
                    p1.cartas[0] = undefined;
                } else {
                    eventos.cartasSeleccionadas[1] = p1.cartas[0];
                    segundaCarta.src = eventos.cartasSeleccionadas[1].imgSource;
                    //    console.log(p1.cartas[2])
                }
                p1Carta1.style.opacity = 0;
                p1.turno = false;
                p1.puedeSeleccionar = false;
                Wait = 0;
            }
        }
        p1Carta2.onclick = () => {
            if (p1.turno === true && p1.puedeSeleccionar && p1.cartas[1].valor != -1) {
                //si no se ha tirado primera carta
                if (!eventos.primeraCartaPuesta) {
                    eventos.cartasSeleccionadas[0] = p1.cartas[1];
                    primeraCarta.src = eventos.cartasSeleccionadas[0].imgSource;

                    eventos.primeraCartaPuesta = true;
                    p1.tiroPrimero = true;
                    p2.turno = true;
                } else {
                    eventos.cartasSeleccionadas[1] = p1.cartas[1];
                    segundaCarta.src = eventos.cartasSeleccionadas[1].imgSource;
                    //   console.log(p1.cartas[2])
                }
                p1Carta2.style.opacity = 0;
                p1.turno = false;
                p1.puedeSeleccionar = false;
                Wait = 0;
            }
        }
        p1Carta3.onclick = () => {
            if (p1.turno === true && p1.puedeSeleccionar && p1.cartas[2].valor != -1) {
                //si no se ha tirado primera carta
                if (!eventos.primeraCartaPuesta) {
                    eventos.cartasSeleccionadas[0] = p1.cartas[2];
                   primeraCarta.src = eventos.cartasSeleccionadas[0].imgSource;

                    eventos.primeraCartaPuesta = true;
                    p1.tiroPrimero = true;
                    p2.turno = true;
                } else {
                    eventos.cartasSeleccionadas[1] = p1.cartas[2];
                   segundaCarta.src = eventos.cartasSeleccionadas[1].imgSource;
                    //   console.log(p1.cartas[2])
                }
                p1Carta3.style.opacity = 0;
                p1.turno = false;
                p1.puedeSeleccionar = false;
                Wait = 0;
            }
        }
    }
};


const p2 = {
    nombre: "p2",
    cartas: [],
    paquete: [],
    total: -0,
    puedeSeleccionar: false,
    turno: false,
    selecciona: (d) => {
        let RandomNum = Math.floor(Math.random() * 3)
        if (Wait < 0.5) {
            Wait += 0.5 * d
           console.log(Wait) 
        } else {
            if (p2.turno === true) {

                if (Wait < 1) {
                    Wait += 0.5 * d
                    console.log(Wait) 
                } else {
                    p2.puedeSeleccionar = true;
                    console.log(Wait) 
                   
                }

                while (p2.cartas[RandomNum].valor != -1) {

                    const randomNum = RandomNum;
                    if (p2.puedeSeleccionar) {
                        if (!eventos.primeraCartaPuesta) {
                            //si es la primera
                            eventos.cartasSeleccionadas[0] = p2.cartas[randomNum];
                            //    console.log(p2.cartas[randomNum])
                            primeraCarta.src = eventos.cartasSeleccionadas[0].imgSource;
                            eventos.primeraCartaPuesta = true;
                            p2.tiroPrimero = true;
                            p1.turno = true;
                        } else {
                            //si es la segunda
                            //  console.log(p2.cartas[randomNum])
                            eventos.cartasSeleccionadas[1] = p2.cartas[randomNum];
                            segundaCarta.src = eventos.cartasSeleccionadas[1].imgSource;

                        }
                        // pone la carta seleccionada como invisible
                        document.getElementById(`p2-carta${randomNum + 1}`).style.opacity = 0;
                        //termina su turno
                        p2.turno = false;
                        p2.puedeSeleccionar = false;
                        Wait = 0;
                    }
                    // console.log(p1.turno + p2.turno)
                   // Wait = 0;
                    return
                }
            }
        }


    }
};
//----------------

//JUEGO
const eventos = {
    cartaInicial: 6,
    siguienteCarta: 5,
    vida: 47,
    cartasSeleccionadas: new Array(2).fill(0),
    repartirCartas: () => {
        //repartir cartas
        p1.cartas = [cartas[0], cartas[2], cartas[4]];
        p2.cartas = [cartas[1], cartas[3], cartas[5]];
        console.log(p1.cartas);
        console.log(p2.cartas);
    },
    reparteCarta: () => {
        // reparte carta f
        eventos.cartasSeleccionadas[0] = 0;
        eventos.cartasSeleccionadas[1] = 0;


        eventos.siguienteCarta += 1;

        if (p1.turno === true) {
            if (p1Carta1.style.opacity != 1) {
                if (eventos.siguienteCarta < ultimaCarta - 1) {
                    p1.cartas[0] = cartas[eventos.siguienteCarta]
                    //p1Carta1.style.opacity = 1;
                } else {
                    //si ya estan en la ultima carta para repartir
                    if (eventos.siguienteCarta === ultimaCarta - 1) {
                        // paquete centro
                        paqueteCentro.style.opacity = 0;
                        p1.cartas[0] = cartas[eventos.siguienteCarta];
                    }
                    if (eventos.siguienteCarta > ultimaCarta) {
                        paqueteCentro.style.opacity = 0;
                        p1.cartas[0] = empty;
                    }
                }
            };
            if (p1Carta2.style.opacity != 1) {
                if (eventos.siguienteCarta < ultimaCarta - 1) {
                    p1.cartas[1] = cartas[eventos.siguienteCarta]
                    //p1Carta2.style.opacity = 1;
                } else {
                    //si ya estan en la ultima carta para repartir
                    if (eventos.siguienteCarta === ultimaCarta - 1) {
                        paqueteCentro.style.opacity = 0;
                        p1.cartas[1] = cartas[eventos.siguienteCarta]
                    } else {
                        //empty card
                        paqueteCentro.style.opacity = 0;
                        p1.cartas[1] = empty;
                    }
                }
            }
            if (p1Carta3.style.opacity != 1) {
                if (eventos.siguienteCarta < ultimaCarta - 1) {
                    p1.cartas[2] = cartas[eventos.siguienteCarta]
                    //p1Carta3.style.opacity = 1;
                } else {
                    //si ya estan en la ultima carta para repartir
                    if (eventos.siguienteCarta === ultimaCarta - 1) {
                        paqueteCentro.style.opacity = 0;
                        p1.cartas[2] = cartas[eventos.siguienteCarta]
                    } else {
                        //empty card
                        p1.cartas[2] = empty;
                    }
                }
            }
            eventos.siguienteCarta += 1;

            if (p2Carta1.style.opacity != 1) {
                if (eventos.siguienteCarta < ultimaCarta) {
                    p2.cartas[0] = cartas[eventos.siguienteCarta]
                    // p2Carta1.style.opacity = 1;
                } else {
                    //si ya estan en la ultima carta para repartir
                    if (eventos.siguienteCarta === ultimaCarta) {
                        // paquete centro

                        //  ****   CARTA VIDA OPACITY A 0
                        cartaVida.style.opacity = 0;
                        paqueteCentro.style.opacity = 0;
                        p2.cartas[0] = cartas[eventos.vida];
                    }
                    if (eventos.siguienteCarta > ultimaCarta) {
                        paqueteCentro.style.opacity = 0;
                        p2.cartas[0] = empty;
                    }
                }
            }
            if (p2Carta2.style.opacity != 1) {
                if (eventos.siguienteCarta < ultimaCarta) {
                    p2.cartas[1] = cartas[eventos.siguienteCarta]
                    //  p2Carta2.style.opacity = 1;
                } else {
                    //si ya estan en la ultima carta para repartir
                    if (eventos.siguienteCarta === ultimaCarta) {
                        // paquete centro

                        //  ****   CARTA VIDA OPACITY A 0
                        cartaVida.style.opacity = 0;
                        p2.cartas[1] = cartas[eventos.vida];
                    }
                    if (eventos.siguienteCarta > ultimaCarta) {
                        paqueteCentro.style.opacity = 0;
                        p2.cartas[1] = empty;

                    }
                }
            }
            if (p2Carta3.style.opacity != 1) {
                if (eventos.siguienteCarta < ultimaCarta) {
                    p2.cartas[2] = cartas[eventos.siguienteCarta]
                    //  p2Carta3.style.opacity = 1;
                } else {
                    //si ya estan en la ultima carta para repartir
                    if (eventos.siguienteCarta === ultimaCarta) {
                        // paquete centro

                        //  ****   CARTA VIDA OPACITY A 0
                        cartaVida.style.opacity = 0;
                        p2.cartas[2] = cartas[eventos.vida];
                    }
                    if (eventos.siguienteCarta > ultimaCarta) {
                        paqueteCentro.style.opacity = 0;
                        p2.cartas[2] = empty;

                    }
                }
            }

        } else {
            if (p2.turno === true) {
                if (p2Carta1.style.opacity != 1) {
                    if (eventos.siguienteCarta < ultimaCarta - 1) {
                        p2.cartas[0] = cartas[eventos.siguienteCarta]
                        //p1Carta1.style.opacity = 1;
                    } else {
                        //si ya estan en la ultima carta para repartir
                        if (eventos.siguienteCarta === ultimaCarta - 1) {
                            // paquete centro
                            paqueteCentro.style.opacity = 0;
                            p2.cartas[0] = cartas[eventos.siguienteCarta];
                        } else {
                            //empty card
                            paqueteCentro.style.opacity = 0;
                            p2.cartas[0] = empty;
                        }
                    }
                };
                if (p2Carta2.style.opacity != 1) {
                    if (eventos.siguienteCarta < ultimaCarta - 1) {
                        p2.cartas[1] = cartas[eventos.siguienteCarta]
                        //p1Carta1.style.opacity = 1;
                    } else {
                        //si ya estan en la ultima carta para repartir
                        if (eventos.siguienteCarta === ultimaCarta - 1) {
                            // paquete centro
                            paqueteCentro.style.opacity = 0;
                            p2.cartas[1] = cartas[eventos.siguienteCarta];
                        } else {
                            //empty card
                            paqueteCentro.style.opacity = 0;
                            p2.cartas[1] = empty;
                        }
                    }
                };
                if (p2Carta3.style.opacity != 1) {
                    if (eventos.siguienteCarta < ultimaCarta - 1) {
                        p2.cartas[2] = cartas[eventos.siguienteCarta]
                        //p1Carta1.style.opacity = 1;
                    } else {
                        //si ya estan en la ultima carta para repartir
                        if (eventos.siguienteCarta === ultimaCarta - 1) {
                            // paquete centro
                            paqueteCentro.style.opacity = 0;
                            p2.cartas[2] = cartas[eventos.siguienteCarta];
                        } else {
                            //empty card
                            paqueteCentro.style.opacity = 0;
                            p2.cartas[2] = empty;
                        }
                    }
                };

                eventos.siguienteCarta += 1;


                if (p1Carta1.style.opacity != 1) {
                    if (eventos.siguienteCarta < ultimaCarta) {
                        p1.cartas[0] = cartas[eventos.siguienteCarta]
                        // p2Carta1.style.opacity = 1;
                    } else {
                        //si ya estan en la ultima carta para repartir
                        if (eventos.siguienteCarta === ultimaCarta) {
                            // paquete centro

                            //  ****   CARTA VIDA OPACITY A 0
                            cartaVida.style.opacity = 0;
                            p1.cartas[0] = cartas[eventos.vida];
                        } else {
                            //empty card
                            paqueteCentro.style.opacity = 0;
                            p1.cartas[0] = empty;
                        }
                    }
                }
                if (p1Carta2.style.opacity != 1) {
                    if (eventos.siguienteCarta < ultimaCarta) {
                        p1.cartas[1] = cartas[eventos.siguienteCarta]
                        // p2Carta1.style.opacity = 1;
                    } else {
                        //si ya estan en la ultima carta para repartir
                        if (eventos.siguienteCarta === ultimaCarta) {
                            // paquete centro

                            //  ****   CARTA VIDA OPACITY A 0
                            cartaVida.style.opacity = 0;
                            p1.cartas[1] = cartas[eventos.vida];
                        } else {
                            //empty card
                            paqueteCentro.style.opacity = 0;
                            p1.cartas[1] = empty;
                        }
                    }
                }
                if (p1Carta3.style.opacity != 1) {
                    if (eventos.siguienteCarta < ultimaCarta) {
                        p1.cartas[2] = cartas[eventos.siguienteCarta]
                        // p2Carta1.style.opacity = 1;
                    } else {
                        //si ya estan en la ultima carta para repartir
                        if (eventos.siguienteCarta === ultimaCarta) {
                            // paquete centro

                            //  ****   CARTA VIDA OPACITY A 0
                            cartaVida.style.opacity = 0;
                            p1.cartas[2] = cartas[eventos.vida];
                        } else {
                            //empty card
                            paqueteCentro.style.opacity = 0;
                            p1.cartas[2] = empty;
                        }
                    }
                }
            }

        }

        p1.total = 0;
        p2.total = 0;

        p1.paquete.map(p => {
            p1.total += p.valor
        })
        p2.paquete.map(p => {
            p2.total += p.valor
        })
        p1Puntos.innerText = `P1:${p1.total}`
        p2Puntos.innerText = `P2:${p2.total}`
        console.log("p1 puntos =" + p1.total)
        console.log("p2 puntos =" + p2.total)
        console.log("Turno: " + eventos.siguienteCarta)


        if (eventos.siguienteCarta > 52) {
            p1.total > p2.total ? bigAlert.innerText = "Ganaste!" : bigAlert.innerText = "Haz perdido.<br> Intentemos denuevo!"
            bigAlert.hidden = false;
            setTimeout(() => {
                window.location.reload();
            }, 3000)

        }

        eventos.estado = eventos.update;




    },
    update: () => {
        updateCards();
        eventos.estado = eventos.seleccionar;
    },
    ganoMano: (_jugador) => {

        p1.tiroPrimero = false;
        p2.tiroPrimero = false;
        eventos.primeraCartaPuesta = false;
        
        _jugador.paquete.push(eventos.cartasSeleccionadas[0])
        _jugador.paquete.push(eventos.cartasSeleccionadas[1])
        //console.log(_jugador.paquete)
        //  eventos.cartasSeleccionadas = new Array(2).fill(0);
        _jugador.turno = true;
        //console.log(_jugador.paquete)
        console.log("a repartir")
        eventos.estado = eventos.reparteCarta;
        return;
       
        // return;
    },
    turnoParaP1: () => {
        p1.turno = true;
    },
    turnoParaP2: () => {
        p2.turno = true;
    },
    wait: (_n, _event) => {
        if (Wait < _n) {
            Wait += 0.1
            // console.log(Wait)
        } else {
            eventos.estado = _event
            Wait = 0;
        }
    },
    seleccionar: (d) => {

        // reglas
        if (p1.turno === true) { p1.selecciona(d); }
        if (p2.turno === true) { p2.selecciona(d); }

        if (!p1.turno && !p2.turno) {
            if (Wait < 0.5) {
                Wait += 0.4 * d
            } else {
                eventos.wait(1, eventos.comparar)
                //Wait = 0;

            }
            //
        }
    },
    darCartas(_jugador) {
        _jugador.paquete.push(eventos.cartasSeleccionadas[0])
        _jugador.paquete.push(eventos.cartasSeleccionadas[1])
    },
    comparar: () => {
        // si vida = 
        primeraCarta.src = "";
        segundaCarta.src = "";
        const vida = cartas[eventos.vida];
        const carta = eventos.cartasSeleccionadas;
        const carta1 = carta[0];
        const carta2 = carta[1];
        const carta1EsVida = carta[0].tipo == vida.tipo;
        const carta2EsVida = carta[1].tipo == vida.tipo;
                //SEPARAR FUNCION DE GANAmANO *****
        // si p1 es menor que p2 
        if (carta1EsVida) {
            // si la primera carta puesta es vida y la otra tambien
            if (carta2EsVida) {
                //si primera es menor numero que la segunda
                if (carta1.numero < carta2.numero) {
                    if (carta1.numero != 1 && carta1.numero != 3) {
                        if (p1.tiroPrimero) {
                            console.log("p2 gana cartas")
                            /*  INTENTA CAMBIAR ESTO POR SU PROPIA FUNCION QUE NO COJA ARGUMENTO */
                            eventos.ganoMano(p2);

                        };
                        if (p2.tiroPrimero) {
                            console.log("p1 gana cartas")
                            eventos.ganoMano(p1);
                        }
                    }
                    else {
                        if (carta1.numero === 1 || carta1.numero === 3) {
                            if (p1.tiroPrimero) {
                                console.log("p1 gana cartas")
                                eventos.ganoMano(p1);
                            };
                            if (p2.tiroPrimero) {
                                console.log("p2 gana cartas")
                                eventos.ganoMano(p2);
                            }
                        }
                    }
                }
                //si primera es mayor numero que la segunda
                if (carta1.numero > carta2.numero) {
                    if (carta1.numero === 3) {
                        if (carta2.numero === 1) {
                            if (p1.tiroPrimero) {
                                console.log("p2 gana cartas")
                                eventos.ganoMano(p2);
                            };
                            if (p2.tiroPrimero) {
                                console.log("p1 gana cartas")
                                eventos.ganoMano(p1);
                            }
                        } else {
                            if (p1.tiroPrimero) {
                                console.log("p1 gana cartas")
                                eventos.ganoMano(p1);
                            };
                            if (p2.tiroPrimero) {
                                console.log("p2 gana cartas")
                                eventos.ganoMano(p2);
                            }
                        }
                    }


                    if (carta2.numero != 1 && carta1.numero != 3) {
                        if (p1.tiroPrimero) {
                            console.log("p1 gana cartas")
                            eventos.ganoMano(p1);
                        };
                        if (p2.tiroPrimero) {
                            console.log("p2 gana cartas")
                            eventos.ganoMano(p2);
                        }
                    } else {
                        if (carta2.numero === 1 || carta2.numero === 3) {
                            if (p1.tiroPrimero) {
                                console.log("p2 gana cartas")
                                eventos.ganoMano(p2);
                            };
                            if (p2.tiroPrimero) {
                                console.log("p1 gana cartas")
                                eventos.ganoMano(p1);
                            }
                        }
                    }

                }
            } else {
                if (p1.tiroPrimero) {
                    console.log("p1 gana cartas")
                    eventos.ganoMano(p1);
                };
                if (p2.tiroPrimero) {
                    console.log("p2 gana cartas")
                    eventos.ganoMano(p2);
                }
            }


        } else {
            //no vida 1ra carta
            if (carta2EsVida) {
                // vida 2nda carta
                if (p1.tiroPrimero) {
                    console.log("p2 gana cartas")
                    eventos.ganoMano(p2);
                }
                if (p2.tiroPrimero) {
                    console.log("p1 gana cartas")
                    eventos.ganoMano(p1);
                }
            } else { // no vida 2nda carta
                if (carta2.numero > carta1.numero) {
                    if (carta1.numero != 1 && carta1.numero != 3 && carta2.tipo == carta1.tipo) {
                        if (p1.tiroPrimero) {
                            console.log("p2 gana cartas");
                            eventos.ganoMano(p2);
                        }
                        if (p2.tiroPrimero) {
                            console.log("p1 gana cartas");
                            eventos.ganoMano(p1);
                        }
                    } else {
                        if (carta1.numero === 1 || carta1.numero === 3 && carta2.tipo == carta1.tipo) {
                            if (p1.tiroPrimero) {
                                console.log("p2 gana cartas");
                                eventos.ganoMano(p1);
                            }
                            if (p2.tiroPrimero) {
                                console.log("p1 gana cartas");
                                eventos.ganoMano(p2);
                            }
                        }
                    }
                }
                if (carta1.numero > carta2.numero) {
                    if (carta2.numero != 1 && carta2.numero != 3 && carta2.tipo == carta1.tipo) {
                        if (p1.tiroPrimero) {
                            console.log("p1 gana cartas");
                            eventos.ganoMano(p1);
                        }
                        if (p2.tiroPrimero) {
                            console.log("p2 gana cartas");
                            eventos.ganoMano(p2);
                        }
                    }
                }
                //1 o 3 
                if (carta2.numero === 1 || carta2.numero === 3) {
                    //si no son del mismo que la primera no siendo vida pues gana el primero que tiro
                    if (carta2.tipo != carta1.tipo) {
                        if (p1.tiroPrimero) {
                            console.log("p1 gana cartas");
                            eventos.ganoMano(p1);
                        }
                        if (p2.tiroPrimero) {
                            console.log("p2 gana cartas");
                            eventos.ganoMano(p2);
                        }

                    } else {
                        //si lo es entonces gana el que tiro primero
                        if (carta2.numero === 3) {
                            if (carta1.numero === 1) {
                                if (p1.tiroPrimero) {
                                    console.log("p1 gana caarta");
                                    eventos.ganoMano(p1);
                                }
                                if (p2.tiroPrimero) {
                                    console.log("p2 gana cartas");
                                    eventos.ganoMano(p2);
                                }
                            } else {
                                if (p1.tiroPrimero) {
                                    console.log("p2 gana caarta");
                                    eventos.ganoMano(p2);
                                }
                                if (p2.tiroPrimero) {
                                    console.log("p1 gana cartas");
                                    eventos.ganoMano(p1);
                                }
                            }
                        };
                        if (carta2.numero === 1) {
                            if (p1.tiroPrimero) {
                                console.log("p2 gana caarta");
                                eventos.ganoMano(p2);
                            }
                            if (p2.tiroPrimero) {
                                console.log("p1 gana cartas");
                                eventos.ganoMano(p1);
                            }
                        }
                    }
                };
                if (carta2.numero != 1 && carta2.numero != 3 && carta2.tipo != carta1.tipo) {
                    if (p1.tiroPrimero) {
                        console.log("p1 gana cartas");
                        eventos.ganoMano(p1);
                    };
                    if (p2.tiroPrimero) {
                        console.log("p2 gana cartas");
                        eventos.ganoMano(p2);
                    }
                }
                if (carta1.numero === 3) {
                    if (carta2.numero === 1 && carta2.tipo == carta1.tipo) {
                        if (p1.tiroPrimero) {
                            console.log("p2 gana cartas");
                            eventos.ganoMano(p2);
                        }
                        if (p2.tiroPrimero) {
                            console.log("p1 gana cartas");
                            eventos.ganoMano(p1);
                        }
                    }
                    if (carta2.numero != 1 && carta2.tipo == carta1.tipo) {
                        if (p1.tiroPrimero) {
                            console.log("p1 gana cartas");
                            eventos.ganoMano(p1);
                        }
                        if (p2.tiroPrimero) {
                            console.log("p2 gana cartas");
                            eventos.ganoMano(p2);
                        }
                    }

                }
                if (carta1.numero === 1 && carta2.numero === 3 && carta2.tipo == carta1.tipo) {
                    if (p1.tiroPrimero) {
                        console.log("p1 gana cartas");
                        eventos.ganoMano(p1);
                    }
                    if (p2.tiroPrimero) {
                        console.log("p2 gana cartas");
                        eventos.ganoMano(p2);
                    }
                }
                if (carta1.numero === 1 && carta2.tipo == carta1.tipo) {
                    if (p1.tiroPrimero) {
                        console.log("p1 gana cartas")
                        eventos.ganoMano(p1);
                    }
                    if (p2.tiroPrimero) {
                        console.log("p2 gana cartas")
                        eventos.ganoMano(p2);
                    }
                }

            }
        }

    },
    shuffle: (arr) => {
        //  from the size of the array to zero
        for (let i = arr.length - 1; i > 0; i--) {
            // create random number
            const j = Math.floor(Math.random() * arr.length);
            //console.log(j);
            // current index
            const temp = arr[i];
            // current index becomes random
            arr[i] = arr[j];
            //
            arr[j] = temp; // the actual shift of postion
        }

        return arr;
    },
};

p1.turno = true;
eventos.estado = eventos.seleccionar;

//eventos
eventos.shuffle(cartas);
eventos.shuffle(cartas);
eventos.shuffle(cartas);
print(cartas);
eventos.repartirCartas();

//paquete centro
paqueteCentro.src = "./assets/detras-b.gif";

cartaVida.src = cartas[eventos.vida].imgSource;

function updateCards() {
    //give p1 its cards

    p1Carta1.src = p1.cartas[0].imgSource;
    p1Carta2.src = p1.cartas[1].imgSource;
    p1Carta3.src = p1.cartas[2].imgSource;

    p2Carta1.src = p2.cartas[0].back;
    p2Carta2.src = p2.cartas[1].back;
    p2Carta3.src = p2.cartas[2].back;

    document.getElementById("p1-paquete").src = "./assets/detras.gif";
    document.getElementById("p2-paquete").src = "./assets/detras.gif";

    setTimeout(() => {
        p1Carta1.style.opacity = 1;
        p1Carta2.style.opacity = 1;
        p1Carta3.style.opacity = 1;
        p2Carta1.style.opacity = 1;
        p2Carta2.style.opacity = 1;
        p2Carta3.style.opacity = 1;
    }, 1000)

}

updateCards();

//bigAlert.style.opacity = 0;
bigAlert.hidden = true;

let lastFrameTime = Date.now();
const player = {
    position: {
        x: 0
    }
}
function gameLoop() {
    // Calculate delta time
    const currentTime = Date.now();
    const deltaTime = (currentTime - lastFrameTime) / 1000; // Convert to seconds

    // Update game logic using delta time
    updateGameLogic(deltaTime);

    // Render the game

    // Set last frame time for the next frame
    lastFrameTime = currentTime;


    // Request the next frame
    requestAnimationFrame(gameLoop);
}

function updateGameLogic(deltaTime) {
    // Update game objects based on delta time
    // Example:


    //  console.log(player.position.x)

    eventos.estado(deltaTime)
}

// Start the game loop
gameLoop();
