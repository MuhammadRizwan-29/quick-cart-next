"use client";

import { serve } from "inngest/next";

import {
  inngest,
  syncUserCreation,
  syncUserDeletation,
  syncUserUpdation,
} from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  function: [syncUserCreation, syncUserUpdation, syncUserDeletation],
});
