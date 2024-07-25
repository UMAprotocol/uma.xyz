import { sendGAEvent } from "@next/third-parties/google";

// ~~~~~~~~~~~~~~ CONSTANTS ~~~~~~~~~~~~~~ //
const EVENT_LAUNCH_APP = "EVENT_LAUNCH_APP";

// ~~~~~~~~~~~~~~~ METHODS ~~~~~~~~~~~~~~~ //
export function launchAppTrigger() {
  sendGAEvent({ event: EVENT_LAUNCH_APP });
}
