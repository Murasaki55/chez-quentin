"use client"
import { Commande } from "../_data/commande"

export default function CommanderButton({ cocktailId }: { cocktailId: number }) {
    function commandeClick(id:number){
        Commande(id)
    }

    return (
        <button className="btn btn-success" onClick={() => commandeClick(cocktailId)}>Commander</button>
    )
}