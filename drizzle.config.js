export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:U6Gk5ofpzvZB@ep-shiny-hill-a5am48bn.us-east-2.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:U6Gk5ofpzvZB@ep-shiny-hill-a5am48bn.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};