import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepeino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        Nomefazenda: "Jennie Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha!",
        preco: "R$40,00",
        botao: "Comprar agora",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepeino,
            },  {
                nome: "Abóbora",
                imagem: abobora,
            },
            
        ]
    },
};

export default cesta; 