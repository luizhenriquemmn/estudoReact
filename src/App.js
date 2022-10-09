
import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario'

class App extends Component{
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@gmail.com',
        data: new Date(2022, 10, 10),
        mensagem: 'Olá, Tudo Bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@gmail.com',
        data: new Date(2022, 10, 10),
        mensagem: 'Olá, tudo bem sim.'
      }   
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
      nome: 'henrique',
      email: 'henrique@gmail.com',
      data: new Date(2022,1,10),
      mensagem: 'cheguei'
    }

    //let lista = this.state.comentarios;
    //lista.push(novoComentario);
    //this.setState({comentarios:lista})

    this.setState({
      comentarios: [...this.state.comentarios,novoComentario]
    })


  }

  render(){

    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {
          this.state.comentarios.map( (comentario,indice) => (
            <Comentario 
              key = {indice}
              nome = {comentario.nome}
              email= {comentario.email}
              data = {comentario.data}>
              {comentario.mensagem}
            </Comentario>
          ))
        }

        <button onClick={this.adicionarComentario}>Adicionar Comentário</button>


  
    
      </div>
    );
  }

}

export default App;
