import { useState } from "react";
import { AddCharacter } from "./AddCharacter";
import { Button } from "./Button";
import { CharacterList } from "./CharacterList";

const charactersList = [
  {
    id: 1,
    name: "Dtsz",
    classL: "Soul Eater",
    gear: 1590,
  },
  {
    id: 2,
    name: "Dts",
    classL: "Gunslinger",
    gear: 1618,
  },
];

export const App = () => {
  const [characters, setCharacters] = useState(charactersList);
  const [showFormAddCharacter, setShowFormAddCharacter] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [main, setMain] = useState(1);

  const handleMakeMain = (id) => {
    setMain(() => id);
  };

  const handleSelectCharacter = (chr) => {
    setSelectedCharacter(chr);
  };

  const handleAddCharacter = (character) => {
    setCharacters((characters) => [...characters, character]);
  };

  const handleShowForm = () => {
    setShowFormAddCharacter((show) => !show);
  };

  const handleDeleteCharacter = (id) => {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  };

  const handleChangeCharacter = (curCharacter) => {
    setCharacters((characters) =>
      characters.map((character) =>
        character.id === curCharacter.id
          ? {
              id: curCharacter.id,
              name: curCharacter.name,
              classL: curCharacter.classL,
              gear: curCharacter.gear,
            }
          : character
      )
    );
  };

  return (
    <div>
      <CharacterList
        characters={characters}
        handleSelected={handleSelectCharacter}
        selectedCharacter={selectedCharacter}
        onDeleteCharacter={handleDeleteCharacter}
        onChangeCharacter={handleChangeCharacter}
        mainId={main}
        onMakeMain={handleMakeMain}
      />

      <Button onClick={handleShowForm}>
        {showFormAddCharacter ? "Close" : "Add Character"}
      </Button>

      <div>
        {showFormAddCharacter ? (
          <AddCharacter
            onAddCharacter={handleAddCharacter}
            handleShowForm={setShowFormAddCharacter}
            handleSelected={handleSelectCharacter}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
