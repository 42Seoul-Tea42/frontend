import React from 'react';
import TagButton from './TagButton';
import { capitalizeFirstLetter } from './SignupStepper';

enum TagType {
  SPORTS = 1 << 0,
  TRAVEL = 1 << 1,
  FOOD = 1 << 2,
  GAME = 1 << 3,
  BOOK = 1 << 4,
  IT_SCIENCE = 1 << 5,
  VIDEO = 1 << 6,
  LANGUAGE = 1 << 7,
  FASHION = 1 << 8,
  PETS = 1 << 9,
  ART = 1 << 10,
  SMOKE = 1 << 11,
  DRINK = 1 << 12
}

const TagSelector: React.FC = () => {
  return (
    <>
      {Object.entries(TagType)
        .filter(([_, value]) => typeof value === 'number')
        .map(([key, dtoValue], index) => {
          const text = capitalizeFirstLetter(key.replace('_', ' / '));

          return (
            <TagButton
              key={index}
              text={text}
              gradientFrom={'blue'}
              gradientTo={'purple'}
              dtoValue={dtoValue as number}
            />
          );
        })}
    </>
  );
};

export default TagSelector;
