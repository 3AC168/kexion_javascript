
function letterCapitalize(sentence) {
    var splitStr = sentence.split(" "); // var splitStr = ['what', 'a', 'wonderful', 'world']
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].substring(0, 1).toUpperCase() + splitStr[i].slice(1); 
        // i = numbre de mot de splitStr(ici 3 mots) > parcouru chaque mot, et transformer chaque mot du 1er lettre en Majuscule concantener le rest du mot 
    }
    sentence = splitStr.join(" "); // rassembler les mots dans une phrase
    return sentence;
}
var test = "what a wonderful world";
console.log(letterCapitalize(test)); 

/*
function letterCapitalize(sentence) {
    var splitStr = sentence.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    sentence = splitStr.join(' ');
    return sentence
}
var test = 'bring your umbrella';
console.log(letterCapitalize(test)); */
