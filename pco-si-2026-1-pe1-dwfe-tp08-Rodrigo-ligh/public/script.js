const catalogo = [
{
id : 1,
titulo : "O Poderoso Chefão ",
tipo : "filme",
ano :1972,
generos :["policial"," Drama"],
nota : 9.2,
assistido : false,
},

{
id : 2,
titulo : "Um Sonho de Liberdade ",
tipo : "filme",
ano :1994,
generos :"Drama",
nota : 9.3,
assistido : false,
},

{
id : 3,
titulo : "Cidadão Kane ",
tipo : "filme",
ano :1941,
generos :["Mistério"," Drama"],
nota :  8.3,
assistido : false,
},

{
id : 4,
titulo : "Batman: O Cavaleiro das Trevas ",
tipo : "filme",
ano :2008,
generos :["policial"," Drama","Ação"],
nota : 9.0,
assistido : true,
},

{
id : 5,
titulo : "A Lista de Schindler ",
tipo : "filme",
ano :1993,
generos :["História"," Drama","Biografia"],
nota : 9.0,
assistido : false,
},

{
id : 6,
titulo : "O Mágico de Oz ",
tipo : "filme",
ano :1939,
generos :[" Fantasia"," Família","Aventura"],
nota : 8.1,
assistido : false,
},
];

// b.2
console.log(catalogo);
console.log("Título do primeiro item", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);
const terceiroFilme = catalogo[2];
if (terceiroFilme.generos && terceiroFilme.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroFilme.generos[1]);
} else {
    console.log("Somente um gênero");
};
catalogo.forEach(filme =>{
console.log(filme.tipo)
console.log(filme.titulo)
console.log(filme.ano)
});

const titulosEmCaixaAlta = catalogo.map(filme => filme.titulo.toLocaleUpperCase());
console.log(titulosEmCaixaAlta);
const naoAssistidos = catalogo.filter(filme => filme.assistido === false);

console.log(naoAssistidos);
console.log(naoAssistidos.length);
const nota9 = catalogo.find(filme => filme.nota >= 9  );
console.log(nota9.titulo);