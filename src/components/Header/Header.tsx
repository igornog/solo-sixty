import { Box } from '@mui/material';
import { Notification, SearchNormal } from 'iconsax-react';
import Typography from '../Typography/Typography';
import FadeMenu from '../PopUp/ProfilePopUp';
import TextField from '../TextField/TextField';

const Header: React.FunctionComponent = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      padding={'2rem 0'}
    >
      <Box display={'flex'} alignItems={'center'} gap={'50px'}>
        <Typography variant="h2" bold>
          {}
        </Typography>
        <TextField startIcon={<SearchNormal />} placeholder={'Search here'} />
      </Box>
      <Box
        display={'flex'}
        gap={'15px'}
        alignItems={'center'}
        paddingRight={'2rem'}
      >
        <Notification color="grey" />
        <FadeMenu />
      </Box>
    </Box>
  );
};

export default Header;
