import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import secrets from "./images/secrets.jpg";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Secrets
          </Typography>
          <img
            className={classes.image}
            src={secrets}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              className={classes.mobile}
              justify="space-between"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
