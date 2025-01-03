import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 px-4">
            <Link to="/" className="navbar-brand text-light">
                <h1>Star Wars</h1>
            </Link>
            <div className="ml-auto ms-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                        type="button"
                        id="dropdownMenuClickable"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="false"
                        aria-expanded="false"
                    >
                        <i className="fa-solid fa-star me-2"></i>
                        <span className="badge bg-warning text-dark">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
                        {store.favorites.map((item) => (
                            <li className="p-2 d-flex justify-content-between align-items-center" key={item._id}>
                                <span>{item.properties.name}</span>
                                <i
                                    onClick={() => actions.deleteFavorite(item._id)}
                                    className="fa-solid fa-trash-alt text-danger cursor-pointer"
                                ></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
