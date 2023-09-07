import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterByHero = ({ characters, alter_ego }) => {
    // if (alter_ego === characters) return <></>;
    // return <p>{characters}</p>;

    return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImgUrl = `/assets/heros/${id}.jpg`;
    return (
        <div
            className="container  animate__animated animate__fadeIn"
            style={{ width: "12rem" }}
        >
            <div className="card" style={{ width: "12rem" }}>
                <img
                    src={heroImgUrl}
                    className="card-img-top"
                    style={{ width: "12rem" }}
                    alt={superhero}
                />
                <div className="card-body" style={{ width: "12rem" }}>
                    <h2 className="card-title">{superhero}</h2>
                    <p className="card-text">{alter_ego}</p>
                    <CharacterByHero
                        characters={characters}
                        alter_ego={alter_ego}
                    />
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <p className="card-text">{publisher}</p>
                    <Link to={`/hero/${id}`}>info...</Link>
                </div>
            </div>
        </div>
    );
};

CharacterByHero.propTypes = {
    alter_ego: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
};
