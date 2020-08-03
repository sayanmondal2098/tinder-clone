import React from 'react';

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./SwapButtons.css";




function SwapeButtons() {
    return (
        <div className="SwapButtons">
            <IconButton className="SwapButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="SwapButtons_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="SwapButtons_start">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="SwapButtons_right">
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="SwapButtons_lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>

        </div>
    )
}

export default SwapeButtons;