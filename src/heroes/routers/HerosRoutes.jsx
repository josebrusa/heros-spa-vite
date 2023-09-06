import { Routes, Route, Navigate } from "react-router-dom";

import { MarvelPages, DcPages, SearchPages, HeroPages } from "../";
import { Navbar } from "../../ui";

export const HerosRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path="dc" element={<DcPages />} />

                    <Route path="search" element={<SearchPages />} />
                    <Route path="hero" element={<HeroPages />} />

                    <Route path="/" element={<Navigate to={"marvel"} />} />
                </Routes>
            </div>
        </>
    );
};
