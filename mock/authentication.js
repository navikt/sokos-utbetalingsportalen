export default [
  {
    url: "/sokos-okonomiportalen-proxy/login/status",
    method: "get",
    response: () => {
      return {
        authenticated: true,
        level: "Level3",
      };
    },
  },
];
