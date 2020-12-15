/* REACT Component Galeria */
'use strict';

class Galeria extends React.Component {
    constructor(props) {
        super(props);

        this.lista = [];

        let url_foto_pequena, url_foto_media;
      
        for( let foto of props.fotos )
        {
            // Obtenção dos URLs da foto em tamanho pequeno e médio
            url_foto_pequena = this.constroiURL_photo(foto.farm, foto.server, foto.id, foto.secret, "s");
            url_foto_media = this.constroiURL_photo(foto.farm, foto.server, foto.id, foto.secret, "c");

            this.lista.push( <FotoLink href= {url_foto_media} 
                                src={url_foto_pequena}
                                key = {foto.id}
                                onClick={clickHandler}
                        />  
            );
        }
    }

    render() {
        return (    
                <>
                    {this.lista}
                </>
        );    
    }

    constroiURL_photo( farm_id, server_id, photo_id, secret, size )
    {  
        return  `https://farm${farm_id}.staticflickr.com/${server_id}/${photo_id}_${secret}_${size}.jpg`;
    } 
}

