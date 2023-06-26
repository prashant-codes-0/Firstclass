import React,{Component} from 'react';
import {Navigate,Link} from 'react-router-dom';
import axios from 'axios';
class User2 extends Component{

    //constructor
   state={
    items:[],
    config:{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    }
   } 
//method

   componentDidMount(){
    axios.get('http://localhost:4000/userall',this.state.config).then((Response)=>{
        console.log("check",Response);
        this.setState({
            items:Response.data
        })

    }).catch((err)=>{
        console.log(err);
    })

   }
    deleteuser=(user)=>{
        axios.delete("http://localhost:4000/deleteuser/"+user).then ((err)=>{
            alert("delete sucessful");
            console.log(err)

        })
    }

    render(){


      if(localStorage.getItem('userType') && localStorage.getItem('userType')!=='Admin'
      ){

        return <Navigate to='/login'/>
      }
        return(
            <>

{
    this.state.items.map((val)=>{
        return(
            <>
            {val.username}
            {val.email}
            {val.password}
            {val.userType}
            <img src={'http://localhost:4000/'+val.image}n alt='img'></img>
            <button onClick={this.deleteuser.bind(this,val._id)}>Delete
            </button>

            <Link to={'/updateuser/'+val._id}>Update</Link>
            </>
        )

    })
}

            </>
        )
    }

}

export default User2;




// import axios from "axios";
// import React, { Component } from "react";

// class User2 extends Component {
//   state = {
//     items: [],
//     config: {
//       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
//     },
//   };

//   componentDidMount() {
//     axios.get("http://localhost:4000/userall", this.state.config)
//       .then((Response) => {
//         console.log(Response);
//         this.setState({
//           items: Response.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

// render() {
//   return (
//     <div className="card-container">
//       {this.state.items.map(function (val) {
//         // Get the first five characters of the password
//         // Add "..." to the end of the password
//          const shortenedPassword = val.password.substr(0, 5)+"...";

//         return (
//           <div className="user-card" key={val.id}>
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
//     </div>
//   );
// }

// }

// export default User2;


// import React, { Component } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';

// class User2 extends Component {
//   state = {
//     items: [],
//     config: {
//       headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
//     },
//   };

//   componentDidMount() {
//     axios
//       .get('http://localhost:4000/userall', this.state.config)
//       .then((response) => {
//         console.log("check", response);
//         this.setState({
//           items: response.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   deleteuser = (userId) => {
//     axios
//       .delete(`http://localhost:4000/deleteuser/${userId}`, this.state.config)
//       .then((response) => {
//         alert('Delete successful');
//         // Update the state after successful deletion to reflect the changes in the UI
//         this.setState((prevState) => ({
//           items: prevState.items.filter((item) => item._id !== userId),
//         }));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     if (
//       localStorage.getItem('userType') &&
//       localStorage.getItem('userType') !== 'Admin'
//     ) {
//       return <Navigate to="/login" />;
//     }

//     return (
//       <>
//         {this.state.items.map((val) => (
//           <div key={val._id}>
//             {val.username}
//             {val.email}
//             {val.password}
//             {val.userType}
//             <img src={`http://localhost:4000/${val.image}`} alt="img" />
//             <button onClick={() => this.deleteuser(val._id)}>Delete</button>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default User2;


