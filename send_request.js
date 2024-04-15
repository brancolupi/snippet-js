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


