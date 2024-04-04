// <div aria-hidden="true">Pippo</div> 

// Seleziona l'elemento all'interno del quale si trova il Shadow DOM
var elementoPadre = document.querySelector('selettore_padre');

// Ottieni il nodo radice (Root Node) che contiene l'elemento
var rootNode = elementoPadre.getRootNode();

// Verifica se rootNode è un ShadowRoot
if (rootNode instanceof ShadowRoot) {
    // Se rootNode è uno ShadowRoot, otteniamo il suo host
    var shadowHost = rootNode.host;
    // Ora puoi ottenere il selettore dello shadow host
    var selettoreShadowHost = shadowHost.tagName.toLowerCase();
    
    console.log(selettoreShadowHost); // Stampa il selettore dello shadow host
} else {
    console.log("L'elemento non è all'interno di uno Shadow DOM.");


// Seleziona l'elemento Shadow host
var shadowHost = document.querySelector('selettore_shadow_host');

// Apri il Shadow DOM
var shadowRoot = shadowHost.shadowRoot;

// Seleziona l'elemento all'interno del Shadow DOM
var elemento = shadowRoot.querySelector('div[aria-hidden="true"]');

// Ottieni il testo dell'elemento
var testoElemento = elemento.textContent;

console.log(testoElemento); // Stampa "Pippo"
