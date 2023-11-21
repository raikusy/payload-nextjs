import path from "path";
import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Pages from "@/collections/Pages";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { slateEditor } from "@payloadcms/richtext-slate";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

export default buildConfig({
  admin: {
    user: "admins",
  },
  collections: [Pages],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
