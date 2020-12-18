import React from 'react';
import Lists from './Lists';
import '../bootstrap.css';
import './Icones.css'
import './Form.css'
import Range from './range/Range'
import CpfCnpj from '@react-br-forms/cpf-cnpj-mask';
import InputMask from 'react-input-mask';

import { differenceInYears } from 'date-fns'

function Form(props) {

    props.singledata.idade = differenceInYears(new Date(new Date().getFullYear(),
     (new Date().getMonth() + 1), 
     new Date().getDate()), 
     new Date(props.singledata.data));
 
       
    return (

        <div>

            <div className="container">

                <div className="row">

                    <div className="col-12 text-center my-5">

                        <h1 className="display-4"><i className="fa fa-paper-plane text-primary" aria-hidden="true"></i> Formulário de Cadastro</h1>

                    </div>

                </div>
  
                <div className="row justify-content-center mb-5">

                    <div className="col-sm-12 col-md-10 col-lg-8">

                        <form>

                            <div className="form-row">

                                <div className="form-group col-sm-6">

                                    <label htmlFor="inputNome">Seu nome</label>

                                    <input type="text" className="form-control" id="inputNome" placeholder="Nome" 
                                    name="nome" value={props.singledata.nome} onChange={props.handleChange} onBlur={props.handleBlur} />
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

                                    <label htmlFor="inputDate">Data de nascimento</label>

                                    <input type="date" className="form-control" id="inputDate" 
                                    name="data" value={props.singledata.data} onChange={props.handleChange} onBlur={props.handleBlur} />
                                    <span className="formField_error">{props.errors.data}</span>
                                                                        
                                </div>

                                <div className="form-group col-sm-6">
                                
                                    <label htmlFor="inputYers">Sua Idade é: </label>

                                    <input type="text" className="form-control" placeholder="Idade"
                                    name="idade" readOnly  value={props.singledata.idade || 0}/>
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group col-sm-6">

                                <label htmlFor="inputYers">CPF ou CNPJ </label>

                                    <CpfCnpj className="form-control" placeholder="000.000.000-00"
                                    name="CPF_CNPJ"
                                    value={props.singledata.cpfcnpj}
                                    onChange={props.handleChange} 
                                    onBlur={props.handleBlur} />
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

                            <div className="form-row">

                                <div className="form-group col-sm-4">

                                    <label htmlFor="inputCidade">Cidade</label>

                                    <input type="text" className="form-control" id="inputCidade" placeholder="Cidade" 
                                    name="cidade" value={props.singledata.cidade} onChange={props.handleChange} required />

                                </div>

                                <div className="form-group col-sm-4">

                                    <label htmlFor="inputEstado">Estado</label>

                                    <select id="imputEstado" className="form-control" name="estado" value={props.singledata.estado} onChange={props.handleChange}>
                                        <option defaultValue>Escolha o estado</option>
                                        <option>São Paulo</option>
                                        <option>Paraná</option>
                                        <option>Minas Gerais</option>
                                    </select>

                                </div>

                                <div className="form-group col-sm-4">

                                    <label htmlFor="inputCep">CEP</label>

                                    <InputMask mask="99.999-999" maskChar={null} type="text" className="form-control" id="inputCEP" placeholder="00.000-000" 
                                    name="cep" value={props.singledata.cep} onChange={props.handleChange} required />

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group col-sm-12">
                                 
                                
                                    <div className="form-row">

                                        <div className="form-group col-sm-6">

                                            <label htmlFor="inputValor">Pontuação</label>

                                            <input type="number" className="form-control" id="inputPontuação" placeholder={0} 
                                            step={1} min={0} max={100} />

                                        </div>

                                        <div className="form-group col-sm-6">

                                            <label htmlFor="inputValor">Saldo da conta</label>

                                            <input type="number" className="form-control" id="inputValor" placeholder="0,00" 
                                            step=".01"/>

                                        </div>

                                    </div>
                                                                           
                                    <Range />
              
                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group col-sm-12">

                                    <div className="form-check">

                                        <label className="form-check-label"></label>

                                        <input className="form-check-input" type="checkbox" />Desejo receber novidades por e-mail

                                    </div>

                                </div>

                            </div>

                            <div className="form-row">

                                <button type="button" className="btn btn-primary btn-block" onClick={props.createList} >Cadastrar</button>

                            </div>

                            <div className="col-sm-18">

                                <Lists
                                    alldata={props.alldata}
                                    singledata={props.singledata}
                                    getList={props.getList}
                                    updateList={props.updateList}
                                    deleteList={props.deleteList}
                                    getLists={props.getLists}
                                    handleChange={props.handleChange}
                                    errors={props.errors}
                                    handleBlur={props.handleBlur}>
                                </Lists>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Form;