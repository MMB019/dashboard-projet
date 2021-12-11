import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigationIcon from '@mui/icons-material/Navigation';
import ModalVille from '../DialogModal/ModalVille';

import "../table.css"
const TableUser= () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'nom',
            headerName: 'Nom',
            width: 150,
            editable: true
        },
        {
            field: 'pays_id',
            headerName: 'Pays',
            width: 150,
            editable: true
        },
        {
            field: 'code',
            headerName: 'Code',
            width: 150,
            editable: true
        },
        
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (params) =>
            (<div>
                <Box sx={{ '& > :not(style)': { m: 1 } }} >
                    <Fab color="secondary" size="small" onClick={() => handleUpdate(params.row)} color='primary' aria-label="edit">
                        <EditIcon />
                    </Fab>
                    {/* <IconButton aria-label="delete" color='error' size="large">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton> */}
                    <Button variant="outlined" color='error' onClick={() => handleDelete(params.id)} startIcon={<DeleteIcon />} >Delete</Button>
                </Box>
                {/* <Button variant='outlined' color='primary'>edit</Button> */}

            </div>)
        }
    ]
    //add new user on the table

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData(initialvalues)
    };

    //delet an item on the table
    const handleDelete = (id) => {
        const confirm = window.confirm("are you sure, you wanna delete this row ?? ")
        if (confirm) {
            fetch(url + `/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => getDatarow())
        }


    }

    //bring some edit to one row 
    const handleUpdate = (oldData) => {
        setFormData(oldData)
        handleClickOpen()
    }

    //initialize the value
    const initialvalues = { nom: "", code: "", pays: '' }

    // add use data and hook it up
    const [formData, setFormData] = useState(initialvalues)
    //make some tweaks about...
    const onChange = e => {
        const { value, id } = e.target
        setFormData({ ...formData, [id]: value })
    }
    const handleSubmit = () => {
        if (formData.id) {
            const confirm = window.confirm("are you sure , you wanna update this data")

            confirm && fetch(url + `/${formData.id}`, {
                method: "PUT", body: JSON.stringify(formData), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        } else {
            fetch(url, {
                method: "POST", body: JSON.stringify(formData), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        }

    }
    const [datarow, setData] = useState([
        // {id:1, pays : 'Diallo', nom: 'Ibrahima', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:2, pays : 'Barry', nom: 'moussa', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:3, pays : 'Bangoura', nom: 'yagouba', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:4, pays : 'Diallo', nom: 'Jeune', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:5, pays : 'Bah', nom: 'Idiatou', email : 'di84454@gmail.com', phone: '624 82 50 00'},
    ])

    useEffect(() => {
        getDatarow()
    }, [])
    const url = `http://localhost:4000/villes`

    const getDatarow = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }


    return (
        <div className="table-param">
            <DataGrid
                rows={datarow}
                columns={columns}
                disableColumnReorder={false}
                pageSize={10}
                rowsPerPageOptions={[5]}
                components={{
                    Toolbar: GridToolbar,
                  }}
                checkboxSelection
                disableSelectionOnClick
            />
            <div>

                <Box sx={{ '& > :not(style)': { m: 1 } }} >
                    <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                        <AddIcon />
                    </Fab>
                </Box>
            </div>
            <ModalVille open={open} handleClose={handleClose} data={formData} onChange={onChange} handleSubmit={handleSubmit} />

        </div>
    );
}

export default TableUser;