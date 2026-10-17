"use server"
import { neon } from "@neondatabase/serverless";

export async function Commande(id :number, name : string) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    await sql`INSERT INTO orders (cocktail_id, guest_name) VALUES (${id},${name})`;

    return
}

export async function DeleteOrders() {
     const sql = neon(`${process.env.DATABASE_URL}`);
     await sql`DELETE FROM orders`;
}