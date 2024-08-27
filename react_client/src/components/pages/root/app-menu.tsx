import { Box, Button, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { routes } from "../../../App";

export default function AppMenu(props: { isOpen: boolean, setIsOpen: any }) {
    const { isOpen: open, setIsOpen: setOpen } = props
    const toggleDrawer = () => () => {
        setOpen(!open);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer()}>
            <List>
                {routes.filter(route => route.visible).map((route) => (
                    <ListItem key={route.lable} disablePadding>
                        <Link style={{ color: "black", textDecoration: "none" }} to={route.path} >
                            <ListItemButton>
                                <ListItemIcon>
                                    {getIconsMapper(route.lable)}
                                </ListItemIcon>
                                <ListItemText primary={route.lable} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer()}>Menu</Button>
            <Drawer variant="persistent" hideBackdrop={true} open={true} onClose={toggleDrawer()}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

function getIconsMapper(label: string) {
    // @ts-ignore
    return iconsMapping[label] || <FiberSmartRecordIcon />
}