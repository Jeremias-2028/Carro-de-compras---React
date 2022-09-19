import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'},
    ],
    carro: [],
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if(carro.find(element => element.name === producto.name)){
      const newCarro = carro.map(e =>  e.name === producto.name 
        ? ({
          ...e,
          cantidad: e.cantidad + 1
        })
        : e)
        return this.setState({ carro: newCarro })
      } else {
        return this.setState({
          carro: this.state.carro.concat({
            ...producto, 
            cantidad: 1,
          })
        })
      }
    }

    render() {
      return (
        <div>
          <Navbar carro = {this.state.carro} />
            <Layout>
              <Title />
              <Productos 
                agregarAlCarro = {this.agregarAlCarro}
                productos = {this.state.productos}
              />
            </Layout>
        </div>
      )
    }
  }

export default App;
