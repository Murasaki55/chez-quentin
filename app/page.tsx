export const instant = false
import Header from "./_components/header";
import Card from "./_components/card";

export default async function Home() {

  return (
    <div>
      <Header/>
      <div className="body">
        <h1>Bienvenue Chez Quentin !</h1>
        <Card/>
      </div>
    </div>

  );
}