import React from "react";
import { userData } from "../Chart/userdata";
import Gauge from "../Chart/Gauge";
import UserActivity from "../Chart/Chart";
import Data from "../Chart/Data";
import Header from "../modules/Header";
import { Container } from "react-bootstrap";
import { Grid } from "@mui/material";
// import { Box, Grid, Typography } from "@mui/material";
import "../../stylesheets/home.css";

const Home = () => {
  const today = new Date();
  const dayOfWeek = today.getDay() ;
  const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;

  return (
    <>
      <Header />
      <div class="date">{today.getMonth() + 1} 月 {today.getDate()} 日 ({dayOfWeekStr})</div>
      <Container fluid>
        <Grid container spacing={1}>
          <Grid item md={5}>
            <Gauge
              data={userData}
              title="一週間の学習記録"
              grid
              dataKey="Active User"
            />
            <UserActivity />
          </Grid>
          <Grid item xs={7}>
            <Data />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
