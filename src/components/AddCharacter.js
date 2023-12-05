import { useState } from "react";
import { Button } from "./Button";

export const AddCharacter = ({
  onAddCharacter,
  handleShowForm,
  handleSelected,
}) => {
  const [name, setName] = useState("Stakutata");
  const [className, setClassName] = useState("Wardancer");
  const [gear, setGear] = useState("1620");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !className || !gear) return;

    const id = crypto.randomUUID();

    const newCharacter = {
      id,
      name,
      classL: className,
      gear: gear,
    };

    onAddCharacter(newCharacter);
    handleSelected(id);
    // setName("");
    // setClassName("");
    // setGear("");
    handleShowForm(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div>
          <label>Gear: </label>
          <input
            type="text"
            value={gear}
            onChange={(e) => setGear(Number(e.target.value))}
          />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
};
