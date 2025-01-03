import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/character.css";

const Character = () => {
    const { store, actions } = useContext(Context);
    const { idCharacter } = useParams();
    const [infoCharacter, setinfoCharacter] = useState(null);

    const getInfoCharacter = async () => {
        try {
            const response = await fetch(store.urlBase + "people/" + idCharacter);
            const data = await response.json();
            if (response.ok) {
                setinfoCharacter(data.result);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getInfoCharacter(idCharacter);
    }, []);

    return (
        <div className="container pt-5">
            <div className="row mb-4">
                
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${infoCharacter?.uid}.jpg`}
                        alt={infoCharacter?.properties.name}
                        className="img-fluid rounded-3 shadow-lg" // Cambié a `rounded-3` para bordes más suaves
                    />
                </div>
               
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="text-center text-primary">{infoCharacter?.properties.name}</h1>
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
                {['name', 'birth_year', 'gender', 'height', 'skin_color', 'eye_color'].map((field, index) => (
                    <div key={index} className="col-12 col-md-2 mb-3 mb-md-0">
                        <h5 className="text-center text-success">{field.replace('_', ' ').toUpperCase()}</h5>
                        <p className="text-center">{infoCharacter?.properties[field]}</p>
                    </div>
                ))}
            </div>

            
            <div className="text-center mt-5">
                <a href="/" className="btn btn-secondary">
                    Back to characters
                </a>
            </div>
        </div>
    );
};

export default Character;