import { MarvelPages, DcPages } from "../heroes";
import { LoginPages } from "../auth";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "../ui/components";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPages />} />
                <Route path="dc" element={<DcPages />} />
                <Route path="login" element={<LoginPages />} />
                <Route path="/" element={<Navigate to={"marvel"} />} />
            </Routes>
        </>
    );
};
