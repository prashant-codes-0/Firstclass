import { useState,useEffect } from "react";
import axios from "axios";

function User(){

    //state hooks
    const [User2,setUser]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/userall",{
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((Response) => {
        console.log("check",Response);
        setUser(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    },[])
    return (
        <div className="card-container">
          {User2.map(function (val) {
            // Get the first five characters of the password
            // Add "..." to the end of the password
             const shortenedPassword = val.password.substr(0, 5)+"...";
    
            return (
              <div className="user-card" key={val.id}>
                <div className="user-details">
                  <h3>{val.username}</h3>
                  <p>Email: {val.email}</p>
                  <p>Password: {shortenedPassword}</p>
                  <p>User Type: {val.userType}</p>
                </div>
                <div className="user-image">
                  <img src={"http://localhost:4000/" + val.image} alt={val.username} />
                </div>
              </div>
            );
          })}
        </div>
      );
    }

export default User;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";

// function User() {
//   // State hook
//   const [User2, setUser] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/userall", {
//         headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((Response) => {
//         console.log("check", Response);
//         setUser(Response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const handleCardClick = (user) => {
//     setSelectedUser(user);
//   };

//   const handleClose = () => {
//     setSelectedUser(null);
//   };

//   return (
//     <div className="card-container">
//       {User2.map(function (val) {
//         const shortenedPassword = val.password.substr(0, 5) + "...";

//         return (
//           <div className="user-card" key={val.id} onClick={() => handleCardClick(val)}>
//             <div className="user-details">
//               <h3>{val.username}</h3>
//               <p>Email: {val.email}</p>
//               <p>Password: {shortenedPassword}</p>
//               <p>User Type: {val.userType}</p>
//             </div>
//             <div className="user-image">
//               <img src={"http://localhost:4000/" + val.image} alt={val.username} />
//             </div>
//           </div>
//         );
//       })}
//       <AnimatePresence>
//         {selectedUser && (
//           <motion.div
//             className="popup"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="popup-content"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -50, opacity: 0 }}
//             >
//               <div className="popup-header">
//                 <div className="popup-image">
//                   <img src={"http://localhost:4000/" + selectedUser.image} alt={selectedUser.username} />
//                 </div>
//                 <h3>{selectedUser.username}</h3>
//               </div>
//               <p>Email: {selectedUser.email}</p>
//               <p>Password: {selectedUser.password}</p>
//               <p>User Type: {selectedUser.userType}</p>
//               <button className="button" onClick={handleClose}>Close</button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default User;


