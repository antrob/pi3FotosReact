/* REACT Component foto */

'use strict';

const eFoto = React.createElement;

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
    if (this.state.liked) {
      return 'You liked this.';
    }

    /*
    return e(
      'a',
      {  href: this.link },
        'img'
    );
    */

    // Estou a usar JSX
    return( 
      <a href={this.link} onClick={this.props.onClick}>
        <img src={this.src} />
      </a>
    );
  }
}

const domContainerFoto = document.querySelector('#fotosReact');
ReactDOM.render(eFoto(FotoLink, 
                      { href: 'https://farm66.staticflickr.com/65535/50604715012_4de0a47f9e_c.jpg',
                         src: 'https://farm66.staticflickr.com/65535/50604715012_4de0a47f9e_s.jpg'
                      }), domContainerFoto);

