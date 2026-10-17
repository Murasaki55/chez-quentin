export const instant = false
import { neon } from "@neondatabase/serverless";
import "../card.css";

export default async function Card() {
    
    const sql = neon(`${process.env.DATABASE_URL}`);
    const orders = await sql`SELECT * FROM orders od JOIN cocktails c ON(od.cocktail_id = c.id)`;

    return (
        <div>
            <ul>
            {orders.map((c) => (
                <li className="card row" key={c.orders_id}>
                    <h1 className="card-title">{c.guest_name}</h1>
                    <p className="itemsCard">{c.name}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}