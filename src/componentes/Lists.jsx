import React from 'react';
import '../bootstrap.css';
import DeleteList from './DeleteList';
import UpdateList from './UpdateList';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function Lists(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    var rows = [];

    props.alldata.forEach(element => {
        rows.push(
          
            <tr key={element.id}>
                <td scope="row">{element.id}</td>
                <td>{element.nome}</td>
                <td>{element.sobrenome}</td>
                <td>{element.cpfcnpj}</td>
                <td>{element.email}</td>
                <td>{element.endereco}</td>
                <td>
                    <UpdateList 
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    updateList={props.updateList}
                    handleChange={props.handleChange}
                    errors={props.errors} 
                    handleBlur={props.handleBlur}/>
                </td>

                <td>
                    <DeleteList 
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    deleteList={props.deleteList} />
                </td>
            </tr>

        )
    });

    return(
  
        <div >

            <div className="form-row col-sm-18 mt-4 ">

                <button type="button" className="btn btn-info btn-block" onClick={handleClickOpen}>Mostrar cadastrados</button>
                  
            </div>

            <div className="modal-lg">

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="md">

                    <DialogTitle id="form-dialog-title">Tabela de cadastrados</DialogTitle>
                
                    <DialogContent>

                        <table className="table table-hover" >
                        
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Sobrenome</th>
                                    <th scope="col">CPF/CNPJ</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>                    
                                {rows}
                            </tbody>
                        
                        </table>

                    </DialogContent>

                    <DialogActions>

                        <button type="button" className="btn btn-outline-primary " onClick={props.getLists} color="primary">Mostrar dados</button>
                        <button type="button" className="btn btn-outline-primary mr-3" onClick={handleClose} color="primary">Fechar</button>
        
                    </DialogActions>
                </Dialog>
            </div>
        </div>
       
       
    )
}

export default Lists;