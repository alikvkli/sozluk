import allModals from "./AllModals";

export default function Modal({name, data}) {
    const currentModal = allModals.find(m => m.name === name);
    return (
        <currentModal.element data={data}/>
    )
}
