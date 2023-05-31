export default [
  {
    url: "/mock/auth",
    method: "get",
    status: 200,
    response: () => {
      return {
        name: "Ola Nordmann",
        navIdent: "x123456",
        adGroups: [
          "1b717a23-d376-471c-9fc6-356299fadc2b",
          "3269dc21-a724-4b59-bc37-6120d6af2adc",
          "b01fb216-fcb3-4ede-b7da-71fffe859763",
          "a366c33c-7456-4183-a0d5-80eb8195a7da",
        ],
      };
    },
  },
];
