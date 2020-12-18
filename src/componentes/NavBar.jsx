import React, { useState } from 'react';
import '../bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

import Img5 from '../imgs/5.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'


export default (props) => {

  const [open, setOpen] = useState(false);


  return (

    <div>
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary">

        <div className="container">

          <a className="navbar-brand h1 mb-0" href="#"><img src={Img5} className="media-object img-responsive" /></a>
        
          <Button className="navbar-toggler" type="button" onClick={() => setOpen(!open)} aria-controls="navbarSite" aria-expanded={open}>

            <span className="navbar-toggler-icon"></span>

          </Button>

          <Collapse in={open}>

            <div className="collapse navbar-collapse" id="navbarSite">
          
              <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                  <a className="nav-link" href="#">Início</a>
                </li>

                <li className="nav-item">
                 <a className="nav-link" href="#">Perfil</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Serviços</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Depoimentos</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Contato</a>
                </li>

              </ul>

              <div className="dropdown mb-2 mt-2">

                <DropdownButton id="dropdown-basic-button" title="Social">

                  <Dropdown.Item href="#">Facebook</Dropdown.Item>
                  <Dropdown.Item href="#">Twitter</Dropdown.Item>
                  <Dropdown.Item href="#">Instagram</Dropdown.Item>

                </DropdownButton>

              </div>

              <div className="form d-flex justify-content-center">

                <form className="form-inline">

                  <input className="form-control ml-4 mr-2" type="search" placeholder="Buscar..."/>

                  <button className="btn btn-dark" type="Submit">OK</button>

                </form>

              </div>

            </div>

          </Collapse>

        </div>

      </nav>

    </div>
  )
};