import React from 'react'

class ArtikelTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {/* ToDo: füge hier drunter Deinen HTML-Code ein */}
        <dd><label><input type="checkbox"/> {this.props.name}</label></dd>
      </React.Fragment>
    )
  }
}

export default ArtikelTag
