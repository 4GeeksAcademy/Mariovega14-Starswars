import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/vehicle.css";

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const { idVehicle } = useParams();
    const [infoVehicle, setInfoVehicle] = useState(null);

    const getVehicle = async () => {
        try {
            const response = await fetch(store.urlBase + "vehicles/" + idVehicle);
            const data = await response.json();
            if (response.ok) {
                setInfoVehicle(data.result);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getVehicle();  
    }, [idVehicle]); 

    return (
        <div className="container pt-5">
            <div className="row mb-4">
                
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <img
                        className="img-fluid rounded-3 shadow-lg" // Imagen rectangular con bordes suavizados
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${infoVehicle?.uid}.jpg`}
                        alt={infoVehicle?.properties.name}
                    />
                </div>
                
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="text-center text-primary">{infoVehicle?.properties.name}</h1>
                    <p className="text-center text-muted pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas quia unde
                        deserunt iusto molestias at porro modi, recusandae, quo facilis. Ut error est tenetur
                        nobis vitae sapiente at pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda voluptas quia unde deserunt iusto molestias at porro modi, recusandae, quo
                        facilis. Ut error est tenetur nobis vitae sapiente at pariatur?
                    </p>
                </div>
            </div>

            
            <div className="row border-top pt-4">
                {['name', 'model', 'passengers', 'length', 'cost_in_credits', 'vehicle_class'].map((field, index) => (
                    <div key={index} className="col-12 col-md-2 mb-3 mb-md-0">
                        <h5 className="text-center text-success">{field.replace('_', ' ').toUpperCase()}</h5>
                        <p className="text-center">{infoVehicle?.properties[field]}</p>
                    </div>
                ))}
            </div>

            
            <div className="text-center mt-5">
                <a href="/" className="btn btn-secondary">
                    Back to vehicles
                </a>
            </div>
        </div>
    );
};

export default Vehicles;