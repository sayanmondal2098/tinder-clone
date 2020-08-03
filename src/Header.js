import React from 'react';
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Link, useHistory } from 'react-router-dom';

import "./Header.css";


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon className="header_icon" fontSize="large" />
                </IconButton>
            ) : (
                    <IconButton>
                        <PersonIcon className="header_icon" fontSize="large" />
                    </IconButton>
                )}

            <Link to="/">
                <img
                    className="header_logo"
                    src="https://cdn.dribbble.com/users/4342926/screenshots/9021406/loveapp.png"
                    alt="Dating Logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large" />
                </IconButton></Link>
        </div>
    )
}

export default Header;