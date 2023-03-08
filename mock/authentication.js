export default [
  {
    url: "/sokos-op-auth/login/status",
    method: "get",
    response: () => {
      return {
        authenticated: true,
        level: "Level3",
      };
    },
  },
];
