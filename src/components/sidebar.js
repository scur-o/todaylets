import { Drawer, IconButton, styled, Typography } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import Checkboxtemplate from './CheckboxMenu/Checkboxtemplate';


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0,1),
    width: '240px',
    p: '3',
    ...theme.mixins.toolbar
}));


const Sidebar = ({isOpen, setIsOpen}) => {
    return (
        <Drawer
        variant='persistent'
        hideBackdrop={true}
        open={isOpen}
        PaperProps={{
            sx: {
                backgroundColor: '#5B666D'
            }
        }}
        >
            <DrawerHeader>
            <Typography></Typography>
                <IconButton sx={{color: 'white'}} onClick={() => setIsOpen(false)}>
                    <ChevronLeft fontSize='large'/>
                </IconButton>
            </DrawerHeader>

        <Checkboxtemplate />
        </Drawer>
    );
};

export default Sidebar;