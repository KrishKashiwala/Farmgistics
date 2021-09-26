import { createContext } from 'react'

const UserContext = createContext({
    Id: null,
    Token: null,
    setValue: (I,T)=>{}
});

export default UserContext;