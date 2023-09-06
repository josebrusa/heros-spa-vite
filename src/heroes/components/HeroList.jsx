import PropTypes from "prop-types";

import { getHerosByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
    const heroes = getHerosByPublisher(publisher);

    return (
        <ul>
            {heroes.map((hero) => (
                <li key={hero.id}>{hero.superhero}</li>
            ))}
        </ul>
    );
};

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
};
