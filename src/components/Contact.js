import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "white",
    opacity: 1,
    margin: 20,
    fontSize: 18,
  },
  h1: {
    color: "white",
    margin: 20,
    fontSize: 36,
  },
  paper: {
    marginTop: 100,
    width: "70%",
    height: 450,
    opacity: 0.8,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.h1} variant="h1">
        Yhteystiedot
      </Typography>
      <Typography className={classes.text} variant="p">
        <AlternateEmailIcon fontSize="large" /> tytti.tarkkanen@gmail.com
      </Typography>
      <br/>
      <br/>
      <br/>
      <Typography className={classes.text} variant>
        <InstagramIcon fontSize="large" /> @sarkivaaranaussiet
      </Typography>
    </Paper>
  );
}
