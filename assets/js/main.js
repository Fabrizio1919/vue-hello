/* Descrizione:
Stampare a schermo un messaggio all’interno di un: puntare_a_destra: h1: puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data. */

const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Avatar',
            trama: 'Ex marine Jake Sully è stato reclutato per una missione sul pianeta Pandora con lo scopo di recuperare risorse naturali in esaurimento sulla Terra. Inaspettatamente si ritrova a voler proteggere il mondo magico al quale si sente stranamente legato.',
            
            avatar: 'https://www.avvenire.it/c/2022/PublishingImages/12d1cc14b5754a8699299649feb8f29c/84c84ba746_81687161.jpg?width=1024',

        }
    }
}).mount('#app')
