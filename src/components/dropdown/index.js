import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './style.css';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: '-10px'
  }
}));

export default function Dropdown(prop) {
  const classes = useStyles();
  const { data } = prop;
  return (
    <div>
      {data ? (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">{data.title}</InputLabel>
          <Select native defaultValue="" id="grouped-native-select">
            {data.select.map(s => (
              <optgroup label={s.group}>
                {s.option.map(option => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </optgroup>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {/* <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value={1}>Do Not Process</MenuItem>
          <MenuItem value={2}>Add To Process</MenuItem>
          <ListSubheader>ChangClassification</ListSubheader>
          <MenuItem value={3}>Share With DS</MenuItem>
          <MenuItem value={4}>Do Not Share</MenuItem>
          <MenuItem value={5}>Not Related</MenuItem>
          <MenuItem value={2}>Change Redaction</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}
