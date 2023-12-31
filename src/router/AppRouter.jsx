import { LoginPages } from "../auth";
import { Routes, Route } from "react-router-dom";

import { HerosRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="login/*"
                    element={
                        <PublicRoute>
                            <Routes>
                                <Route path="/*" element={<LoginPages />} />
                            </Routes>
                        </PublicRoute>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HerosRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};
