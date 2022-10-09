
import React,{ Component } from 'react';
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
    ],

    novoComentario:{
      nome:'',
      email:'',
      mensagem: ''
    }
  }

  adicionarComentario = e => {
    e.preventDefault();
    const novoComentario = {...this.state.novoComentario,data: new Date()}
    this.setState({
      comentarios: [...this.state.comentarios,novoComentario],
      novoComentario: {nome: '', email: '', mensagem: '' }
    })

  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c=> c !== comentario)
    this.setState({comentarios:lista})
  }


  digitacao = e => {

    console.log(e)
    const {name,value} = e.target //desconstrução
    this.setState({novoComentario:{...this.state.novoComentario, [name]: value}})
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
              data = {comentario.data}
              onRemove={this.removerComentario.bind(this,comentario)}>
              {comentario.mensagem}
            </Comentario>
          ))
        }

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentario</h2>
          <div>
            <input  type="text" name ="nome" value = {this.state.novoComentario.nome} onChange={this.digitacao} placeholder='Digite seu Nome'/>
          </div>
          <div>
            <input 
              type="email" name ="email" value ={this.state.novoComentario.email} onChange={this.digitacao} placeholder='Digite seu email' />
          </div>
          <div>
            <textarea 
              name = "mensagem" 
              rows="4"
              value = {this.state.novoComentario.mensagem}
              onChange={this.digitacao}
            />

            <button type="submit" >Adicionar Comentário</button>
          </div>

        </form>
      </div>
    );
  }

}

export default App;
