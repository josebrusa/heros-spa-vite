import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { Route, Routes, MemoryRouter } = require("react-router-dom");

describe("Prueba en Private Route", () => {
    test("debe de mostrar el children si esta autenticado", () => {
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: {
                name: "jose",
                id: "ABC",
            },
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/search?q=batman"]}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "lastPath",
            "/search?q=batman"
        );
        screen.debug();
    });
});
