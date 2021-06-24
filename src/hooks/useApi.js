import useRequest from "@ahooksjs/use-request";
import config from "../config";

// useApi hook wraps ahooks' useRequest.
// It can return mock response by specify REACT_APP_USE_MOCK_DATA to true
// and params.mock to mock object.
export const useApi = (
  service,
  params,
) => {
  const mockData = async file => {
    return new Response(JSON.stringify(file), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  };

  return useRequest(service, {
    ...params,
    requestMethod: config.useMockData
      ? () => mockData(params.mock).then(response => response.json())
      : null, // Use default fetch method.
  });
};
