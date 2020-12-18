import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function DeleteList(props) {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        
        <React.Fragment>

            <button type="button" className="btn btn-outline-danger" onClick={handleClickOpen}>Deletar</button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Deletar cadastro!</DialogTitle>
                
                <DialogContent>
                    
                    <DialogContentText>Tem certeza que deseja excluir permanentemente este cadastro?</DialogContentText>
    
                </DialogContent>

                <DialogActions>

                    <button type="button" className="btn btn-outline-danger" onClick={(e)=>props.deleteList(e,props.elementId)}>Deletar</button>
                    <button type="button" className="btn btn-outline-primary" onClick={handleClose}>Cancelar</button>
  
                </DialogActions>

            </Dialog>

        </React.Fragment>

    )

}

export default DeleteList;