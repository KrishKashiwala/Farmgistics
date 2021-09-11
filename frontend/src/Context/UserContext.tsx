import { createContext } from 'react'

const UserContext = createContext({
    Id: null, 
    Token: null,
    setUser: ( Id, Token ) => {},
    removeUser: () => {},
});

export default UserContext;