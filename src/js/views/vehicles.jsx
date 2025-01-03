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
        <div className="container pt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img
                        className="image"
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${infoVehicle?.uid}.jpg`}
                        alt={infoVehicle?.properties.name}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{infoVehicle?.properties.name}</h1>
                    <p className="text-center pt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas quia unde
                        deserunt iusto molestias at porro modi, recusandae, quo facilis. Ut error est tenetur
                        nobis vitae sapiente at pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda voluptas quia unde deserunt iusto molestias at porro modi, recusandae, quo
                        facilis. Ut error est tenetur nobis vitae sapiente at pariatur?
                    </p>
                </div>
            </div>
            <div className="row border-top color text-center mt-5 pt-4">
                <div className="col-12 col-md-2">
                    <h5>Name</h5>
                    <p>{infoVehicle?.properties.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Model</h5>
                    <p>{infoVehicle?.properties.model}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Capacity</h5>
                    <p>{infoVehicle?.properties.passengers}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Length</h5>
                    <p>{infoVehicle?.properties.length}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Cost</h5>
                    <p>{infoVehicle?.properties.cost_in_credits}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Class</h5>
                    <p>{infoVehicle?.properties.vehicle_class}</p>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;