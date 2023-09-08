import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
    test("debe de retornar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test("(login) debe de llamar al autenticador y establecer el ", () => {
        const action = {
            type: types.login,
            payload: {
                id: "ABC",
                name: "Jose",
            },
        };

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload,
        });
    });
    test("(logout) debe de borrar el localstorage del usuario  y pasar el logged en false", () => {
        const state = {
            logged: true,
            user: {
                id: "ABC",
                name: "Jose",
            },
        };

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });
    });
});
