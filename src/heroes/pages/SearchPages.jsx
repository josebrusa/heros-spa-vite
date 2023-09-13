import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../hooks/useForm";

import { getHerosByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPages = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);
    const heroes = getHerosByName(q);

    const showSearch = q.length === 0;
    const showSearchError = q.length > 0 && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    };
    return (
        <>
            <div className="row">
                <h4>Search</h4>
                <hr />
                <div className="col-5">
                    <h4>Encuentra tu Heroe</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} aria-label="form">
                        <input
                            type="text"
                            placeholder="search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-3">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Heroe</h4>
                    <hr />
                    {/* {q === "" ? ( <div className="alert alert-primary"> Encuentra un Heroe </div>) : (heroes.length === 0 && (<div className="alert alert-danger"> No hay resultados del heroe {q}</div> ) )} */}
                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? "" : "none" }}
                    >
                        Encuentra un Heroe
                    </div>
                    <div
                        aria-label="alert-danger"
                        className="alert alert-danger animate__animated animate__fadeInRight"
                        style={{ display: showSearchError ? "" : "none" }}
                    >
                        No hay resultados del heroe {q}
                    </div>
                    <div className="d-flex flex-wrap">
                        {heroes.map((hero) => (
                            <HeroCard key={hero.id} {...hero} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
