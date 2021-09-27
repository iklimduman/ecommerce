
import React from "react";

import Stack from '@mui/material/Stack';
import Rating from "@mui/material/Rating";
import styled from "@emotion/styled";
import StarIcon from '@material-ui/icons/Star';

const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#9862f5"
      }
});

const StarRating = (data) => {

    return (
        <Stack spacing={1}>
            <StyledRating defaultValue={data.rate}
                precision={0.5}
                readOnly
                icon={<StarIcon></StarIcon>}>
            </StyledRating>
        </Stack>
    )

}

export default StarRating;