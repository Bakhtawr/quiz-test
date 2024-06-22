import "./App.css";
import Test from "./components/Test";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import math from "../src/assets/math.png";

const Item = styled(Paper)(({ theme }) => ({
   padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'
}));

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Rounding Off to Nearest 10</h1>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <Test />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item className="image-section">
            <img src={math} alt="Math Image" />
          </Item>
        </Grid>
      </Grid>

      <footer className="App-footer">
        <div className="copyright">
          <p>&copy; www.mathinenglish.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
