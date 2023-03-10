export default [
  {
    url: "/sokos-op-proxy/login/status",
    method: "get",
    status: 401,
    response: () => {
      return {
        authenticated: false,
        level: "Level3",
      };
    },
  },
];
