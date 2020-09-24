import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Employee</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Employees"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ahmed Elchranni</MenuItem>
          <MenuItem value={20}>Nemo Petrovic</MenuItem>
          <MenuItem value={30}>Jamil Samarani</MenuItem>
          <MenuItem value={30}>Anthony Di Lorenzo</MenuItem>
          <MenuItem value={30}>Milos Inic</MenuItem>
          <MenuItem value={30}>Mirko Drca</MenuItem>
          <MenuItem value={30}>Michael Kouter</MenuItem>
          <MenuItem value={30}>Sam Aboud</MenuItem>
          <MenuItem value={30}>Daniel Harris</MenuItem>
          <MenuItem value={30}>Haysam Abdallah</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
