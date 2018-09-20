import React from "react";
import ProduitsCard from "./ProduitsCard";
import PropTypes from "prop-types";


const ProduitsList = ({ produits }) => (
    <div className="ui four cards">
        {produits.lenght === 0 ? (
            <div className="ui icon message">
                <div className="icon warning">
                    <div className="content">
                        <div className="header">
                            Aucun Produit Disponible !
                        </div>
                        <p>Aucun disponible dans la Boutique a ce Jours !</p>
                    </div>
                </div>
            </div>
        ) : (
                produits.map(produit => <ProduitsCard produit={produit} key={produit._id} />)
            )};
    </div>
);


ProduitsList.prototypes = {
    produit: PropTypes.arrayOf(PropTypes.object).isRequired
}

ProduitsList.defaultProps = {
    produit: []
}

export default ProduitsList;

