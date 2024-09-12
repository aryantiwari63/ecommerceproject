

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProfileUrl } from '../Redux/Slices/profileSlice';

// function UploadProfileImage() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [localProfileUrl, setLocalProfileUrl] = useState('');
//   const dispatch = useDispatch();
//   const profileUrl = useSelector((state) => state.profile.profileUrl);

  
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setLocalProfileUrl(reader.result); 
//       reader.readAsDataURL(file);
//     }
//   };
//   }
//   const handleUpload = async () => {
//     if (!selectedFile) {
//       console.error('No file selected');
//       return;
//     }

//     const token = localStorage.getItem('token');
//     const uploadData = localProfileUrl;

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/uploadProfileImage',
//         { url: uploadData },
//         {
//           headers: {
//             'Authorization': `${token}`,
//           },
//         }
//       );

//       console.log(response.data.user.image);
//       dispatch(setProfileUrl(response.data.user.image));
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div className='mt-40'>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {localProfileUrl && <img src={localProfileUrl} alt="Profile Preview" />}
//     </div>
//   );
// }

// export default UploadProfileImage;

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProfileUrl } from '../Redux/Slices/profileSlice';

function UploadProfileImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [localProfileUrl, setLocalProfileUrl] = useState('');
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalProfileUrl(reader.result);
       
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const token = localStorage.getItem('token');
    const uploadData = localProfileUrl;

    try {
      const response = await axios.post(
        'http://localhost:5000/api/uploadProfileImage',
        { url: uploadData },
        {
          headers: {
            'Authorization': `${token}`,
          },
        }
      );

      dispatch(setProfileUrl(response.data.user.image));
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='mt-40'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {localProfileUrl && <img src={localProfileUrl} alt="Profile Preview" />}
    </div>
  );
}

export default UploadProfileImage;
