import { useState } from "react";
import { FormCharacter } from "./FormCharacter";
import { Button } from "./Button";

export const Character = ({
  character,
  handleSelected,
  selectedCharacter,
  onDeleteCharacter,
  onChangeCharacter,
  mainId,
  onMakeMain,
}) => {
  const isSelected = selectedCharacter === character.id ? true : false;

  const isMain = mainId === character.id ? false : true;

  const [changeForm, setChangeForm] = useState(false);

  const handleChangeForm = () => {
    setChangeForm((form) => !form);
  };

  return (
    <div>
      <li className={isSelected ? "active" : ""}>
        <h2>{character.name}</h2>
        {mainId === character.id ? <h4>Main</h4> : null}
        <p>Class : {character.classL}</p>
        <p>Gear : {character.gear}</p>
        {/* {selectedCharacter === character.id ? <p>Selected!</p> : null} */}
        <Button onClick={() => handleSelected(character.id)}>
          {isSelected ? "Selected" : "Select"}
        </Button>
        <div>
          <Button onClick={() => onDeleteCharacter(character.id)}>
            Delete
          </Button>
        </div>
        <div>
          {isMain && isSelected ? (
            <Button onClick={() => onMakeMain(character.id)}>Make Main</Button>
          ) : null}
        </div>
        {isSelected ? (
          <Button onClick={handleChangeForm}>
            {changeForm ? "Close Change" : "Change"}
          </Button>
        ) : null}
        {isSelected && changeForm ? (
          <FormCharacter
            id={character.id}
            onChangeCharacter={onChangeCharacter}
            handleChangeForm={handleChangeForm}
          />
        ) : null}
      </li>
    </div>
  );
};
