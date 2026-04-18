import { createClient, type SanityClient } from "@sanity/client";
import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "@/sanity/env";

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: "published",
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;
