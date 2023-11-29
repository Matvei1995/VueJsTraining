//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {

    livre:'{unLivre}',
    titre:'Les mémoires de Steven Seagal',
    id:'1234567890',
    array:["du texte",99],
    namee:{
        names:"COOL",
        tel:12748312,
        random : Math.random()
    }


};
},
methods :{
    displayRandomBook(){
        let chooseRandomNumber = Math.random();
        if(chooseRandomNumber > 0.5){
            return 'Word Book';
    }else{
        return "Silo"
    }
},
}

//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#bookApp');