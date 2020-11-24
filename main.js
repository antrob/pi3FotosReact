
var url =  "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=4d24216fdb5dcfe237dfbab8c85f6f85&extras=geo&per_page=24&format=json&nojsoncallback=1";
// var url = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=" + API_KEY + "&extras=geo&per_page=24&format=json&nojsoncallback=1";

fetch(url)
 .then(response => response.json())
 .then(data => processaResposta_JSON( data) )
 .catch(error => {
     console.error('There has been a problem with the fetch operation:', error);
   });



function processaResposta_JSON( data )
{
    var url_foto_pequena, url_foto_media;

    var arrayFotos = data.photos.photo;

    var lista = [];
    
    for( let foto of arrayFotos )
    {
        // Obtenção dos URLs da foto em tamanho pequeno e médio
        url_foto_pequena = constroiURL_photo(foto.farm, foto.server, foto.id, foto.secret, "s");
        url_foto_media = constroiURL_photo(foto.farm, foto.server, foto.id, foto.secret, "c");

        /*
        const domContainerFotos = document.querySelector('#fotos');
        ReactDOM.render(eFoto(FotoLink, 
                      { href: url_foto_media,
                         src: url_foto_pequena
                      }), domContainerFotos);
        */
       
        lista.push( eFoto(FotoLink, 
                            { href: url_foto_media,
                              src: url_foto_pequena,
                              key: foto.id
                            })
                  );

        const domContainerFotos = document.querySelector('#fotos');
        ReactDOM.render(<>
                        {lista}
                        </>
                        , domContainerFotos);          

}


} 

/*
const domContainerFotos = document.querySelector('#fotos');
ReactDOM.render(eFoto(FotoLink, 
                      { href: 'https://farm66.staticflickr.com/65535/50604715012_4de0a47f9e_c.jpg',
                         src: 'https://farm66.staticflickr.com/65535/50604715012_4de0a47f9e_s.jpg'
                      }), domContainerFotos);
*/

function constroiURL_photo( farm_id, server_id, photo_id, secret, size )
{  
  return  `https://farm${farm_id}.staticflickr.com/${server_id}/${photo_id}_${secret}_${size}.jpg`;
}                     