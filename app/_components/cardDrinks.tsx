export const instant = false
import { neon } from "@neondatabase/serverless";
import { DeleteButton } from "./formCocktails";

import "../card.css";

export default async function Drinks() {
    
    const sql = neon(`${process.env.DATABASE_URL}`);
    const drinks = await sql`SELECT * FROM cocktails`;

    return (
        <div>
            <ul>
            {drinks.map((c) => (
                <li className="card row" key={c.id}>
                    <h3 className="card-title">{c.name}</h3>
                    <DeleteButton id={c.id}/>
                </li>
            ))}
            </ul>
        </div>
    )
}