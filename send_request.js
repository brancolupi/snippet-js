//////////////////////////////////////////////////// Exemple 1 ////////////////////////////////////////////////////

var form_candidatura_konecta = document.getElementById('invio_candidatura_konecta');
        var notifica_esito_candidatura_konecta = document.getElementById('notifica_esito_candidatura');	
            
        function invia_candidatura_konecta(){
			   
	    event.preventDefault();
			
            xhttpInvioCandidaturaKonecta = new XMLHttpRequest();

            var formData = new FormData(form_candidatura_konecta);
    
                xhttpInvioCandidaturaKonecta.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        notifica_esito_candidatura_konecta.innerHTML = this.responseText;
                        }                   
                }
    
            xhttpInvioCandidaturaKonecta.open("POST", '/wp-content/themes/konecta/inc/ajax-konecta.php', true);
            xhttpInvioCandidaturaKonecta.send(formData);
        }
		
form_candidatura_konecta.addEventListener("submit", invia_candidatura_konecta);


//////////////////////////////////////////////////// Exemple 2 ////////////////////////////////////////////////////


var formRegistrazioneB2B = document.getElementById('registrazione-rivenditori');
        var notifica_registrazione_b2b = document.getElementById('notifica_registrazione_b2b');	
            
        function registraUtenteB2B(){
    
            xhttpRegistraUtenteB2B = new XMLHttpRequest();

            var formData = new FormData(formRegistrazioneB2B);

            var dataString = '';

            for(var [key, value] of formData){
                dataString += `${key}=${value}&`;
            }
    
                xhttpRegistraUtenteB2B.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        notifica_registrazione_b2b.innerHTML = this.responseText;
                        // setTimeout(() => {
                        //     location.reload();
                        // }, 1000);
                        }                   
                }
    
            xhttpRegistraUtenteB2B.open("POST", `/wp-content/themes/helu/inc/ajax-approva-b2b.php`, true);
            xhttpRegistraUtenteB2B.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttpRegistraUtenteB2B.send(dataString);
        }  

//////////////////////////////////////////////////// Exemple 3 ////////////////////////////////////////////////////

  function ajaxSearch(word){    

        searcHResult = document.getElementById('search_result');

        xhttpSearchInput = new XMLHttpRequest();

            xhttpSearchInput.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    searcHResult.style.visibility="visible";
                    searcHResult.innerHTML = this.responseText;
                    }                   
            }

            xhttpSearchInput.open("GET", `/ajax-helu/?search-ajax=${word}`, true);
            xhttpSearchInput.send();

        }     

        var barSearch = document.getElementById('bar-serarch');
        barSearch.addEventListener('input', function(){
            setTimeout(function(){
                var wordOfSearch = barSearch.value;
                ajaxSearch(wordOfSearch);
            },1000);
        })


//////////////////////////////////////////////////// Exemple 4 ////////////////////////////////////////////////////



