import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";



export const Planet = () => {
	const { store, actions } = useContext(Context)
    const {idPlanet} = useParams() 
    const [infoPlanet,setinfoPlanet] = useState(null)

    const getPlanet = async () => {
        try{
            const response = await fetch(store.urlBase+"planets/"+idPlanet)
            const data = await response.json() 
            if(response.ok){
                setinfoPlanet(data.result)
            }
        }catch(error){
            console.log(error)
        }
    } 

    useEffect(()=>{
        getPlanet(idPlanet)
    },[])

	return (
		<div className="container">
			<div className="row" >
                <div className="col-12 col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${infoPlanet?.uid==1? Math.floor(Math.random()*10+2):infoPlanet?.uid}.jpg`} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{infoPlanet?.properties.name}</h1>
                    <p className="text-center pt-2" >
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
                    <h5 >Nombre</h5>
                    <p>{infoPlanet?.properties.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5 >Poblacion</h5>
                    <p>{infoPlanet?.properties.population}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Diametro</h5>
                    <p>{infoPlanet?.properties.diameter}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Clima</h5>
                    <p>{infoPlanet?.properties.climate}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Periodo Orbital</h5>
                    <p>{infoPlanet?.properties.orbital_period}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Periodo Rotacion</h5>
                    <p>{infoPlanet?.properties.rotation_period}</p>
                </div>

            </div>
		</div>
	);
};