import { heroes } from "../data/heroes";

export const getHerosByPublisher = (publisher) => {
    const validPublisers = ["DC Comics", "Marvel Comics"];
    if (!validPublisers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
