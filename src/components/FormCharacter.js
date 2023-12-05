import { useState } from "react";
import { Button } from "./Button";

export const FormCharacter = ({ id, onChangeCharacter }) => {
  const [name, setName] = useState("Baleia");
  const [classL, setClassL] = useState("Metaplayer");
  const [gear, setGear] = useState("1650");

  let changedCharacter = {
    id: id,
    name: name,
    classL: classL,
    gear: gear,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !classL || !gear) return;

    changedCharacter = {
      id: id,
      name: name,
      classL: classL,
      gear: gear,
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Character Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Class: </label>
          <input
            type="text"
            value={classL}
            onChange={(e) => setClassL(e.target.value)}
          />
        </div>
        <div>
          <label>Gear: </label>
          <input
            type="text"
            value={gear}
            onChange={(e) => setGear(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={() => onChangeCharacter(changedCharacter)}>
        Change
      </Button>
    </form>
  );
};
