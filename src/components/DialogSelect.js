import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { updatecolor } from '../redux/actions/userData'
export default function DialogSelect() {
    const [open, setOpen] = React.useState(false);
    const [bgColor, setBgColor] = React.useState({
        label: '',
        color: ''
    });
    const options = [
        {
            label: 'Red',
            color:'#D32F2F',
        },
        {
            label: 'Green',
            color:'#4CAF50',
        },
        {
            label: 'Blue',
            color:'#2196F3',
        },
    ];
    const userData = useSelector(state => state.userData);
    console.log(userData)
    const dispatch = useDispatch();
    const handleChange = (event) => {
        // redux  call to set value 
        var index = event.nativeEvent.target.selectedIndex;
        setBgColor({ ...bgColor, label: event.nativeEvent.target[index].text, color: event.target.value });

        console.log({ label: event.nativeEvent.target[index].text, color: event.target.value })

    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    const handleSave = (event, reason) => {

        // redux call to store call api and store data
        // alert("changed Data")
        
        console.log(bgColor)
        let label = bgColor.label;
        let color = bgColor.color;
        dispatch(updatecolor(label, color))
        .then(() => {
          // navi  gate("/profile");
         
  
        })
        .catch((e) => {
          alert("Error", e)
          // setLoading(false);
        });




        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    React.useEffect(()=>{
        console.log(bgColor.label)
    },[bgColor])

    return (
        <div>
            <Button onClick={handleClickOpen}>Change Color</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Select Color</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="demo-dialog-native">Color</InputLabel>
                            <Select
                                native
                                value={bgColor.color}
                                onChange={handleChange}
                                input={<OutlinedInput label="Color" id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />

                                {options.map((eachColor) => (<option value={eachColor.color}  >{eachColor.label}  </option>))}
                            </Select>
                        </FormControl>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
