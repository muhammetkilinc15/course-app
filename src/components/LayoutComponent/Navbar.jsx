import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

const authLinks = [
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
];

const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#ddd",
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? 600 : 400,
    marginLeft: "1rem",
});

export default function NavbarComponent() {
    const isAuthenticated = false; // Replace with actual logic
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (to) => {
        navigate(to);
        handleMenuClose();
    };

    return (
        <AppBar position="static" color="primary" elevation={1}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between"  }}>
                {/* Sol - Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton color="inherit" edge="start" component={NavLink} to="/">
                        <StoreIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                        Mstore
                    </Typography>
                </Box>

                {/* Orta - Linkler */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} style={navLinkStyle}>
                            {link.label}
                        </NavLink>
                    ))}
                </Box>

                {/* Sağ - Sepet ve Auth */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        color="inherit"
                        component={NavLink}
                        to="/cart"
                        aria-label="shopping cart"
                    >
                        <Badge badgeContent={3} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>

                    {isAuthenticated ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-controls={open ? "profile-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleMenuOpen}
                            >
                                <Person2Icon />
                            </IconButton>

                            <Menu
                                id="profile-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                                MenuListProps={{ "aria-labelledby": "profile-button" }}
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "right" }}
                            >
                                <MenuItem onClick={() => handleNavigate("/profile")}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={() => handleNavigate("/orders")}>
                                    Orders
                                </MenuItem>
                                <MenuItem onClick={() => handleNavigate("/logout")}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Box sx={{ display: "flex", gap: 1 }}>
                            {authLinks.map((link) => (
                                <Button
                                    key={link.to}
                                    component={NavLink}
                                    to={link.to}
                                    variant="outlined"
                                    color="inherit"
                                    size="small"
                                    sx={{ textTransform: "none" }}
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
