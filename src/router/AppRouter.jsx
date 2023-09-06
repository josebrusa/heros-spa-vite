import { LoginPages } from "../auth";
import { Routes, Route } from "react-router-dom";

import { HerosRoutes } from "../heroes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPages />} />

                <Route path="/*" element={<HerosRoutes />} />
            </Routes>
        </>
    );
};
