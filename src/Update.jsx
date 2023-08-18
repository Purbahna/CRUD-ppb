import React, { useEffect, useState } from "react";
//import UpgradeIcon from "@mui/icons-material/Upgrade";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const url = "https://mocki.io/v1/f92a46cf-e38f-4b35-89ff-40d89c263113";

const Update = () => {
  
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const { firstName, lastName, age, email, password } = user;
  // const { id } = data;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${url}/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (e) => {
    if (name && username && email && phone) {
      e.preventDefault();
      axios
        .put(`${url}/${id}`, {
          ...user,
        })
        .then(() => {
          navigate("/data");
        });
    }
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/data");
  };
  return (
    <div
      className="rounded"
      style={{
        boxShadow: "10px 0px 36px 0px rgba(0, 0, 0, 0.28)",
      }}
    >
      {/* <Forms
        user={user}
        setUser={setUser}
        instructions="Edit your Details below"
        bg="#ffad00"
        title="Update"
        shrink="true"
        // buttonIcon1=<UpgradeIcon />
        // buttonColor1="info"
        // buttonType1="Update"
        // handleButtton1={handleUpdate}
        // handleButton2={handleBack}
        // buttonIcon2=<ArrowBackIcon />
        // buttonColor2="warning"
        // buttonType2="Back"
      /> */}
    </div>
  );
};

export default Update;