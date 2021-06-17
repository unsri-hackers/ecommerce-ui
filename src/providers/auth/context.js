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
    "Device-id": "deviceid",
    Authorization: "",
  });
  const [user, setUser] = useState();
  const [token, setToken] = useLocalStorageState("token", "");

  useEffect(() => {
    setReqHeader((reqHeader) => {
      return { ...reqHeader, Authorization: `Bearer ${token}` };
    });
  }, [token]);

  const getCurrentUser = useApi(
    {
      url: "https://deuvox-dev-1.herokuapp.com/api/v1/users",
      method: "get",
      headers: reqHeader,
    },
    {
      manual: true,
      throwOnError: true,
      onSuccess: ({ result }, params) => {
        if (result !== null) {
          console.log("succsess");
          console.log(result);
          console.log(params);
          // setUser({ username: result.vendor.sallerName });
          // navigate("/");
        }
      },
      onError: (err, params) => {
        console.log("error");
        console.log(err);
        console.log(params);
      },
      mock: mocks.users,
    }
  );
  const { run: runCurrentUser } = getCurrentUser;

  useEffect(() => {
    runCurrentUser();
  }, [runCurrentUser]);

  const login = useApi(
    (values) => {
      return {
        url: "https://deuvox-dev-1.herokuapp.com/api/v1/login",
        method: "post",
        body: JSON.stringify({
          username: values.email,
          password: values.password,
        }),
        headers: {
          "Device-id": "deviceid",
        },
      };
    },
    {
      manual: true,
      throwOnError: true,
      onSuccess: ({ result }, params) => {
        console.log("succsess");
        console.log(result);
        console.log(params);
        setUser({ username: result.username });
        setToken(result.accessToken);
        navigate("/");
      },
      onError: (err, params) => {
        console.log("error");
        console.log(err);
        console.log(params);
      },
      mock: mocks.login,
    }
  );

  const memoedValue = useMemo(
    () => ({
      user,
      login,
      token,
      getCurrentUser,
    }),
    [user, token, login, getCurrentUser]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
