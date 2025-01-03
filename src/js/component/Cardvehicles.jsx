import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css"

const Cardvehicles = ({ vehicles }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card shadow-sm rounded border-0">
            <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                className="card-img-top rounded"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title text-center">{vehicles.properties.name}</h5>
                <p className="card-text mb-1">Model: {vehicles.properties.model}</p>
                <p className="card-text mb-1">Length: {vehicles.properties.length}</p>
                <p className="card-text">Capacity: {vehicles.properties.passengers}</p>
                <div className="footer-card d-flex justify-content-between align-items-center mt-3">

                    <Link to={`/vehicles/${vehicles.uid}`} className="btn btn-outline-secondary">
                        View Info
                    </Link>

                    <button onClick={() => actions.addFavorites(vehicles)} className="btn btn-outline-secondary">
                        <i className="fa-solid fa-star"></i>
                    </button>



                </div>
            </div>
        </div>
    );
}

export default Cardvehicles;