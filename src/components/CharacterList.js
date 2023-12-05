import { Character } from "./Character";

export const CharacterList = ({
  characters,
  handleSelected,
  selectedCharacter,
  onDeleteCharacter,
  onChangeCharacter,
  mainId,
  onMakeMain,
}) => {
  return (
    <ul>
      {characters.map((character) => (
        <Character
          character={character}
          key={character.id}
          handleSelected={handleSelected}
          selectedCharacter={selectedCharacter}
          onDeleteCharacter={onDeleteCharacter}
          onChangeCharacter={onChangeCharacter}
          mainId={mainId}
          onMakeMain={onMakeMain}
        />
      ))}
    </ul>
  );
};
