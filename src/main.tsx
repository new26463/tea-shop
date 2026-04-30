import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ConditionalExample from "./learn-component/ConditionalExample.tsx";
import DeleteButton from "./learn-component/DeleteButton.tsx";
import HelloVariable from "./learn-component/HelloVariable.tsx";
import MyCard from "./learn-component/MyCard.tsx";
import PremiumFeature from "./learn-component/PremiumFeature.tsx";
import ShowBadge from "./learn-component/ShowBadge.tsx";
import UserList from "./learn-component/UserList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelloVariable
      name={"new"}
      age={25}
      verify={true}
    />
    <HelloVariable
      name={"nooo"}
      age={19}
      verify={false}
    />
    <ConditionalExample isLoggedIn={true} />
    <ConditionalExample isLoggedIn={false} />
    <ShowBadge />
    <ShowBadge badge={"new"} />

    <PremiumFeature isPremium={true} />
    <PremiumFeature isPremium={false} />
    <UserList
      users={[
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]}
    />

    <DeleteButton onDelete={() => alert("Deleted")} />

    <MyCard
      title="Card 1"
      footer={<button>Click</button>}
    >
      <h1>AAAA</h1>
      <p>BBBB</p>
    </MyCard>
    <MyCard
      title="Card 2"
      footer={<button>Click</button>}
    >
      <h1>CCCC</h1>
      <p>DDDD</p>
    </MyCard>
  </StrictMode>,
);

// function onDelete(id: number) {
//   console.log(`Deleted ${id}!`);
//   alert(`Deleted ${id}!`);
// }
