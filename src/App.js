import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import mursuEka from "./pictures/mursu4.jpg";
import pentu from "./pictures/pentu.jpg";
import kiukku from "./pictures/kiukku2.jpg";
import Intro from "./components/Intro";
import Pentu from "./components/Pentu"
import Contact from './components/Contact'

const useStyles = makeStyles((theme) => ({
  div: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + mursuEka + ")",
      backgroudPosition: "center",
      backgroundSize: "300vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(" + mursuEka + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundImage: "url(" + mursuEka + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    backgroundImage: "url(" + mursuEka + ")",
    backgroudPosition: "center",
    backgroundSize: "200vh",
    backgroundRepeat: "no-repeat",
    backgrounAttachment: "fixed",
  },
  div2: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + pentu  + ")",
      backgroudPosition: "center",
      backgroundSize: "300vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(" + pentu + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundImage: "url(" + pentu + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
      backgroundImage: "url(" + pentu + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
  },
  div3: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + kiukku  + ")",
      backgroudPosition: "center",
      backgroundSize: "300vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(" + kiukku + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundImage: "url(" + kiukku + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
    },
      backgroundImage: "url(" + kiukku + ")",
      backgroudPosition: "center",
      backgroundSize: "200vh",
      backgroundRepeat: "no-repeat",
      backgrounAttachment: "fixed",
  },
  child: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      paddingBottom: 350,
    },
    [theme.breakpoints.down("xl")]: {
      paddingBottom: 500,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.div}>
        <div className={classes.child}>
          <Intro />
        </div>
      </div>
      <div className={classes.div2}>
        <div className={classes.child}>
          <Pentu />
        </div>
      </div>
      <div className={classes.div3}>
        <div className={classes.child}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
