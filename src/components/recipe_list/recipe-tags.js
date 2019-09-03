import React from 'react';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

export default function RecipeTags(props) {
  const { tagsArray, isEditModeActive, updateTagsArrayMethod } = props;

  function handleTagChipDelete(tagLabel) {
    const newTagsArray = tagsArray.filter((tag) => tag !== tagLabel);
    if (tagsArray.length == 1) {
      updateTagsArrayMethod([]);
    } else {
      updateTagsArrayMethod(newTagsArray);
    }
  }

  function handleOnClickAddTags() {
    updateTagsArrayMethod([...tagsArray, '']);
  }

  if (isEditModeActive) {
    return (
      <div className="tags-container">
        {
          tagsArray.length > 0
          && tagsArray.map((tagLabel, index) => (
            <Chip
              label={(
                <input
                  value={tagLabel}
                  onChange={(e) => {
                    const newArray = [...tagsArray];
                    newArray[index] = e.target.value;
                    updateTagsArrayMethod(newArray);
                  }}
                  type="text"
                />
              )}
              onDelete={() => handleTagChipDelete(tagLabel)}
              key={index}
            />
          ))
        }
        <IconButton aria-label="add" onClick={handleOnClickAddTags}>
          <AddIcon />
        </IconButton>
      </div>
    );
  }
  return (
    <div className="tags-container">
      {
        tagsArray.length > 0
        && tagsArray.map((tagLabel, index) => {
          if (tagLabel.length > 0) {
            return (
              <Chip label={tagLabel} key={index} />
            );
          }
        })
      }
    </div>
  );
}
