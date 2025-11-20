import { server } from "inngest/next";

import {
  inngest,
  syncUserCreation,
  syncUserDeletation,
  syncUserUpdation,
} from "@/config/inngest";

export const { GET, POST, PUT } = server({
  client: inngest,
  function: [syncUserCreation, syncUserUpdation, syncUserDeletation],
});
