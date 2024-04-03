//////////////////// Exemple 1 ////////////////////

var targetElement = document.getElementById('elementId');
  
var observer = new MutationObserver(function(mutations) {
  
console.log('Mutazione rilevata');
  
mutations.forEach(function(mutation) {
    console.log('Tipo di mutazione:', mutation.type);
    console.log('Elemento bersaglio:', mutation.target);
    console.log('Nuovi nodi:', mutation.addedNodes);
    console.log('Nodi rimossi:', mutation.removedNodes);
  
// Controlla se il cambiamento riguarda l'innerHTML dell'elemento
    if (mutation.type === 'childList' && mutation.target === targetElement) {
      console.log('Il contenuto interno dell\'elemento è cambiato.');
      console.log('Nuovo contenuto:', targetElement.innerHTML);
// Puoi eseguire qui le azioni desiderate quando l'innerHTML cambia
    }
    
  })
})

// Avvia l'osservatore con l'elemento target e le opzioni
observer.observe(targetElement, config);  

//////////////////// Exemple 2 ////////////////////
  

// Seleziona l'elemento da osservare
var targetElement = document.getElementById('elementId');
// Crea un nuovo MutationObserver
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		// Controlla se il cambiamento riguarda l'innerHTML dell'elemento
		if (mutation.type === 'childList' && mutation.target === targetElement) {
		console.log('Il contenuto interno dell\'elemento è cambiato.');
		// Puoi eseguire qui le azioni desiderate quando l'innerHTML cambia
		}
	});
});

// Configura le opzioni per l'osservatore
var config = { childList: true, subtree: true };

// Avvia l'osservatore con l'elemento target e le opzioni
observer.observe(targetElement, config);
