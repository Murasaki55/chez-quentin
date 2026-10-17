"use server"
import { neon } from "@neondatabase/serverless";
import { refresh } from "next/cache";

export async function Commande(id :number, name : string) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    await sql`INSERT INTO orders (cocktail_id, guest_name) VALUES (${id},${name})`;

    return
}

export async function DeleteOrders() {
     const sql = neon(`${process.env.DATABASE_URL}`);
     await sql`DELETE FROM orders`;
     refresh()
     return
}

export async function Cocktails(name :string, ingredients: string, image : string) {
     const sql = neon(`${process.env.DATABASE_URL}`);
     const list = ingredients.split(',')
     await sql`INSERT INTO cocktails (name, ingredients, image_url) VALUES (${name}, ${list}, ${image})`;
     refresh()
     return
}