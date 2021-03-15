import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    size: 14,
  },
  large: {
    size: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`No style defined for ${size} size.`);
  }

  return (
    <IconInputWrapper>
      <StyledIcon
        id={icon}
        size={style.size}
        style={{ display: "inline-block" }}
      />
      <VisuallyHidden>
        <label htmlFor="search">{label}</label>
      </VisuallyHidden>
      <InputWrapper
        id="search"
        name="search"
        type="text"
        style={{ "--size": style.size + "px", "--width": width + "px" }}
        placeholder={placeholder}
      />
    </IconInputWrapper>
  );
};

const InputWrapper = styled.input`
  display: inline-block;
  font-size: var(--size);
  font-weight: 700;
  border: none;
  width: var(--width);
  outline: none;
  margin-left: 0.25rem;
  padding-left: 15px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

const IconInputWrapper = styled.label`
  color: ${COLORS.gray700};
  display: inline-block;
  position: relative;
  border-bottom: 1px solid currentColor;
  width: var(--width);

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 1rem;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
