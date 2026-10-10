export const instant = false
import { neon } from "@neondatabase/serverless";

export default async function Home() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const cocktails = await sql`SELECT * FROM cocktails`;

  return (
    <ul>
      {cocktails.map((c) => (
        <li key={c.id}>
          {c.name} : {c.ingredients.join(", ")}
        </li>
      ))}
    </ul>
  );
}