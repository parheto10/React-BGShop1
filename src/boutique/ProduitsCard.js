import React from "react";
import PropTypes from "prop-types";

const ProduitsCard = ({ produit }) => (
    <div className="ui card">
        <div className="image">
            <span className="ui green ribbon label">
                {produit.prix} FCFA
			</span>
            <img src={produit.image} alt="bf5" />
        </div>
        <div align="center" className="content">
            <a href="#" className="header">{produit.nom}</a>
            <div className="meta">
                Taille:  {produit.taille}&nbsp;
				{produit.couleur}&nbsp;
                <i align="right" className="icon like" /> {}
            </div>
        </div>
    </div>
);

ProduitsCard.prototype = {
    produit: PropTypes.shape({
        nom: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        taille: PropTypes.string.isRequired,
        prix: PropTypes.number.isRequired,
        couleur: PropTypes.string.isRequired,
    }).isRequired
}

export default ProduitsCard;
