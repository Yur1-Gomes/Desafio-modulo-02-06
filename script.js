let proprieadades = ["Calmo","Metódico","Esforçado"];
proprieadades.splice(0,0,"Honesto");
proprieadades.splice(3,1);
console.log(proprieadades);

const cadastro = [
    {
        nome:"Carmo",
        idade:25,
        telefone:997182396,
        amigos:["Joel","Edir","Karen","Inara"]
    },
    {
        nome:"Andrea",
        idade:33,
        telefone:981302431,
        amigos:["Sonia","Tatiana","Karina","Alícia"]
    },
    {
        nome:"Willian",
        idade:21,
        telefone:997415856,
        amigos:["Gustavo","Virgínia","Mario","Walter"]
    },
    {
        nome:"Ciara",
        idade:19,
        telefone:969636648,
        amigos:["Alberto","Katia","Milton","Fernanda"]
    },
    {
        nome:"Tiffany",
        idade:28,
        telefone:980197336,
        amigos:["Rebecca","Liane","Flávia","Rosa"]
    }
]

console.log(cadastro[0].amigos[1]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[1]);
console.log(cadastro[3].amigos[2]);
console.log(cadastro[4].amigos[3]);