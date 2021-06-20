import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useState } from "react";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import SettingsEthernetTwoToneIcon from "@material-ui/icons/SettingsEthernetTwoTone";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import CodeTwoToneIcon from "@material-ui/icons/CodeTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import Link from "next/link";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function LeftDrawer({ children }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["/home", "/posts/resume", "/projects", "/blog"].map((text, index) => (
          <Link href={index === 0 ? "/" : text} passHref>
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <HomeTwoToneIcon /> : undefined}
                {index === 1 ? <LibraryBooksIcon /> : undefined}
                {index === 2 ? <SettingsEthernetTwoToneIcon /> : undefined}
                {index === 3 ? <MenuBookTwoToneIcon /> : undefined}
              </ListItemIcon>

              <Typography variant="subtitle1">
                {index === 0 ? "Home" : undefined}
                {index === 1 ? "Resume" : undefined}
                {index === 2 ? "Projects" : undefined}
                {index === 3 ? "Blog: Coming Soon" : undefined}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Login"].map((text, index) => (
          <ListItem button key={text} disabled>
            <ListItemIcon>
              {index === 0 ? <PersonOutlineTwoToneIcon /> : undefined}
            </ListItemIcon>
            <Typography variant="subtitle1">
              {index === 0 ? "Login: Coming Soon" : undefined}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
