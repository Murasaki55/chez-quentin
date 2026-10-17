"use client"
import { Commande } from "../_data/commande"
import { useRef } from "react";
import { useState } from "react";


export default function CommanderButton({ cocktailId }: { cocktailId: number }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [name, setName] = useState("");
    
    function commandeClick(){
        Commande(cocktailId, name)
    }

    return (
        <div>
            <button className="btn btn-success" onClick={() => dialogRef.current?.showModal()}>Commander</button>
            <dialog ref={dialogRef} id="modal">
                <form method="dialog" className="column" action="/search">
                    <label>Nom de la commande</label>
                    <input type="text" className="input" onChange={(e) => setName(e.target.value)}/>
                    <button className="btn_success" onClick={commandeClick}>Valider la commande</button>
                </form>
            </dialog>
        </div>
        
    )
}