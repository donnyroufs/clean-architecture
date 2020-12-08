import "dotenv/config";

export default {
  development: {
    client: "pg",
    connection: {
      database: "clean-architecture",
      user: "postgres",
      password: "postgres",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
