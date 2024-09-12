// import React, { useState } from 'react';
// import axios from 'axios';

// function Navitem() {
//       const [name, setname] = useState("");
//       const [icon, seticon] = useState("");
//       const [link, setlink] = useState("");

//       const handleform = (e) => {
//         e.preventDefault();
//             const res = axios.post("http://localhost:5000/api/navitem",{
//                  nmae:  name,
//                  icon: icon,
//                  link: link,

//                }
//             )
//             console.log("response is", res.data);
//       }

//   return (
//     <div className='mt-32'>
//    <form onSubmit={handleform}>
//        <label>NAME</label>
//        <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
//        <label>link</label>
//        <input type="text" onChange={(e)=>{setlink(e.target.value)}}/>
//        <label>icon</label>
//        <input type="text" onChange={(e)=>{seticon(e.target.value)}}/>
//        <button type="submit">submit</button>
//    </form>

//     </div>
//   )
// }

// export default Navitem
// Frontend: src/Pages/Navitem.jsx

import React, { useState } from 'react';
import axios from 'axios';

function Navitem() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");

  const handleform = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const res = await axios.post("http://localhost:5000/api/navitem", {
        name: name,  // Send the form values as strings
        icon: icon,
        link: link
      });

      console.log("Response:", res.data); // Log the success message
    } catch (error) {
      console.error("Error adding nav item:", error); // Log any error that occurs
    }
  };

  return (
    <div className='mt-32'>
      <form onSubmit={handleform}>
        <label>NAME</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Link</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />

        <label>Icon</label>
        <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Navitem;
