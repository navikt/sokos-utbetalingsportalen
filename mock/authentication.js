export default [
  {
    url: "/mock/auth",
    method: "get",
    status: 401,
    response: () => {
      return {
        brukerInformasjon: {
          name: "Ola Nordmann",
          NAVident: "x123456",
        },
      };
    },
  },
];
