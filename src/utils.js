import {store} from "./redux/store";
import {closeModal} from "./redux/modalSlice";

export const utils = {
    closeModal() {
        store.dispatch(closeModal());
    },
    idetiferText(name) {
        //`${name?.split(' ')?.[0]?.[0]}${name?.split(' ')?.[1]?.[0]}`
        if (name.length === 0) {
            return "NaN";
        }
        const nameArr = name.split(' ');
        if (nameArr && nameArr.length == 1) {
            return nameArr[0][0].toLocaleUpperCase();
        } else if (nameArr && nameArr.length === 2) {
            return `${nameArr[0][0].toLocaleUpperCase()}${nameArr[1][0].toLocaleUpperCase()}`;
        } else {
            return "NaN";
        }
    }
}
