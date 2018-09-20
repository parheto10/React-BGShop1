import React from "react";
import ProduitsList from "./ProduitsList";



const produits = [
    {
        _id: 1,
        nom: 'T-Shirt Bleu',
        image: '/images/blueshirt1.jpg',
        prix: 6000,
        taille: 'M, L, XL',
        couleur: 'Bleu'
    },
    {
        _id: 2,
        nom: 'T-Shirt Vert',
        image: '/images/greenshirt1.jpg',
        prix: 6000,
        taille: 'M, L',
        couleur: 'Vert'
    },
    {
        _id: 3,
        nom: 'T-Shirt Rouge',
        image: '/images/redshirt4.jpg',
        prix: 7000,
        taille: 'L, XL, XXL',
        couleur: 'Rouge'
    },
    {
        _id: 4,
        nom: 'Asus GT72',
        image: '/images/asus_g.jpg',
        prix: 850000,
        taille: 'M, L, XL',
        couleur: 'Bleu'
    },
    {
        _id: 5,
        nom: 'Asus GTX 1070',
        image: '/images/asus1.jpg',
        prix: 850000,
        taille: 'M, L, XL',
        couleur: 'Bleu'
    },
    {
        _id: 6,
        nom: 'MacBook Pro 2017',
        image: '/images/macbookpro.jpg',
        prix: 120000,
        taille: 'M, L, XL',
        couleur: 'Bleu'
    },
    {
        _id: 7,
        nom: 'MSI GT72 Dragon Edition',
        image: '/images/msi.jpg',
        prix: 120000,
        taille: 'M, L, XL',
        couleur: 'Bleu'
    },
    {
        _id: 8,
        nom: 'Hisense M2041',
        image: '/images/hisense.jpg',
        prix: 120000,
        taille: '40"',
        couleur: 'Noire'
    },
    {
        _id: 9,
        nom: 'Apple Iphone 6S',
        image: '/images/iphone6.jpg',
        prix: 120000,
        taille: '5.7"',
        couleur: 'Or'
    },
    {
        _id: 10,
        nom: 'Disque Dur WD',
        image: '/images/dd3.jpg',
        prix: 45000,
        taille: '4"',
        couleur: 'Noir'
    },
    {
        _id: 11,
        nom: 'Casque Audio Beat By Dré',
        image: '/images/beetbydre.jpg',
        prix: 50000,
        taille: '',
        couleur: 'Or'
    },
    {
        _id: 12,
        nom: 'Battlefield 1',
        image: '/images/bf1.jpg',
        prix: 60000,
        taille: '',
        couleur: 'Or'
    },


];



const App = () => (
    <div className="ui container">
        <h1 align="center" margin-top="10px">Bienvenus sur IvoireBoutik</h1>
        <h4 align="center">Boutique en ligne A l'Ivoirienne</h4>
        <ProduitsList produits={produits} />
    </div>
)

export default App;