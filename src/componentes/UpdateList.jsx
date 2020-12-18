import React from 'react';
import '../bootstrap.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CpfCnpj from '@react-br-forms/cpf-cnpj-mask';

function UpdateList(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <React.Fragment>

      <button type="button" className="btn btn-outline-info" onClick={handleClickOpen}>Atualizar</button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <DialogTitle id="form-dialog-title">Atualizar cadastro</DialogTitle>

        <DialogContent>

          <DialogContentText>
            Para atualizar o cadastro, preencha os campos com as informações que serão atualizadas.
          </DialogContentText>

          <div className="container">

              <div className="row">

                  <div className="col-12 text-center my-5">

                      <h3 className="display-4"><i className="fa fa-spinner text-primary" aria-hidden="true"></i> Formulário de Atualização</h3>

                  </div>

              </div>

              <div className="row justify-content-center mb-5">

                  <div className="col-sm-12 col-md-10 col-lg-8">

                      <form>

                          <div className="form-row">

                              <div className="form-group col-sm-6">

                                  <label htmlFor="inputNome">Seu nome</label>

                                  <input type="text" className="form-control" id="inputNome" placeholder="Nome" 
                                  name="nome" value={props.singledata.nome} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                  <span className="formField_error">{props.errors.nome}</span>

                              </div>

                              <div className="form-group col-sm-6">

                                  <label htmlFor="inputSobrenome">Seu sobrenome</label>

                                  <input type="text" className="form-control" id="inputSobrenome" placeholder="Sobrenome" 
                                  name="sobrenome" value={props.singledata.sobrenome} onChange={props.handleChange} onBlur={props.handleBlur} />
                                  <span className="formField_error">{props.errors.sobrenome}</span>

                              </div>

                          </div>

                          <div className="form-row">

                              <div className="form-group col-sm-6">

                              <label htmlFor="inputYers">CPF ou CNPJ </label>

                                  <CpfCnpj className="form-control" placeholder="000.000.000-00"
                                  name="CPF_CNPJ"
                                  value={props.singledata.cpfcnpj}
                                  onChange={props.handleChange} 
                                  onBlur={props.handleBlur}
                                  />
                                  <span className="formField_error">{props.errors.cpfcnpj}</span>

                              </div>

                          </div>

                          <div className="form-row">

                              <div className="form-group col-sm-12">

                                  <label htmlFor="inputEmail">E-mail</label>

                                      <input type="text" className="form-control" id="inputEmail" placeholder="email@exemplo.com" 
                                      name="email" value={props.singledata.email} onChange={props.handleChange} onBlur={props.handleBlur} />
                                      <span className="formField_error">{props.errors.email}</span>

                              </div>

                          </div>

                          <div className="form-row">

                              <div className="form-group col-sm-12">

                                  <label htmlFor="inputEnd">Endereço</label>

                                      <input type="text" className="form-control" id="inputEnd" placeholder="Endereço completo" 
                                      name="endereco" value={props.singledata.endereco} onChange={props.handleChange} onBlur={props.handleBlur} />
                                      <span className="formField_error">{props.errors.endereco}</span>

                              </div>

                          </div>

                      </form>

                  </div>
                      
              </div>

          </div>

        </DialogContent>

        <DialogActions>

          <button type="button" className="btn btn-outline-info" onClick={(event)=>props.updateList(event,props.elementId)}>Atualizar</button>
          <button type="button" className="btn btn-outline-primary" onClick={(e)=>props.getList(e,props.elementId)}>Mostrar dados</button>
          <button type="button" className="btn btn-outline-danger" onClick={handleClose}>Fechar</button>
        
        </DialogActions>

      </Dialog>

    </React.Fragment>

  )

}

export default UpdateList;