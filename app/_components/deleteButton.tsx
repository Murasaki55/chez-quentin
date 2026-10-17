"use client"
import { DeleteOrders } from "../_data/commande"

export default function DeleteButton() {
    
    return (
        <button className="btn btn-danger" onClick={DeleteOrders}>Supprimer les commandes</button>
    )
}