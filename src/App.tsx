import { Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import "./App.scss";
import { UserInfo } from "./components/UserInfo";

const plusFive = (num: number) => {
  console.log("i was called!");
  return num + 5;
};

function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);

  const [user, setUser] = useState({
    name: "Cuong",
    phone: {
      home: 10101,
      person: {
        digit: 77,
        country: "VN",
      },
    },
  });
  const numPlusFive = useMemo(() => plusFive(num), [num]);

  useEffect(() => {
    console.log("Vào");
  }, [user]);

  return (
    <div className="App">
      <h1>Without useMemo</h1>
      <h2>
        Current number: {num}, Plus five: {numPlusFive}
      </h2>

      <Button onClick={() => setNum(num + 1)}>Update Number</Button>
      <Button onClick={() => setLight(!light)}>Update Light</Button>
      <Button
        onClick={() =>
          setUser({
            ...user,
            phone: {
              ...user.phone,
              person: {
                ...user.phone.person,
                country: "SG",
              },
            },
          })
        }
      >
        Test
      </Button>
      <UserInfo user={user} />
    </div>
  );
}

export default App;
