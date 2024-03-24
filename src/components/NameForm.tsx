import { useState } from "react";

export function NameForm() {
  console.log("NameForm: Rendered!");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // ! 既存の props や state から計算できるものを State にしない
  const fullName = firstName + " " + lastName;

  // useEffect(() => {
  //   console.log("useEffect");
  //   setFullName(firstName + " " + lastName);
  // }, [firstName, lastName]);

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
