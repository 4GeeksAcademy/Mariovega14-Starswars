import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planet = () => {
  const { store, actions } = useContext(Context);
  const { idPlanet } = useParams();
  const [infoPlanet, setinfoPlanet] = useState(null);

  const getPlanet = async () => {
    try {
      const response = await fetch(store.urlBase + "planets/" + idPlanet);
      const data = await response.json();
      if (response.ok) {
        setinfoPlanet(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlanet(idPlanet);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        
        <div className="col-12 col-md-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${
              infoPlanet?.uid == 1 ? Math.floor(Math.random() * 10 + 2) : infoPlanet?.uid
            }.jpg`}
            alt={infoPlanet?.properties.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="text-center text-primary">{infoPlanet?.properties.name}</h1>
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
        {['name', 'population', 'diameter', 'climate', 'orbital_period', 'rotation_period'].map((field, index) => (
          <div key={index} className="col-12 col-md-2 mb-3 mb-md-0">
            <h5 className="text-center text-success">{field === 'name' ? 'Name' : field.replace('_', ' ').toUpperCase()}</h5>
            <p className="text-center">{infoPlanet?.properties[field]}</p>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-secondary">
          Back to planets
        </Link>
      </div>
    </div>
  );
};