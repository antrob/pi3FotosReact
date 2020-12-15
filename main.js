'use strict';


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
   
    var arrayFotos = data.photos.photo;

    const domContainerFotos = document.querySelector('#fotos');
    ReactDOM.render(<Galeria fotos={arrayFotos} />
                    , domContainerFotos);          

}


function clickHandler( e ) {
  console.log( "Click ", this, e.target );

  let imgClickada = e.target;
  let imgDestaque = document.querySelector( "#destaque img");
  imgDestaque.setAttribute( "src", imgClickada.parentNode.getAttribute("href"));

  e.preventDefault();
}