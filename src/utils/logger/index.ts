import { createLogger } from "./logger";
import { createTeamLogger } from "./team-log/teamLogger";

export const logger = createLogger();

export const teamLogger = createTeamLogger();
