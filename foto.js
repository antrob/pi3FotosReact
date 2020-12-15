/* REACT Component foto */
'use strict';


class FotoLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.link = props.href;
    this.src = props.src;
    //props.onClick.bind(this);
    if( this.props.onClick)
      this.props.onClick.bind(this);

    //this.onClick = this.clickHandler;

    console.log( "Constructor FotoLink", this );
    console.log( this.props.onClick );
  }

  clickHandler( e ) {
    console.log( "Click ", this );
    e.preventDefault();
  }

  render() {
    
    // Estou a usar JSX
    return( 
      <a href={this.link} onClick={this.props.onClick}>
        <img src={this.src} />
      </a>
    );
  }
}

