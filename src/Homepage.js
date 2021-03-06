//import { ListItem, TextField, Select, MenuItem, Button, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/private-theming";
import theme from "./Theme/AppTheme";
import Drawerbar from "./components/MainComponents/Drawerbar";
import Headermain from "./components/MainComponents/Headermain";
import Qbox from "./components/MainComponents/Qbox";
import Profile from "./components/MainComponents/Profile";
import RegisterProfile from "./components/MainComponents/RegisterProfile";

const drawerWidth=300


const Homepage = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        alignItems: 'center', 
        }}
      >        
      <Headermain />
      <Drawerbar />
      <Box
      component="form" 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        mt:1,
        }}
      >
        {/* <RegisterProfile /> */}
        <Qbox /> 
         <Qbox />
        {/* <Answer /> */}
        {/* <Post /> */}
        {/* <SendInvite /> */}
        {/* <Profile /> */}
        {/* <AnswerNotification />
        <VerifyNotification />
        <SenderNotification />
        <ReceiverNotification /> */}

      </Box>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default Homepage;