const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { MemoryRouter } = require("react-router-dom");
const { Route, Routes } = require("react-router-dom");

describe("Prueba al <PubliRoute/>", () => {
    test("Debe de mostrar el children si no esta autenticado", () => {
        const contextVelue = {
            logged: false,
        };
        render(
            <AuthContext.Provider value={contextVelue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta publica")).toBeTruthy();
        screen.debug();
    });

    test("debe de  navegar si no esta autenticado", () => {
        const contextVelue = {
            logged: true,
            user: {
                name: "jose",
                id: "ABC",
            },
        };

        render(
            <AuthContext.Provider value={contextVelue}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <h1>Ruta publica</h1>
                                </PublicRoute>
                            }
                        />
                        <Route path="marvel" element={"pagina marvel"} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("pagina marvel")).toBeTruthy();
        screen.debug();
    });
});
