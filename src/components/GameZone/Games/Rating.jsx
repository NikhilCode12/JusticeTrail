import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Worst',
  1: 'Waste',
  1.5: 'Bad',
  2: 'Ok',
  2.5: 'Fine',
  3: 'Nice',
  3.5: 'Good',
  4: 'Great',
  4.5: 'Excellent',
  5: 'Outstanding',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 205,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55}} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 1 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}