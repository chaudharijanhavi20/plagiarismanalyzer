import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import "react-dropzone-uploader/dist/styles.css";
import DropFileInput from "./Dropfile";
import { MyContext } from "../App";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  Width: 350,
  maxHeight: 800,
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const { urlobj, seturlobj,open,setOpen,setscore,setshowscore } = React.useContext(MyContext);
  // const [apiroute, setapiroute] = React.useState("");

  console.log(urlobj);
 
  const onFileChange = async (files) => {
    let apiroute=''
    if (files.length === 2) {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });
      switch (true) {
        case urlobj.imgtotext:
          apiroute="http://127.0.0.1:8000/imgtotext/";
          console.log(apiroute)
          break;
        case urlobj.wordtotext:
          apiroute="http://127.0.0.1:8000/wordtotext/";
          break;
        case urlobj.pdftotext:
          apiroute="http://127.0.0.1:8000/pdftotext/";
          break;
        case urlobj.imagefeature:
          apiroute="http://127.0.0.1:8000/imagefeature/";
          break;
        case urlobj.handwritten:
          apiroute="http://127.0.0.1:8000/handwritten/";
          break;
        case urlobj.normal:
          apiroute="http://127.0.0.1:8000/normal/";
          break;
        default:
          break;
      }
      console.log(apiroute)
      axios
      .post(apiroute, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setscore(Number((response.data.Score).toFixed(1)))
        setshowscore(true)
        setOpen(!open)
      })
      .catch((error) => {
        console.log(error);
      });

    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <DropFileInput onFileChange={(files) => onFileChange(files)} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
