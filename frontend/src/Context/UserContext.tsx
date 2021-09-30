import { createContext } from "react";

const UserContext = createContext({
  Id: null,
  Token: null,
  setValue: (_I, _T) => {},
});

export default UserContext;
