import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import axios from "axios";
import DropFileInput from "./Dropfile";
import { MyContext } from "../App";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
  const { urlobj, seturlobj, open, setOpen, setscore, setshowscore ,showreference,setshowreference,referencedata,setreferencedata,scannedtext,setscannedtext,showscannedtext,showsetscannedtext} =
    React.useContext(MyContext);
  const [refernceurl, setrefernceurl] = React.useState("");
  // const [apiroute, setapiroute] = React.useState("");

  console.log(urlobj);

  const getferencedata = () => {
    axios
      .post(
        "http://127.0.0.1:8000/pdf/getreference/",
        { url: refernceurl },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.Score === undefined) {
          setreferencedata(response.data)
          setOpen(!open);
          setshowreference(true)
        } else {
          setscore(Number(response.data.Score.toFixed(1)));
          setshowscore(true);
          setOpen(!open);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFileChange = async (files) => {
    let apiroute = "";
    if (files.length === 2 || urlobj.scannedpdf) {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });
  
      const getmain = () => {
        axios
          .post(apiroute, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.Score === undefined) {
              setOpen(!open);
            } else {
              setscore(Number(response.data.Score.toFixed(1)));
              setshowscore(true);
              setOpen(!open);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const getpdf = () => {
        axios
          .post(apiroute, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.Score === undefined) {
              setOpen(!open);
              console.log(response)
              setscannedtext(response.data.textdata)
              showsetscannedtext(!showscannedtext)
            } else {
              setscore(Number(response.data.Score.toFixed(1)));
              setshowscore(true);
              setOpen(!open);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
      switch (true) {
        case urlobj.imgtotext:
          apiroute = "http://127.0.0.1:8000/imgtotext/";
          getmain();
          break;
        case urlobj.wordtotext:
          apiroute = "http://127.0.0.1:8000/wordtotext/";
          getmain();
          break;
        case urlobj.pdftotext:
          apiroute = "http://127.0.0.1:8000/pdftotext/";
          getmain();
          break;
        case urlobj.imagefeature:
          apiroute = "http://127.0.0.1:8000/imagefeature/";
          getmain();
          break;
        case urlobj.handwritten:
          apiroute = "http://127.0.0.1:8000/handwritten/";
          getmain();
          break;
        case urlobj.normal:
          apiroute = "http://127.0.0.1:8000/normal/";
          getmain();
          break;
        case urlobj.pdfmerge:
          apiroute = "http://127.0.0.1:8000/pdf/pdfmerge/";
          getpdf();
          break;
        case urlobj.scannedpdf:
          apiroute = "http://127.0.0.1:8000/pdf/scannedpdf/";
          getpdf();
          break;
        case urlobj.extractimage:
          apiroute = "http://127.0.0.1:8000/pdf/extractimage/";
          getferencedata();
          break;
        default:
          break;
      }
      console.log(apiroute);
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
            {urlobj.getreference ? (
              <>
                <TextField
                  fullWidth
                  label="Please provide url of research paper"
                  id="fullWidth"
                  onChange={(e) => setrefernceurl(e.target.value)}
                />
                <Button variant="contained" sx={{marginTop:2,textAlign:'center'}} onClick={getferencedata}>Get refernced model</Button>
              </>
            ) : (
              <DropFileInput onFileChange={(files) => onFileChange(files)} />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
