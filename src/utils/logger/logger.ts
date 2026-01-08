import pino, { type DestinationStream, type LoggerOptions } from "pino";

export const createLogger = (
	defaultConfig: LoggerOptions = {},
	destination?: DestinationStream,
): pino.Logger =>
	pino(
		{
			...defaultConfig,
			timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
			messageKey: "message",
			formatters: {
				level: (label) => {
					return { level: label.toUpperCase() };
				},
				// biome-ignore lint/suspicious/noExplicitAny: <use any to allow logging arbitrary objects>
				log: (object: any) => {
					if (object.err) {
						// backendlogger has an Error-instance, frontendlogger has already serialized it
						const err =
							object.err instanceof Error
								? pino.stdSerializers.err(object.err)
								: object.err;
						object.stack_trace = err.stack;
						object.type = err.type;
						object.message = err.message;
						delete object.err;
					}

					return object;
				},
			},
		},
		destination,
	);
