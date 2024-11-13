import { HttpResponse, http } from "msw";

export const handlers = [
    http.get("/mock/auth", () => {
        return HttpResponse.json(
            {
                name: "Ola Mohammad",
                navIdent: "x123456",
                adGroups: [
                    "1b717a23-d376-471c-9fc6-356299fadc2b",
                    "b01fb216-fcb3-4ede-b7da-71fffe859763",
                    "a13b4176-e328-4e1c-b181-ff676a7146b1",
                    "e0023d91-26bc-4d5d-95ba-3148b6123afc",
                    "391bec9e-e71e-42cb-a030-56c394dd13fd",
                    "bdcedce3-dab5-4b68-b1d3-8625cd0d3b55",
                    "0de8d01f-8ad0-4391-841c-55392956bc17",
                    "48a80bbb-be45-4ef6-aab8-21604f057f47"
                ]
            }, { status: 200 },
        );
    }),
];