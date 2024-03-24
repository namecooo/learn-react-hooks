import { useEffect, useState } from "react";

export function NgFameForm() {
  console.log("NG: Rendered!");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <div>
        <label>
          First Name:
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Last Name:
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>
      </div>
      <div>Full Name: {fullName}</div>
    </div>
  );
}
