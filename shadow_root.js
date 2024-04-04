// Per recuperare il selettore dello shadow host da una pagina HTML, 
// puoi utilizzare il metodo getRootNode() sull'elemento all'interno del quale si trova il Shadow DOM, 
// come mostrato nell'esempio precedente. 
// Ecco un modo per farlo:Supponiamo che il tuo Shadow DOM si trovi all'interno di un elemento con ID "shadow-container" 
// e che tu voglia recuperare il selettore dello shadow host:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recupero Shadow Host</title>
</head>
<body>
    <!-- Elemento contenitore dello Shadow DOM -->
    <div id="shadow-container">
        <!-- Contenuto dello Shadow DOM -->
        <div aria-hidden="true">Pippo</div>
    </div>

    <script>
        // Seleziona l'elemento all'interno del quale si trova il Shadow DOM
        var elementoPadre = document.getElementById('shadow-container');

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
        }
    </script>
        
</body>
</html>
        
// In questo esempio, l'elemento contenitore dello Shadow DOM ha l'ID "shadow-container". 
// JavaScript seleziona questo elemento utilizzando document.getElementById(), quindi ottiene il nodo radice tramite getRootNode(). 
// Se il nodo radice è uno ShadowRoot, il suo host (il selettore dello shadow host) viene recuperato utilizzando shadowHost.tagName.toLowerCase(). 
// Infine, il selettore dello shadow host viene stampato sulla console.



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
