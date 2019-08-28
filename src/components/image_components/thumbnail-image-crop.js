import React from 'react';

const defaultSize = 270;

export default function ThumbnailImageCrop(props) {
  function checkSize() {
    if (props.size > 50) {
      return `${props.size}px`;
    }
    return `${defaultSize}px`;
  }
  function imgBackground() {
    if (props.src) {
      return (
        {
          backgroundImage: `url(${props.src})`,
          width: checkSize(),
          height: checkSize(),
        }
      );
    }
    return (
      {
        backgroundColor: 'rgb(160, 160, 160)',
        width: checkSize(),
        height: checkSize(),
      }
    );
  }
  return (
    <span className={`cropped ${props.customClass || 'contain-cropped'}`} style={imgBackground()} />
  );
}
