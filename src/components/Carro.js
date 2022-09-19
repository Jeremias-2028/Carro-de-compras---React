import { Component } from "react";
import BubbleAlert from './bubbleAlert';

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding:  '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: '12px',
    top: '20px',
  }
}

class Carro extends Component {

  getNumber(n) {
    if (!n) { return ' ' }
    return n > 9 ? '9+' : n
  }

  render() {
    const { carro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0
          ? <BubbleAlert value={cantidad}/> 
          : false}
        </span>
        <button style={styles.carro}>
          Carro
        </button>
      </div>
    )
  }
}

export default Carro;