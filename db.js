import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Admin@#54321",
  port: 3306,
  database: "crud_node",
});
