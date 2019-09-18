import React from 'react';

const Button = props => {
  const { buttonLink, buttonText } = props;
  return (
    <a
      href={buttonLink}
      className="btn-1 draw-border"
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Button;
