import React from "react";
import {
  Announcement,
  Banner_1,
  Container,
  Grid_Banner,
  Grid_Stage1,
  Grid_Stage12,
  Grid_Stage2,
  Grid_Stage3,
  Grid_Stage4,
  Grid_Stage6,
  Stage12_1,
  Stage1_1,
  Stage1_10,
  Stage1_11,
  Stage1_12,
  Stage1_2,
  Stage1_3,
  Stage1_4,
  Stage1_5,
  Stage1_6,
  Stage1_7,
  Stage1_8,
  Stage1_9,
  Stage2_1,
  Stage2_2,
  Stage2_3,
  Stage2_4,
  Stage2_5,
  Stage2_6,
  Stage3_1,
  Stage3_2,
  Stage3_3,
  Stage3_4,
  Stage4_1,
  Stage4_2,
  Stage4_3,
  Stage6_1,
  Stage6_2,
} from "../helper/lib";

export const Home = (): JSX.Element => {
  return (
    <Container>
      {/*  1 x 12 */}
      <Grid_Stage1>
        <Stage1_1>
          <p>Stage1_1</p>
        </Stage1_1>
        <Stage1_2>
          <p>Stage1_1</p>
        </Stage1_2>
        <Stage1_3>
          <p>Stage1_1</p>
        </Stage1_3>
        <Stage1_4>
          <p>Stage1_1</p>
        </Stage1_4>
        <Stage1_5>
          <p>Stage1_1</p>
        </Stage1_5>
        <Stage1_6>
          <p>Stage1_1</p>
        </Stage1_6>
        <Stage1_7>
          <p>Stage1_1</p>
        </Stage1_7>
        <Stage1_8>
          <p>Stage1_1</p>
        </Stage1_8>
        <Stage1_9>
          <p>Stage1_1</p>
        </Stage1_9>
        <Stage1_10>
          <p>Stage1</p>
        </Stage1_10>
        <Stage1_11>
          <p>Stage1_1</p>
        </Stage1_11>
        <Stage1_12>
          <p>Stage1_1</p>
        </Stage1_12>
      </Grid_Stage1>
      {/*  2 x 6 */}
      <Grid_Stage2>
        <Stage2_1>
          <h1>Stage2_1</h1>
        </Stage2_1>
        <Stage2_2>
          <h1>Stage2_2</h1>
        </Stage2_2>
        <Stage2_3>
          <h1>Stage2_3</h1>
        </Stage2_3>
        <Stage2_4>
          <h1>Stage2_4</h1>
        </Stage2_4>
        <Stage2_5>
          <h1>Stage2_5</h1>
        </Stage2_5>
        <Stage2_6>
          <h1>Stage2_6</h1>
        </Stage2_6>
      </Grid_Stage2>

      {/* 3 x 4 */}
      <Grid_Stage3>
        <Stage3_1>
          <h1>Stage3_1</h1>
        </Stage3_1>
        <Stage3_2>
          <h1>Stage3_2</h1>
        </Stage3_2>
        <Stage3_3>
          <h1>Stage3_3</h1>
        </Stage3_3>
        <Stage3_4>
          <h1>Stage3_4</h1>
        </Stage3_4>
      </Grid_Stage3>

      {/* 4 x 3 */}
      <Grid_Stage4>
        <Stage4_1>
          <h1>Stage4_1</h1>
        </Stage4_1>
        <Stage4_2>
          <h1>Stage4_2</h1>
        </Stage4_2>
        <Stage4_3>
          <h1>Stage4_3</h1>
        </Stage4_3>
      </Grid_Stage4>

      {/* 6 x 2 */}
      <Grid_Stage6>
        <Stage6_1>
          <h1>Stage6_1</h1>
        </Stage6_1>
        <Stage6_2>
          <h1>Stage6_2</h1>
        </Stage6_2>
      </Grid_Stage6>

      {/* 12 x 1 */}
      <Grid_Stage12>
        <Stage12_1>
          <h1>Stage12_1</h1>
        </Stage12_1>
      </Grid_Stage12>

      {/* banner */}
      <Grid_Banner>
        <Banner_1>
          <h1>Banner Area</h1>
        </Banner_1>
      </Grid_Banner>

      <Announcement>
        <div className="container">
          <p>Update information will be informed here</p>
        </div>
      </Announcement>
    </Container>
  );
};
