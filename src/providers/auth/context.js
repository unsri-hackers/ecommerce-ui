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
import { browserName } from "react-device-detect";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [reqHeader, setReqHeader] = useState({
    "Device-id": "",
    "Content-Type": "application/json",
    Authorization: "",
  });
  const deviceId = `${browserName} ${new Date().toLocaleString()}`;
  const [auth, setAuth] = useLocalStorageState("auth", {
    token: "",
    user: "",
    deviceId: "",
  });
  useEffect(() => {
    setReqHeader((reqHeader) => {
      return {
        ...reqHeader,
        Authorization: `Bearer ${auth.token}`,
        "Device-id": auth.deviceId,
      };
    });
  }, [auth]);

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
        headers: {
          ...reqHeader,
          "Device-id": deviceId,
        },
      };
    },
    {
      manual: true,
      throwOnError: true,
      onSuccess: ({ result }, params) => {
        setAuth({
          token: result.accessToken,
          user: result.username,
          deviceId: deviceId,
        });
        navigate("/");
      },
      mock: mocks.login,
    }
  );

  const memoedValue = useMemo(
    () => ({
      login,
      auth,
      reqHeader,
    }),
    [auth, login, reqHeader]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
