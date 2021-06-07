import React from "react";

const AuthContext = React.createContext(null);

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
