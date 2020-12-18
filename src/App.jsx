import React from 'react';
import './App.css';
import './bootstrap.css';
import NavBar from './componentes/NavBar';
import Form from './componentes/Form';

class App extends React.Component {

  //construtor para declaração das variáveis
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        nome: "",
        sobrenome: "",
     	  idade: "",
	      cpfcnpj: "",
	      email: "",
        endereco: "",
        cidade: "",
        estado: "",
        cep: "",
        data: ""
      },
      errors: {
        nome: "",
        sobrenome: "",
        cpfcnpj: "",
        email: "",
        endereco: "",
        data: ""
      }
    };

    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  //função para buscar a lista de cadastrados no back-end 
  getLists() {
    this.setState({ loading: true }, () => {fetch("http://localhost:3000/cadastro/")
    .then(res => res.json())
    .then(result => this.setState({loading: false, alldata: result})
    )
    .catch(console.log);
    })
  }

  //função para lidar com as mudanças de estado das variáveis
  handleChange(e) {
    var nome = this.state.singledata.nome;
    var sobrenome = this.state.singledata.sobrenome;
    var idade = this.state.singledata.idade;
    var cpfcnpj = this.state.singledata.cpfcnpj;
    var email = this.state.singledata.email;
    var endereco = this.state.singledata.endereco;
    var cidade = this.state.singledata.cidade;
    var estado = this.state.singledata.estado;
    var cep = this.state.singledata.cep;
    var data = this.state.singledata.data;
    if (e.target.name === "nome") nome = e.target.value;
    else if(e.target.name === "sobrenome") sobrenome = e.target.value;
    else if (e.target.name === "CPF_CNPJ") cpfcnpj = e.target.value;
    else if (e.target.name === "email") email = e.target.value;
    else if (e.target.name === "endereco") endereco = e.target.value;
    else if (e.target.name === "cidade") cidade = e.target.value;
    else if (e.target.name === "estado") estado = e.target.value;
    else if (e.target.name === "cep") cep = e.target.value;
    else data = e.target.value;

    this.setState({
      singledata: {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        cpfcnpj: cpfcnpj,
        email: email,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cep: cep,
        data: data
      }
    })
  }

  //função para validação de inputs vazios. Retorna mensagem de 'Campo obrigatório' após clicar fora do input
  handleBlur(e) {

    if(this.state.singledata.nome === '') {
      this.setState( {errors: {nome: 'Campo obrigatório!'}} )
    }

    else if(this.state.singledata.sobrenome === '') {
      this.setState( {errors: {sobrenome: 'Campo obrigatório!'}})
    }

    else if(this.state.singledata.data === '') {
      this.setState( {errors: {data: 'Campo obrigatório!'}})
    }

    else if(this.state.singledata.cpfcnpj === '') {
      this.setState( {errors: {cpfcnpj: 'Campo Obrigatório!'}})
    }
    
    else if(this.state.singledata.email === '') {
      this.setState( {errors: {email: 'Campo obrigatório!'}})
    }

    else if(this.state.singledata.endereco === '') {
      this.setState( {errors: {endereco: 'Campo obrigatório!'}})
    }
    
    else {this.setState( {errors: {nome: '', 
    sobrenome: '',
    data: '',
    cpfcnpj: '',
    email: '',
    endereco: ''
    }} )
  }

  };

  //função para testar e validar CPF ou CNPJ. Utiliz os dois últimos dígitos para realizar a validação
  //retorna true para cpf ou cnpj verdadeiro e false para falso
  TestaCPF_CNPJ(e) {

    if (this.state.singledata.cpfcnpj.length <= 14) {
        var Soma;
        var Resto;
        Soma = 0;
        
        var cpfcnpj = this.state.singledata.cpfcnpj.replace(/[^0-9]/g, '');

        if (cpfcnpj.length < 11) return false;

        if (cpfcnpj === "00000000000") return false;
        
        for (var i=1; i<=9; i++) Soma = Soma + parseInt(cpfcnpj.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(cpfcnpj.substring(9, 10)) ) return false;
    
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfcnpj.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(cpfcnpj.substring(10, 11) ) ) return false;

        return true;
    }

    else {
    
        cpfcnpj = this.state.singledata.cpfcnpj.replace(/[^\d]+/g, '');
        console.log(cpfcnpj);

        if ((cpfcnpj.length > 11) && (cpfcnpj.length < 14)) return false;

        if (cpfcnpj === "00000000000000" || 
            cpfcnpj === "11111111111111" || 
            cpfcnpj === "22222222222222" || 
            cpfcnpj === "33333333333333" || 
            cpfcnpj === "44444444444444" || 
            cpfcnpj === "55555555555555" || 
            cpfcnpj === "66666666666666" || 
            cpfcnpj === "77777777777777" || 
            cpfcnpj === "88888888888888" || 
            cpfcnpj === "99999999999999")
            return false;
            
        
        var tamanho = cpfcnpj.length - 2
        var numeros = cpfcnpj.substring(0,tamanho);
        var digitos = cpfcnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;

        for ( i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {pos = 9};
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(0)) return false;
        
            
        tamanho = tamanho + 1;
        numeros = cpfcnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
        }

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(1)) return false;

        return true;
        
    }
  }

  //função para validar o preenchimento dos dados
  handleValidation(e) {
 
    if(this.state.singledata.nome === '') {
      alert('Por favor, preencha o campo nome!')
    }

    else if(this.state.singledata.sobrenome === '') {
      alert('Por favor, preencha o campo sobrenome!')
    }

    //condição para validação de datas e limite para datas serem sempre maior ou igual a 1870
    else if(((new Date(this.state.singledata.data).getFullYear()) <= 1870 ) 
    || 
    (this.state.singledata.data === '')) {
        alert('Data de nascimento inválida!');
    } 

    //se o cpf ou cnpj forem falsos, emite um alerta
    else if( !this.TestaCPF_CNPJ(this.state.singledata.cpfcnpj) ) {
        alert('CPF ou CNPJ inválido!');
    } 
    
    //se na variável e-mail não conter o '@', emite um alerta
    else if( (!this.state.singledata.email.includes( "@" ))
    || 
    (this.state.singledata.email === '') ) {
        alert('Por favor, digite um e-mail válido! \n \n' 
        + 'Exemplo: email@exemplo.com');
    }

    else if(this.state.singledata.endereco === '') {
      alert('Por favor, preencha o campo endereço!');
    }
    
    else if((this.state.singledata.estado === '') || (this.state.singledata.estado === 'Escolha o estado')){
        alert('Por favor, escolha um estado');
    } 

    //se a quantidade de caracteres no cep for menor que 10 emite um alerta
    else if((this.state.singledata.cep.length < 10)
    || 
    (this.state.singledata.cep === '') ){
        alert('CEP incorreto!');
    } 

    else {
    return true;  
    }
  };

  //função para cadastrar os dados no banco de dados
  createList() {
    if ( this.handleValidation() ) {
      fetch("http://localhost:3000/cadastro", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(this.state.singledata)
      }).then( this.setState({
        singledata: {
          nome: "",
          sobrenome: "",
          idade: "",
          cpfcnpj: "",
          email: "",
          endereco: "",
          cidade: "",
          estado: "",
          cep: "",
          data: ""
        
          }
        })
      );
      return alert('Cadastro criado com sucesso!');
    }
  }

  //função para buscar cadastro com base no id fornecido pela requisição
  getList(e, id) {
    this.setState({
      singledata: {
        nome: "Carregando...",
        sobrenome: "Carregando...",
        idade: "Carregando...",
        cpfcnpj: "Carregando...",
        email: "Carregando...",
        endereco: "Carregando...",
        cidade: "Carregando...",
        estado: "Carregando...",
        cep: "Carregando...",
        data: "Carregando..."
      }
    }, () => {fetch("http://localhost:3000/cadastro/" + id)
  .then(res => res.json()).then(result => {
    this.setState({
      singledata: {
        nome: result.nome,
        sobrenome: result.sobrenome ? result.sobrenome: "",
        idade: result.idade ? result.idade: "",
        cpfcnpj: result.cpfcnpj ? result.cpfcnpj: "",
        email: result.email ? result.email: "",
        endereco: result.endereco ? result.endereco: "",
        cidade: result.cidade ? result.cidade: "",
        estado: result.estado ? result.estado: "",
        cep: result.cep ? result.cep: "",
        data: result.data ? result.data: ""
        }
      });
    });
    }
    )
  }

  //função para atualizar o cadastro com consulta através do id fornecido pela requisição
  updateList(e, id) {
    if ( this.handleValidation() ) {
      fetch("http://localhost:3000/cadastro/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json" },
          body: JSON.stringify(this.state.singledata)
        }).then(res => res.json())
        .then(result => {this.setState({
          singledata: {
            nome: "",
            sobrenome: "",
            idade: "",
            cpfcnpj: "",
            email: "",
            endereco: "",
            cidade: "",
            estado: "",
            cep: "",
            data: ""
          }
        });
      this.getLists();
      });
      return alert('Cadastro atualizado com sucesso!')
    }
  }

  //função para deletar cadastro através de id
  deleteList(e, id) {
    fetch("http://localhost:3000/cadastro/" + id, {
      method: "DELETE"
  })
  .then(res => res.json())
  .then(result => {
    this.setState({
      singledata: {
        nome: "",
        sobrenome: "",
        idade: "",
        cpfcnpj: "",
        email: "",
        endereco: "",
        cidade: "",
        estado: "",
        cep: "",
        data: ""
      }
    });
    this.getLists();
    });
  }
  
  render () {

    return (
      
        <div className="App">

            <h1>Desafio React</h1>
            
            <div className="NavBar">

              <NavBar />

            </div>

            
            <div className="Form">

              <Form singledata={this.state.singledata}
              createList={this.createList}
              getLists={this.getLists}
              handleChange={this.handleChange}
              alldata={this.state.alldata}
              getList={this.getList}
              updateList={this.updateList}
              deleteList={this.deleteList}
              errors={this.state.errors}
              handleBlur={this.handleBlur}
              />

            </div>

          </div>
    );

  }

}
export default App;