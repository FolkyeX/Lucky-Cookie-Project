import'./style.css';
import Botao from './components/Botao';
import { Component } from 'react';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Se jogue no que te faz sorrir.', 'O choro pode durar uma noite, mas a alegria vem pela manhã.',
    'Deixe a alegria de viver brotar no seu coração!', 'Quem se apaixona por si mesmo não tem rivais.',
    'Se você quer algo, você pode e você consegue!'];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <h1 className='titulo'> Biscoito da Sorte </h1>
         <img src={require('./assests/biscoito.png')} className="img"/>
         <Botao nome="Abrir Biscoito" acaoBTN={this.quebraBiscoito}/>
         <h3 className='textoFrase'>{this.state.textoFrase} </h3>
      </div>
    );
  }
}


export default App;
