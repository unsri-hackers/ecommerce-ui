import { navigate } from "@reach/router";
import { useLocalStorageState } from "ahooks";
import React, {
  useState,
  createContext,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { useApi } from "../../hooks/useApi";
import mocks from "../../mocks";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [reqHeader, setReqHeader] = useState({
    "Device-id": "",
    "Content-Type": "application/json",
    Authorization: "",
  });
  // const [user, setUser] = useState();
  const [authToken, setAuthToken] = useLocalStorageState("authToken", "");
  const [authUser, setAuthUser] = useLocalStorageState("authUser", "");
  const [authId, setAuthId] = useLocalStorageState("authId", "");
  useEffect(() => {
    setReqHeader((reqHeader) => {
      return {
        ...reqHeader,
        Authorization: `Bearer ${authToken}`,
        "Device-id": authId,
      };
    });
  }, [authToken, authId]);

  // const getCurrentUser = useApi(
  //   {
  //     url: "https://deuvox-dev-1.herokuapp.com/api/v1/users",
  //     method: "get",
  //     headers: reqHeader,
  //   },
  //   {
  //     manual: true,
  //     throwOnError: true,
  //     onSuccess: ({ result }, params) => {
  //       if (result !== null) {
  //         setUser({ username: result.vendor.sallerName });
  //         // navigate("/");
  //       }
  //     },
  //     mock: mocks.users,
  //   }
  // );
  // const { run: runCurrentUser } = getCurrentUser;
  //  useEffect(() => {
  //     runCurrentUser();
  //   }, [runCurrentUser]);

  const login = useApi(
    (values) => {
      return {
        url: "https://deuvox-dev-1.herokuapp.com/api/v1/login",
        method: "post",
        body: JSON.stringify({
          username: values.email,
          password: values.password,
        }),
        headers: reqHeader,
      };
    },
    {
      manual: true,
      throwOnError: true,
      onSuccess: ({ result }, params) => {
        setAuthToken(result.accessToken);
        setAuthUser(result.username);
        navigate("/");
      },
      mock: mocks.login,
    }
  );

  const memoedValue = useMemo(
    () => ({
      login,
      authToken,
      authUser,
      reqHeader,
      setAuthId,
    }),
    [authToken, authUser, login, reqHeader, setAuthId]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
