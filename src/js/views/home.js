import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Cardcharacter from "../component/Cardcharacter.jsx";
import Cardplanet from "../component/Cardplanet.jsx";
import Cardvehicles from "../component/Cardvehicles.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container py-4">
            <div className="row">
                
                <div className="col-12 mb-4">
                    <h2 className="text-primary text-center fw-semibold mb-3">
                        Characters
                    </h2>
                    <div className="scroll-section d-flex overflow-auto">
                        {store.character.map((item) => (
                            <Cardcharacter person={item} key={item.uid} />
                        ))}
                    </div>
                </div>

                
                <div className="col-12 mb-4">
                    <h2 className="text-success text-center fw-semibold mb-3">
                        Planets
                    </h2>
                    <div className="scroll-section d-flex overflow-auto">
                        {store.planets.map((item) => (
                            <Cardplanet planet={item} key={item.uid} />
                        ))}
                    </div>
                </div>

                
                <div className="col-12">
                    <h2 className="text-danger text-center fw-semibold mb-3">
                        Vehicles
                    </h2>
                    <div className="scroll-section d-flex overflow-auto">
                        {store.vehicles.map((item) => (
                            <Cardvehicles vehicles={item} key={item.uid} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};