import React from "react";
import { render } from "react-dom";
import "./yt.css";
import Grid from "@material-ui/core/Grid";
import Card from "../Card";
//import Card2 from "../Card2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  test: {
    padding: "30px",
  },
}))

export default function YT() {
  const [data, setData] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyCsSvpFHSg3rCi45K3z5HNoj73gRza53Ik
  `)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setData(data.items);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <>
      <Grid
        className={classes.test}
        container
        spacing="3"
        alignItems="flex-start"
        justifyContent="center"
      >
        {data.map((item) => {
          console.log(item.snippet);
          console.log(item.snippet.channelTitle);
          console.log(item.snippet.description);

          return (
            <Grid item xs="12" md="4" sm="6" lg="3">
              <Card
                value={{
                  channelTitle: item.snippet.channelTitle,
                  title: item.snippet.title,
                  image: item.snippet.thumbnails.high.url,
                  description: item.snippet.description,
                  date: item.snippet.publishedAt,
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
