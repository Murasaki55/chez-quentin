export const instant = false
import Header from "../_components/header";
import Card from "../_components/cardOrders";
import DeleteButton from "../_components/deleteButton";

export default async function Home() {
  return (
    <div>
      <Header/>
      <div className="body">
        <h1>Admin</h1>
        <Card/>
        <DeleteButton/>
      </div>
    </div>

  );
}