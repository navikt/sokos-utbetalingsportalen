export default [
  {
    url: "/mock/auth",
    method: "get",
    status: 200,
    response: () => {
      return {
        name: "Ola Mohammad",
        navIdent: "x123456",
        adGroups: [
          "1b717a23-d376-471c-9fc6-356299fadc2b",
          "b01fb216-fcb3-4ede-b7da-71fffe859763",
          "a13b4176-e328-4e1c-b181-ff676a7146b1",
          "e0023d91-26bc-4d5d-95ba-3148b6123afc",
        ],
      };
    },
  },
];
