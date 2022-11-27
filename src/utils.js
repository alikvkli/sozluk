import {store} from "./redux/store";
import {closeModal} from "./redux/modalSlice";

export const utils = {
    closeModal () {
        store.dispatch(closeModal());
    }
}
