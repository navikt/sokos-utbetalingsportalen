import { register } from "@prometheus-io/client";

export async function GET() {
	return new Response(await register.metrics(), {
		status: 200,
		headers: {
			"Content-Type": register.contentType,
		},
	});
}
