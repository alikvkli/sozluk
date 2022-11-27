import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    Box,
    MenuItem, TextField
} from '@mui/material';
import {utils} from "../../utils";

export default function ReportEntry() {
    const [open, setOpen] = useState(true);
    const [inputValues, setInputValues] = useState({
        categoryID: 1,
        description: ""
    });
    const [age, setAge] = useState(1);
    const handleClose = () => {
        setOpen(false);
        utils.closeModal();
    };

    const handleChange = (event, type) => {
        setInputValues((prevState) => ({
            ...prevState,
            [type]: event.target.value
        }));
    };

    const validationInputs = () => {
        return Object.values(inputValues).filter(item => item).length < 2
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Entry'i Raporla
            </DialogTitle>
            <DialogContent sx={{minWidth: 500}}>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Kategori</InputLabel>
                    <Select
                        value={inputValues.categoryID}
                        label="Kategori"
                        onChange={(event) => handleChange(event, "categoryID")}>
                        <MenuItem value={1}>Sözlük'te yayınlanan içerik</MenuItem>
                        <MenuItem value={2}>Sozlük'le ilgili diğer konular</MenuItem>
                    </Select>
                </FormControl>
                <TextField margin="dense" onChange={(event) => handleChange(event, "description")} multiline rows={4}
                           label="Açıklama" variant="outlined" value={inputValues.description} fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Kapat</Button>
                <Button autoFocus disabled={validationInputs()}>Şikayet Et</Button>
            </DialogActions>
        </Dialog>
    )
}
