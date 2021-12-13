import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

import Usersform from './form/Usersform';

export default function Dialogmodal({ open, handleClose, data, onChange, handleSubmit }) {

    const { id, firstName, lastname, username, password,cma_agency_id} = data
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth="true"
            >
                <DialogTitle id="alert-dialog-title">
                    {id ? 'update user' : 'create new user'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form >
                            {/* <TextField id='firstName' value={firstName} onChange={e => onChange(e)} margin='dense' placeholder='enter your first name' label='first name' variant="outlined" fullWidth />
                            <TextField id='lastname' value={lastname} onChange={e => onChange(e)} margin='dense' placeholder='enter your last name...' label='last name' fullWidth />
                            <TextField id='username' value={username} onChange={e => onChange(e)} margin='dense' placeholder='enter username...' label='username' fullWidth />
                            <TextField id='password' value={password} onChange={e => onChange(e)} margin='dense' placeholder='enter password' label='password' fullWidth /> */}
                            <Usersform data={data} onChange={onChange}/>
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