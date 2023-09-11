import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/NavBar";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));
describe("Pruebas en el componente <NavBar/>", () => {
    const contextValue = {
        logged: true,
        user: {
            name: "jose",
            id: "ABC",
        },
        logout: jest.fn(),
    };

    beforeEach(() => jest.clearAllMocks());

    test("debe de mostrar el nombre del usuario", () => {
        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText("jose")).toBeTruthy();
    });

    test("debe de llamar el logout y navigate cuando se hace click en el boton ", () => {
        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBnt = screen.getByRole("button");
        fireEvent.click(logoutBnt);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {
            replace: true,
        });
    });
});
