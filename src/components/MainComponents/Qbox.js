import { Accordion, AccordionDetails, AccordionSummary, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AccountCircle } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Answer from "./Answer";
import Abox from "./Abox";

const boxWidth=1075

const Qbox = () =>{
    return (
        <>
        <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        backgroundColor: '#3E432E',
        borderRadius: 2,
        width: 1,
        alignItems: 'stretch',
        ml: 2,
      
        mb: 1,
        p:1
        }}>
          <Box 
          sx={{ 
          p: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main'  
          }}>
            <Box>
                <Tooltip title={<Typography variant="body1" color="white" >user@ietdavv.edu.in</Typography>} arrow>
                <AccountCircle sx={{ fontSize: 30 }} />
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow:1, ml:1 }} >
                <Typography variant="h6" >User</Typography>
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb:1  
          }}>
            <Box sx={{ flexGrow:1, ml:6 }} >
                <Typography variant="body1" color="white" >How to make a jar from a spring boot project?</Typography>
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb:1  
          }}>
            <Box sx={{ ml:6 }} >
                <Typography variant="subtitle2" color="black">20:20 PM</Typography>
            </Box>  
            <Box sx={{ flexGrow:1, ml:6 }} >
                <Typography variant="subtitle2" color="black">2 days ago</Typography>
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb: 1  
          }}>
            <Box sx={{ ml:6 }} >
                {/* Iterate chips */}
                <Chip label="Java" 
                  sx={{ backgroundColor: '#A7D129', color: '#3E432E', fontWeight: 'bold', fontSize: 'medium', mr:1 }} />
            </Box>  
          </Box>
          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb: 1  
          }}>
            <Box sx={{ ml:6,  }} >
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}
                   sx={{ backgroundColor: '#616F39', color: '#A7D129', borderRadius: 1, borderColor: '#A7D129', border:1 }} >
                    <Typography sx={{ fontSize: 'large', fontWeight: 'bold',}} >See All Answers</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'black', borderRadius: 1,width:1000 }}>
                    <Abox />
                    <Abox />
                  </AccordionDetails>
                </Accordion>
            </Box>  
          </Box>

          <Box 
          sx={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          width: boxWidth, 
          textAlign: 'left', color: 'primary.main',
          mb: 1  
          }}>
            <Box sx={{ ml:6, flexGrow:1 }} >
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}
                   sx={{ backgroundColor: '#616F39', color: '#A7D129', borderRadius: 1, borderColor: '#A7D129', border:1 }} >
                    <Typography sx={{ fontSize: 'large', fontWeight: 'bold',}} >Answer this Question</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: 'black', borderRadius: 1, width:1000 }}>
                   <Answer />
                  </AccordionDetails>
                </Accordion>
            </Box>  
          </Box>
        </Box>
        </>
    )
}

export default Qbox;