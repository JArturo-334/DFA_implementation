const btnAFD1 = document.querySelector('#btnAFD1');
const btnAFD2 = document.querySelector('#btnAFD2');
const btnAFD3 = document.querySelector('#btnAFD3');
const btnAFD4 = document.querySelector('#btnAFD4');
const btnAFD5 = document.querySelector('#btnAFD5');
const btnAFD6 = document.querySelector('#btnAFD6');
const btnAFD7 = document.querySelector('#btnAFD7');


let AFD1 = {
    initialState: "Q1",
    permitted_sym: ["0", "1"],
    finalState: ["Qf"],
    transitions: [
        //Q1
        { state: "Q1", symbol: "0", to_state: "Q2", },

        //Q2
        { state: "Q2", symbol: "0", to_state: "Q2", },
        { state: "Q2", symbol: "1", to_state: "Q3", },

        //Q3
        { state: "Q3", symbol: "0", to_state: "Q3", },
        { state: "Q3", symbol: "1", to_state: "Q4", },

        //Q4
        { state: "Q4", symbol: "0", to_state: "Q5", },

        //Q5
        { state: "Q5", symbol: "1", to_state: "Qf", },
        { state: "Q5", symbol: "0", to_state: "Q5", },
    ]
};

let AFD2 = {
    initialState: "Q1",
    permitted_sym: ["0", "1"],
    finalState: ["Qf"],
    transitions: [
        //Q1
        { state: "Q1", symbol: "0", to_state: "Q1", },
        { state: "Q1", symbol: "1", to_state: "Q2", },

        //Q2
        { state: "Q2", symbol: "0", to_state: "Q2", },
        { state: "Q2", symbol: "1", to_state: "Q3", },
        { state: "Q2", symbol: "E", to_state: "Q1", },

        //Q3
        { state: "Q3", symbol: "0", to_state: "Qf", },
        { state: "Q3", symbol: "1", to_state: "Q3", },
    ]
};

let AFD3 = {
    initialState: "Qf",
    permitted_sym: ["a", "b"],
    finalState: ["Qf"],
    transitions: [
        //Qf
        { state: "Qf", symbol: "a", to_state: "Qf", },
        { state: "Qf", symbol: "b", to_state: "Qf", },
    ]
};

let AFD4 = {
    initialState: "Q1",
    permitted_sym: ["a", "b", "E"],
    finalState: ["Qf"],
    transitions: [
        //Q1
        { state: "Q1", symbol: "a", to_state: "Q2", },

        //Q2
        { state: "Q2", symbol: "a", to_state: "Q2", },
        { state: "Q2", symbol: "b", to_state: "Q3", },

        //Q3
        { state: "Q3", symbol: "a", to_state: "Q4", },
        { state: "Q3", symbol: "E", to_state: "Q1", },

        //Q4
        { state: "Q4", symbol: "b", to_state: "Q5", },

        //Q5
        { state: "Q5", symbol: "b", to_state: "Qf", },
    ]
};

let AFD5 = {
    initialState: "Qf",
    permitted_sym: ["1"],
    finalState: ["Qf"],
    transitions: [
        //Q1
        { state: "Q1", symbol: "1", to_state: "Qf", },

        //Qf
        { state: "Qf", symbol: "1", to_state: "Q1", },
    ]
};

let AFD6 = {
    initialState: "Q1",
    permitted_sym: ["a", "b", "E"],
    finalState: ["Qf"],
    transitions: [
        //Q1
        { state: "Q1", symbol: "a", to_state: "Q2", },

        //Q2
        { state: "Q2", symbol: "a", to_state: "Q3", },

        //Q3
        { state: "Q3", symbol: "a", to_state: "Q4", },
        { state: "Q4", symbol: "E", to_state: "Q1", },

        //Q4
        { state: "Q4", symbol: "b", to_state: "Q5", },

        //Q5
        { state: "Q5", symbol: "b", to_state: "Q6", },
        { state: "Q5", symbol: "E", to_state: "Q3", },

        //Q6
        { state: "Q6", symbol: "a", to_state: "Qf", },
        { state: "Q6", symbol: "b", to_state: "Q6", },
    ]
};

let AFD7 = {
    initialState: "Q1",
    permitted_sym: ["a", "b", "E"],
    finalState: ["Qf"],
    transitions: [
        //Q1
        { state: "Q1", symbol: "a", to_state: "Q2", },

        //Q2
        { state: "Q2", symbol: "a", to_state: "Q3", },

        //Q3
        { state: "Q3", symbol: "a", to_state: "Q4", },
        { state: "Q3", symbol: "E", to_state: "Q2", },

        //Q4
        { state: "Q4", symbol: "b", to_state: "Q5", },

        //Q5
        { state: "Q5", symbol: "b", to_state: "Q6", },
        { state: "Q5", symbol: "E", to_state: "Q4", },

        //Q6
        { state: "Q6", symbol: "a", to_state: "Q7", },

        //Q7
        { state: "Q7", symbol: "a", to_state: "Q7", },
        { state: "Q7", symbol: "b", to_state: "Q8", },

        //Q8
        { state: "Q8", symbol: "b", to_state: "Q9", },

        //Q9
        { state: "Q9", symbol: "b", to_state: "Q10", },

        //Q10
        { state: "Q10", symbol: "b", to_state: "Qf", },

        //Qf
        { state: "Qf", symbol: "a", to_state: "Qf", },
        { state: "Qf", symbol: "b", to_state: "Qf", },
    ]
};

function checkWord(automata, title) {
    const { initialState, permitted_sym, finalState, transitions } = automata;

    let word = prompt(title + ' Input a valid word: ');
    let symbols = word.split('');
    let currentState = initialState;
    let flag = "";

    if (finalState.includes(currentState) && word === "") {
        alert('Palabra "' + word + '" ACEPTADA');
        return;
    }

    if (!permitted_sym.includes(symbols[0])) {
        alert('Palabra "' + word + '" RECHAZADA');
        return;
    }

    for (let i = 0; i < symbols.length; i++) {
        const element = symbols[i];

        if (permitted_sym.includes(element)) {
            let nextState = "";

            for (let j = 0; j < transitions.length; j++) {
                const sym_tran = transitions[j];

                const { state, symbol, to_state } = sym_tran;

                if (currentState === state && element === symbol) {
                    nextState = to_state;
                    break;
                }
            }

            if (nextState === "") {
                alert('Palabra "' + word + '" RECHAZADA');
                return;
            }

            currentState = nextState;

            if (finalState.includes(currentState) && i === symbols.length - 1) {
                flag = currentState;
                break;
            }
        }

    }

    if (finalState.includes(flag)) {
        alert('Palabra "' + word + '" ACEPTADA');
    }
    else {
        alert('Palabra "' + word + '" RECHAZADA');
    }

    flag = "";
    currentState = initialState;
}

btnAFD1.addEventListener('click', () => checkWord(AFD1, "AFD1"));

btnAFD2.addEventListener('click', () => checkWord(AFD2, "AFD2"));

btnAFD3.addEventListener('click', () => checkWord(AFD3, "AFD3"));

btnAFD4.addEventListener('click', () => checkWord(AFD4, "AFD4"));

btnAFD5.addEventListener('click', () => checkWord(AFD5, "AFD5"));

btnAFD6.addEventListener('click', () => checkWord(AFD6, "AFD6"));

btnAFD7.addEventListener('click', () => checkWord(AFD7, "AFD7"));