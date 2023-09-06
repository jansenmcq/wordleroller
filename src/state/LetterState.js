import { reactive } from 'vue';
import { LetterList } from '../utils/letters';
const lettersState = LetterList.reduce((state, letter) => {
    const letterState = {
        letter,
        disabled: false,
        partiallyDisabled: false,
    };

    state[letter] = letterState;
    return state;
}, {});

export const LetterState = reactive(lettersState);
