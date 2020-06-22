import React from "react"

export default class MostraImg extends React.Component {
  state = {
    mostra: false,
  }

  mostrarImg = () => {
    this.setState({
      mostra: true,
    })
  }

  esconderImg = () => {
    this.setState({
      mostra: false,
    })
  }

  render() {
    return (
      <>
        {this.state.mostra ? (
          <img
            onClick={this.esconderImg}
            src={
              "https://i.picsum.photos/id/658/300/300.jpg?hmac=SaMox621Xwu-Lqaf1HdQCDGA9B73LUQW5EI9x1djbLw"
            }
            alt="Hello World"
          />
        ) : (
          <button onClick={this.mostrarImg}>Mostrar</button>
        )}
      </>
    )
  }
}
