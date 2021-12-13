import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';


import VillesForm from '../form/VillesForm';

export default function Dialogmodal({ open, handleClose, data, onChange, handleSubmit }) {

    const { id, nom, port_id, code} = data
    return (
        <div className="modal-size">

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth="true"
            >
                <DialogTitle id="alert-dialog-title">
                    {id ? 'update Bureau' : 'create new Bureau'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form >
                            {/* <TextField id='nom' value={nom} onChange={e => onChange(e)} margin='dense' placeholder='enter your first name' label='first name' variant="outlined" fullWidth />
                            <TextField id='pays' value={pays} onChange={e => onChange(e)} margin='dense' placeholder='enter your last name...' label='last name' fullWidth />
                            <TextField id='email' value={email} onChange={e => onChange(e)} margin='dense' placeholder='enter email...' label='email' fullWidth />
                            <TextField id='code' value={code} onChange={e => onChange(e)} margin='dense' placeholder='enter code' label='code' fullWidth /> */}
                            <VillesForm data={data} onChange={onChange}/>
                        </form>
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant='outlined'>cancel</Button>
                    <Button variant='contained' onClick={() => handleSubmit()}>
                        {id ? 'update' : '  submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}