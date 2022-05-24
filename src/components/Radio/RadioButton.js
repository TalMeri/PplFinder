import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";
import Radio from '@material-ui/core/Radio';

const RadioButton = ({ isChecked, onChange, label, value, disable }) => {
  const handleChange = () => {
    onChange && onChange(value)
  };
  return (
    <S.RadioButton>
    <FormControlLabel
      control={<Radio checked={isChecked} onChange={handleChange} color="primary" />}
      label={label}
      disabled={disable}
    />
  </S.RadioButton>
  );
};

export default RadioButton;


