
import './App.css';
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome = "Luiz Henrique" email="luiz.h@gmail.com" data ={new Date(2022, 10, 10)}>
        Oi Jessiquinha
      </Comentario>

      <Comentario nome = "Jessica" email="Jessica@gmail.com" data ={new Date(2022, 10, 10)}>
        Oi Meu Amor
      </Comentario>      
   
      

    </div>
  );
}

export default App;
