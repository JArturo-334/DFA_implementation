const btnAFD1 = document.querySelector('#btnAFD1');
const btnAFD2 = document.querySelector('#btnAFD2');
const btnAFD3 = document.querySelector('#btnAFD3');
const btnAFD4 = document.querySelector('#btnAFD4');

let AFD1 = {
    initialState: "Q0",
    permitted_sym: ["a", "b", "c"],
    finalState: ["Q3"],
    transitions: [
        //Q0
        {state: "Q0", symbol: "a", to_state: "Q1",},
        {state: "Q0", symbol: "b", to_state: "Q2",},
        {state: "Q0", symbol: "c", to_state: "Q3",},

        //Q1
        { state: "Q1", symbol: "a", to_state: "Q2",},
        { state: "Q1", symbol: "b", to_state: "Q3",},
        { state: "Q1", symbol: "c", to_state: "Q1",},

        //Q2
        { state: "Q2", symbol: "a", to_state: "Q3",},
        { state: "Q2", symbol: "b", to_state: "Q1",},
        { state: "Q2", symbol: "c", to_state: "Q3",},

        //Q3
        { state: "Q3", symbol: "a", to_state: "Q3",},
        { state: "Q3", symbol: "b", to_state: "Q3",},
        { state: "Q3", symbol: "c", to_state: "Q3",},
    ]
};

let AFD2 = {
    initialState: "Q0",
    permitted_sym: ["a", "b", "c"],
    finalState: ["Q3", "Q4", "Q6", "Q8"],
    transitions: [
        //Q0
        {state: "Q0", symbol: "a", to_state: "Q4",},
        {state: "Q0", symbol: "b", to_state: "Q3",},
        {state: "Q0", symbol: "c", to_state: "Q1",},

        //Q1
        { state: "Q1", symbol: "a", to_state: "Q3",},
        { state: "Q1", symbol: "b", to_state: "Q3",},
        { state: "Q1", symbol: "c", to_state: "Q3",},

        //Q3
        { state: "Q3", symbol: "a", to_state: "Q3",},
        { state: "Q3", symbol: "b", to_state: "Q3",},
        { state: "Q3", symbol: "c", to_state: "Q3",},

        //Q4
        {state: "Q4", symbol: "a", to_state: "Q4",},
        {state: "Q4", symbol: "b", to_state: "Q8",},
        {state: "Q4", symbol: "c", to_state: "Q1",},

        //Q6
        { state: "Q6", symbol: "a", to_state: "Q3",},
        { state: "Q6", symbol: "b", to_state: "Q8",},
        { state: "Q6", symbol: "c", to_state: "Q3",},

        //Q8
        { state: "Q8", symbol: "a", to_state: "Q3",},
        { state: "Q8", symbol: "b", to_state: "Q6",},
        { state: "Q8", symbol: "c", to_state: "Q3",},
    ]
};

let AFD3 = {
    initialState: "Q0",
    permitted_sym: ["a", "b", "c"],
    finalState: ["Q7", "Q8"],
    transitions: [
        //Q0
        {state: "Q0", symbol: "a", to_state: "Q7",},

        //Q2
        { state: "Q2", symbol: "b", to_state: "Q8",},

        //Q4
        { state: "Q4", symbol: "b", to_state: "Q8",},
        { state: "Q4", symbol: "c", to_state: "Q8",},

        //Q7
        {state: "Q7", symbol: "a", to_state: "Q7",},
        {state: "Q7", symbol: "b", to_state: "Q2",},

        //Q8
        { state: "Q8", symbol: "b", to_state: "Q8",},
        { state: "Q8", symbol: "c", to_state: "Q4",},
    ]
};

let AFD4 = {
    initialState: "Q0",
    permitted_sym: ["c", "f"],
    finalState: ["Q10"],
    transitions: [
        //Q0
        {state: "Q0", symbol: "f", to_state: "Q10",},

        //Q10
        { state: "Q10", symbol: "c", to_state: "Q0",},
    ]
};

function checkWord(automata){
    const {initialState, permitted_sym, finalState, transitions} = automata;

        let word = prompt('Input a valid word: ');
        let symbols = word.split('');
        let currentState = initialState;
        let flag = "";

        if (!permitted_sym.includes(symbols[0])) {
            alert ('Palabra "'+ word +'" RECHAZADA');
            return;
        }

        for (let i = 0; i < symbols.length; i++) {
            const element = symbols[i];

            if (permitted_sym.includes(element)){
                let nextState = "";

                for (let j = 0; j < transitions.length; j++) {
                    const sym_tran = transitions[j];
                    
                    const {state, symbol, to_state} = sym_tran;

                    if (currentState === state && element === symbol){
                        nextState = to_state;
                        break;
                    }
                }

                if (nextState === "") {
                    alert ('Palabra "'+ word +'" RECHAZADA');
                    return;
                }

                currentState = nextState;

                if (finalState.includes(currentState) && i === symbols.length-1 ){
                    flag = currentState;
                    break;
                }
            }

        }

        if (finalState.includes(flag)){
            alert ('Palabra "'+ word +'" ACEPTADA');
        }
        else{
            alert ('Palabra "'+ word +'" RECHAZADA');
        }

        flag = "";
        currentState = initialState;
}

btnAFD1.addEventListener('click', () => checkWord(AFD1));

btnAFD2.addEventListener('click', () => checkWord(AFD2));

btnAFD3.addEventListener('click', () => checkWord(AFD3));

btnAFD4.addEventListener('click', () => checkWord(AFD4));