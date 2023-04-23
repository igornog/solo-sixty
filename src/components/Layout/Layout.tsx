import { Box, Grid } from '@mui/material';
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';

const Home: React.FunctionComponent = () => {
  return (
    <Box display={'flex'} gap={'2rem'}>
      <NavBar />

      <Box display={'flex'} flexDirection={'column'} width={'100%'}>
        <Header />
        <Grid>
          <p>test</p>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;