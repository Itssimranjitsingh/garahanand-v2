import { createClient } from 'next-sanity';
import { Env } from '@/libs/Env';

export const client = createClient({
  projectId: Env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: Env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});
