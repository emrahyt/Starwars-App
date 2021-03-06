import React, { useState, useEffect } from "react";
import axios from "axios";
import IntersectionVisible from "react-intersection-visible";
import CardItem from "../common/cardItem";
import { Container, Grid, Fab, Toolbar } from "@material-ui/core";
import { handleMaxPage } from "../helpers/maxPage";
import Loading from "../common/loading";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "../helpers/scrollTop";

const List = (props) => {
  const [page, setPage] = useState(1);
  const [dataArray, setDataArray] = useState();
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    let content = props.content
    if (maxPage >= page) {
      setLoading(true);
      axios
        .get(`https://swapi.dev/api/${content}/?page=${page}`)
        .then((res) => {
          if (page === 1) {
            setDataArray(res.data.results);
          } else {
            setDataArray([...dataArray, ...res.data.results]);
          }
          setPage(page + 1);
          setMaxPage(handleMaxPage(res.data.count));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      return;
    }
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Loading open={loading} />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="lg">
        {dataArray ? (
          <div style={{ marginTop: 30 }}>
            <Grid container spacing={2} style={{ paddingBottom: 50 }}>
              {dataArray.map(
                (data, index) =>
                  data !== [] && (
                    <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                      <IntersectionVisible
                        onShow={() =>
                          index === dataArray.length - 4 && handleContent()
                        }
                      >
                        <CardItem data={data} />
                      </IntersectionVisible>
                    </Grid>
                  )
              )}
            </Grid>
          </div>
        ) : (
          <div></div>
        )}
      </Container>
      <ScrollTop {...props}>
        <Fab
          style={{ color: "white", backgroundColor: "#000" }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default List;
