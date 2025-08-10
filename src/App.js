// import React, { useState } from 'react';
// import './App.css';
// import { IoAnalyticsSharp } from 'react-icons/io5';
// import { FiDownload } from 'react-icons/fi';
// import { BsRecordCircle, BsDropletFill } from 'react-icons/bs';
// import { FaAsterisk, FaPlus } from 'react-icons/fa';
// import { GoGitBranch } from 'react-icons/go';

// function App() {
//   // State to manage form inputs
//   const [patientName, setPatientName] = useState('Adithya K S');
//   const [phoneNumber, setPhoneNumber] = useState('9449796783');
//   const [address, setAddress] = useState('S/O K T Chakrapani, #34, Manipal, Udupi.');
//   const [deviceId, setDeviceId] = useState('00:1A:7D:DA:71:13');

//   // State to control the visibility of the patient data panel
//   const [isActivated, setIsActivated] = useState(false);

//   // Function to handle the "Activate" button click
//   const handleActivate = (e) => {
//     e.preventDefault(); // Prevent form from submitting and reloading the page
//     // A little delay to simulate an API call and make the transition noticeable
//     setTimeout(() => {
//         setIsActivated(true);
//     }, 300);
//   };

//   return (
//     <div className="app-background">
//       <div className="main-container">
//         {/* Left Side: Add Patient Form */}
//         <div className="form-section">
//           <header className="form-header">
//             <div className="logo-title">
//               <IoAnalyticsSharp className="logo-icon" />
//               <h1>
//                 <span className="text-red">Bloodmatica</span> and <span className="text-green">Sushena</span>
//               </h1>
//             </div>
//             <h2>Add Patient</h2>
//           </header>

//           <form className="add-patient-form" onSubmit={handleActivate}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 value={patientName}
//                 onChange={(e) => setPatientName(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <div className="phone-input">
//                 <span>+1</span>
//                 <input 
//                   type="tel" 
//                   id="phone" 
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input 
//                 type="text" 
//                 id="address" 
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="device">Activate Device</label>
//               <div className="device-input">
//                 <input 
//                   type="text" 
//                   id="device" 
//                   value={deviceId}
//                   onChange={(e) => setDeviceId(e.target.value)}
//                 />
//                 <button type="submit" className="activate-btn">Activate</button>
//               </div>
//             </div>
//           </form>

//           <p className="footer-note">
//             The user can now log in to the mobile app with their phone number.
//           </p>
//         </div>

//         {/* This arrow and text only show when activation is in process */}
//         {/* <div className={`activation-flow ${isActivated ? 'visible' : ''}`}>
//             <div className="flow-arrow"></div>
//             <span>( After activating... )</span>
//         </div> */}


//         {/* Right Side: Patient Data Panel */}
//         <div className={`patient-data-section ${isActivated ? 'active' : ''}`}>
//           <header className="patient-data-header">
//             <h3>Patient Name: {patientName}</h3>
//             <FiDownload className="download-icon" />
//           </header>

//           <div className="data-grid">
//             {/* RBC Count Card */}
//             <div className="data-card">
//               <div className="icon-wrapper">
//                 <BsRecordCircle />
//               </div>
//               <h4>RBC Count</h4>
//               <p>5,5 mil/µL</p>
//             </div>
//             {/* WBC Count Card */}
//             <div className="data-card">
//               <div className="icon-wrapper">
//                 <FaAsterisk />
//               </div>
//               <h4>WBC Count</h4>
//               <p>7.2 thou/µL</p>
//             </div>
//             {/* Platelets Card */}
//             <div className="data-card">
//               <div className="icon-wrapper">
//                 <GoGitBranch />
//               </div>
//               <h4>Platelets</h4>
//               <p>150 thou/µL</p>
//             </div>
//             {/* Hemoglobin Card */}
//             <div className="data-card">
//               <div className="icon-wrapper hemoglobin-icon">
//                 <BsDropletFill className="droplet" />
//                 <FaPlus className="plus" />
//               </div>
//               <h4>Hemoglobin</h4>
//               <p>15,2 g/dL</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// // Import the logo image from your src folder
// import vitrityaLogo from './Vitritya.png'; 
// import { FiDownload } from 'react-icons/fi';
// import { BsRecordCircle, BsDropletFill } from 'react-icons/bs';
// import { FaAsterisk, FaPlus } from 'react-icons/fa';
// import { GoGitBranch } from 'react-icons/go';

// function App() {
//   // State to manage form inputs
//   const [patientName, setPatientName] = useState('Adithya K S');
//   const [phoneNumber, setPhoneNumber] = useState('9449796783');
//   const [address, setAddress] = useState('S/O K T Chakrapani, #34, Manipal, Udupi.');
//   const [deviceId, setDeviceId] = useState('00:1A:7D:DA:71:13');

//   // State to control the visibility of the patient data panel
//   const [isActivated, setIsActivated] = useState(false);

//   // Function to handle the "Activate" button click
//   const handleActivate = (e) => {
//     e.preventDefault(); // Prevent form from submitting and reloading the page
//     // A little delay to simulate an API call and make the transition noticeable
//     setTimeout(() => {
//         setIsActivated(true);
//     }, 300);
//   };

//   return (
//     <div className="app-background">
//       <div className="main-container">
//         {/* Left Side: Add Patient Form */}
//         <div className="form-section">
//           <header className="form-header">
//             <div className="logo-title">
//               {/* Use the imported logo image */}
//               <img src={vitrityaLogo} alt="Vitriya Logo" className="logo-image" />
//               <h1>
//                 <span className="text-red">Bloodmatica</span> and <span className="text-green">Sushena</span>
//               </h1>
//             </div>
//             <h2>Add Patient</h2>
//           </header>

//           <form className="add-patient-form" onSubmit={handleActivate}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 value={patientName}
//                 onChange={(e) => setPatientName(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <div className="phone-input">
//                 <span>+1</span>
//                 <input 
//                   type="tel" 
//                   id="phone" 
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Address</label>
//               <input 
//                 type="text" 
//                 id="address" 
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="device">Activate Device</label>
//               <div className="device-input">
//                 <input 
//                   type="text" 
//                   id="device" 
//                   value={deviceId}
//                   onChange={(e) => setDeviceId(e.target.value)}
//                 />
//                 <button type="submit" className="activate-btn">Activate</button>
//               </div>
//             </div>
//           </form>

//           <p className="footer-note">
//             The user can now log in to the mobile app with their phone number.
//           </p>
//         </div>

//         {/* This arrow and text only show when activation is in process on large screens */}
//         <div className={`activation-flow ${isActivated ? 'visible' : ''}`}>
//             <div className="flow-arrow"></div>
//             <span>( After activating... )</span>
//         </div>


//         {/* Right Side: Patient Data Panel */}
//         <div className={`patient-data-section ${isActivated ? 'active' : ''}`}>
//           <header className="patient-data-header">
//             <h3>Patient Name: {patientName}</h3>
//             <FiDownload className="download-icon" />
//           </header>

//           <div className="data-grid">
//             {/* RBC Count Card */}
//             <div className="data-card">
//               <div className="icon-wrapper">
//                 <BsRecordCircle />
//               </div>
//               <h4>RBC Count</h4>
//               <p>5,5 mil/µL</p>
//             </div>
//             {/* WBC Count Card */}
//             <div className="data-card">
//               <div className="icon-wrapper">
//                 <FaAsterisk />
//               </div>
//               <h4>WBC Count</h4>
//               <p>7.2 thou/µL</p>
//             </div>
//             {/* Platelets Card */}
//             <div className="data-card">
//               <div className="icon-wrapper">
//                 <GoGitBranch />
//               </div>
//               <h4>Platelets</h4>
//               <p>150 thou/µL</p>
//             </div>
//             {/* Hemoglobin Card */}
//             <div className="data-card">
//               <div className="icon-wrapper hemoglobin-icon">
//                 <BsDropletFill className="droplet" />
//                 <FaPlus className="plus" />
//               </div>
//               <h4>Hemoglobin</h4>
//               <p>15,2 g/dL</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import vitrityaLogo from './Vitritya.png'; 
import { FiDownload } from 'react-icons/fi';
import { BsRecordCircle, BsDropletFill } from 'react-icons/bs';
import { FaAsterisk, FaPlus } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';

function App() {
  // State for form inputs
  const [patientName, setPatientName] = useState('Adithya K S');
  const [phoneNumber, setPhoneNumber] = useState('9449796783');
  const [address, setAddress] = useState('S/O K T Chakrapani, #34, Manipal, Udupi.');
  const [deviceId, setDeviceId] = useState('00:1A:7D:DA:71:13');

  // State to hold the name that will be displayed in the right panel
  const [activatedPatientName, setActivatedPatientName] = useState('');
  
  // State to control the visibility of the patient data panel
  const [isActivated, setIsActivated] = useState(false);

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // --- Validation Logic ---
  const validateForm = () => {
    const newErrors = {};
    if (!patientName.trim()) newErrors.name = "Patient Name is required.";
    if (!phoneNumber.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d+$/.test(phoneNumber)) {
      // This check is now a fallback, as the input handler prevents non-digits
      newErrors.phone = "Phone Number must contain only digits.";
    }
    if (!address.trim()) newErrors.address = "Address is required.";
    if (!deviceId.trim()) newErrors.deviceId = "Device ID is required.";
    
    return newErrors;
  };

  // --- Event Handlers ---
  const handleActivate = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsActivated(false); // Hide panel if there are errors
      return;
    }
    
    // Clear errors and proceed with activation
    setErrors({});
    setActivatedPatientName(patientName); // Set the name for the right panel

    // Simulate API call and show panel
    setTimeout(() => {
      setIsActivated(true);
    }, 300);
  };

  // Handler for phone number to only allow digits
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only digits (or an empty string to clear the input)
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      // Clear error for this field as user is typing
      if (errors.phone) {
        setErrors(prev => ({ ...prev, phone: null }));
      }
    }
  };

  // Generic handler to clear errors on input change
  const handleInputChange = (setter, fieldName) => (e) => {
    setter(e.target.value);
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: null }));
    }
  };


  return (
    <div className="app-background">
      <div className="main-container">
        {/* Left Side: Add Patient Form */}
        <div className="form-section">
          <header className="form-header">
            <div className="logo-title">
              <img src={vitrityaLogo} alt="Vitriya Logo" className="logo-image" />
              <h1>
                <span className="text-red">Bloodmatica</span> and <span className="text-green">Sushena</span>
              </h1>
            </div>
            <h2>Add Patient</h2>
          </header>

          <form className="add-patient-form" onSubmit={handleActivate}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                value={patientName}
                onChange={handleInputChange(setPatientName, 'name')}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="phone-input">
                <span>+1</span>
                <input 
                  type="tel" // Use type="tel" for semantic correctness
                  id="phone" 
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={errors.phone ? 'input-error' : ''}
                />
              </div>
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address" 
                value={address}
                onChange={handleInputChange(setAddress, 'address')}
                className={errors.address ? 'input-error' : ''}
              />
              {errors.address && <p className="error-text">{errors.address}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="device">Activate Device</label>
              <div className="device-input">
                <input 
                  type="text" 
                  id="device" 
                  value={deviceId}
                  onChange={handleInputChange(setDeviceId, 'deviceId')}
                  className={errors.deviceId ? 'input-error' : ''}
                />
                <button type="submit" className="activate-btn">Activate</button>
              </div>
              {errors.deviceId && <p className="error-text">{errors.deviceId}</p>}
            </div>
          </form>

          <p className="footer-note">
            The user can now log in to the mobile app with their phone number.
          </p>
        </div>

        {/* <div className={`activation-flow ${isActivated ? 'visible' : ''}`}>
            <div className="flow-arrow"></div>
            <span>( After activating... )</span>
        </div> */}

        <div className={`patient-data-section ${isActivated ? 'active' : ''}`}>
          <header className="patient-data-header">
            <h3>Patient Name: {activatedPatientName}</h3>
            <FiDownload className="download-icon" />
          </header>

          <div className="data-grid">
            {/* Cards remain static as per the design */}
            <div className="data-card"><div className="icon-wrapper"><BsRecordCircle /></div><h4>RBC Count</h4><p>5,5 mil/µL</p></div>
            <div className="data-card"><div className="icon-wrapper"><FaAsterisk /></div><h4>WBC Count</h4><p>7.2 thou/µL</p></div>
            <div className="data-card"><div className="icon-wrapper"><GoGitBranch /></div><h4>Platelets</h4><p>150 thou/µL</p></div>
            <div className="data-card"><div className="icon-wrapper hemoglobin-icon"><BsDropletFill className="droplet" /><FaPlus className="plus" /></div><h4>Hemoglobin</h4><p>15,2 g/dL</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;