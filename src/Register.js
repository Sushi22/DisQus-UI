import { AppBar, Toolbar, Typography, Divider, List, ListItemAvatar, Avatar, ListItemText, ListItem, TextField, Select, MenuItem, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/private-theming";
import theme from "./Theme/AppTheme";
import logofinal from "./resources/DisQusLogo/logofinal.jpg";
import Section from './components/RegisterComponents/Section'
import Skills from "./components/RegisterComponents/Skills";
import Social from "./components/RegisterComponents/Social";
import Uname from "./components/RegisterComponents/Uname";
import Contact from "./components/RegisterComponents/Contact";
import Branch from "./components/RegisterComponents/Branch";

const drawerWidth=300

const Register = (props) => {
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
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`, backgroundColor: '#000000' }}>
          <Toolbar>
          <Box
            component="img"
            sx={{
              height: 80,
              width: 250,
              m: 0.7,
              p: 1,
                }}
            alt="DisQus"
            src={logofinal}
          />
          <Box component="span" sx={{ p: 2, backgroundColor: 'secondary.main', flexGrow: 1, textAlign: 'center', color: 'primary.main'  }}>
            <Typography variant="h3">Update Profile</Typography> 
          </Box>
          <Box>
            
          </Box>
          </Toolbar>
        </AppBar>
        <AppBar position="fixed" sx={{ width: drawerWidth, backgroundColor: '#A7D129', height: 106.5 }}>
          <Toolbar>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ color: '#000000'}}/>
              </ListItemAvatar>
              <ListItemText primary="User" secondary="email@ietdavv.edu.in" sx={{ color: '#000000'}}/>
            </ListItem>
          </List>
          </Toolbar>
        </AppBar>
        <Box sx={{ backgroundColor: 'primary.main', flexGrow: 1, height: 110, color:'secondary.main'}}>
        </Box>
      </Box>
      <Box
      component="form" 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ml: 40,
        p: 3, 
        }}
      >
        <Uname />

        <Contact />

        <Branch />

        <Section />

        <Skills />

        <Social />

        <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        mb: 1.5,
        mt: 1
        }}>
          <Box sx={{ p: 1, borderRadius: 15, backgroundColor: 'secondary.light' , textAlign: 'center', color: 'primary.main', ml: 40  }}>
            <Button variant="filled" >
            <Typography variant="h6">
              Update
            </Typography>
            </Button>
          
          </Box>
        </Box>

      </Box>

    </ThemeProvider>
    </>
  )
}

export default Register;