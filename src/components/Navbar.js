import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import DialogSelect from './DialogSelect';
import { logout } from "../redux/actions/auth";
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: '1'
}));

export const Navbar = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { onSidebarOpen, ...other } = props;
  const linkClick = () => {

    dispatch(logout())
      .then(() => {
        navigate("/login");

      })
      .catch((e) => {
        console.log("Error", e)
        // setLoading(false);
      });
  }


  return (
    <>
      <DashboardNavbarRoot

        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />

          </IconButton>

          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <DialogSelect />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Link variant="body2"
            onClick={linkClick}
          >
            Logout
          </Link>
          {/* <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar> */}
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
