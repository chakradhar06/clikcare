import React,  { useState } from 'react';
import PatientIcon from '../assets/PatientIcon.svg';

function PatientRegistration() {
    const [patientName, setPatientName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [agreedTerms, setAgreedTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', {
          patientName,
          dateOfBirth,
          gender,
          bloodGroup,
          mobileNumber,
          email,
          agreedTerms
        });
        
        setPatientName('');
        setDateOfBirth('');
        setGender('');
        setBloodGroup('');
        setMobileNumber('');
        setEmail('');
        setAgreedTerms(false);
      };
    const [phonenumberotp, setphonenumberotp] = useState("");
    const [emailotp, setemailotp] = useState("");
    const [phonenumberotpSent, setphonenumberotpSent] = useState(false);
    const [emailotpSent, setemailotpSent] = useState(false);
    const [isphonenumberverified, setisphonenumberverified]=useState(false);
    const [isemailverified, setisemailverified]=useState(false);
    const sendphonenumberotp=()=>{
        // Logic to send OTP to the provided phone number
        setphonenumberotpSent(true);
    }
    const sendemailotp=()=>{
        // Logic to send OTP to the provided email
        setemailotpSent(true);
    }
    const verifyphonenumberotp=()=>{
        //logic to verify phone number by otp
        setisphonenumberverified(true);
        setphonenumberotpSent(false);
    }
    const verifyemailotp=()=>{
        //logic to verify email by otp
        setisemailverified(true);
        setemailotpSent(false);
    }
  return (
    <div>
        <div style={{width:"100%"}}>
            <img src={PatientIcon} className="img-fluid" alt="Clik Care Logo" ></img>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="center-container">
            <div className="card-body mb-3 g-30" style={{ width: '30rem' }}>
            <h1 className="card-title mb-3 g-10 text-center">Patient Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 g-10">
                <label htmlFor="PatientName" className="form-label required"><span className="form-label-heading">Full Name <span className="text-danger">*</span></span></label>
                <input type="text" className="form-control" id="InputPatientName" placeholder="Enter your Full Name" required minLength="2" maxLength="20" onChange={(e) => {setPatientName(e.target.value);}} />
                </div>

                <div className="mb-3 g-10">
                <label htmlFor="DateOfBirth" className="form-label required"><span className="form-label-heading">Date of Birth <span className="text-danger">*</span></span></label>
                <input type="date" className="form-control" id="InputDateOfBirth" placeholder="Select your Date of Birth" required onChange={(e) => {setDateOfBirth(e.target.value);}}/>
                </div>

                <div className="row">
                <div className="col-md-6">
                    <div className="mb-3 g-10">
                    <label htmlFor="Gender" className="form-label required"><span className="form-label-heading" >Gender <span className="text-danger">*</span></span></label>
                    <select className="form-select" data-toggle="dropdown" required id="InputGender" onChange={(e) => {setGender(e.target.value);}}>
                        <option value="">Select</option> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3 g-10">
                    <label htmlFor="BloodGroup" className="form-label required"><span className="form-label-heading">Blood Group <span className="text-danger">*</span></span></label>
                    <select className="form-select" data-toggle="dropdown" id="InputBloodGroup" onChange={(e) => {setBloodGroup(e.target.value);}}>
                        <option value="">Select</option> 
                        <option value="A+">A RhD positive (A+)</option>
                        <option value="A-">A RhD negative (A-)</option>
                        <option value="B+">B RhD positive (B+)</option>
                        <option value="B-">B RhD negative (B-)</option>
                        <option value="O+">O RhD positive (O+)</option>
                        <option value="O-">O RhD negative (O-)</option>
                        <option value="AB+">AB RhD positive (AB+)</option>
                        <option value="AB-">AB RhD negative (AB-)</option>
                    </select>
                    </div>
                </div>
                </div>

                <div className="mb-3 g-10">
                <label htmlFor="MobileNumber" className="form-label required"><span className="form-label-heading">Mobile Number <span className="text-danger">*</span></span></label>
                    <div class="row ">
                        <input class="col-md-9" type="tel" pattern="[7-9]{1}[0-9]{9}" className="form-control" id="InputMobileNumber" placeholder="Enter your Mobile Number" required minLength="10" maxLength="10" onChange={(e) => {setMobileNumber(e.target.value);}} />
                        <button className={`col-md-2 offset-md-1 btn ${isphonenumberverified ? "btn-success" : "btn-primary"}`} onClick={isphonenumberverified ? null : sendphonenumberotp}> {isphonenumberverified ? "Verified" : "Verify"} </button>
                    </div>
                    {phonenumberotpSent &&
                        <div className="mt-3">
                            <div>We have sent 6 digit code to {mobileNumber}</div>
                            <div>Enter the otp to complete the verification</div>
                            <input className="form-control" type="text" placeholder="Enter OTP" />
                            <div></div>
                            <button className="mb-3 g-10 btn btn-primary btn-sm d-block mx-auto" onClick={verifyphonenumberotp}>Verify OTP</button>
                        </div>
                    }
                </div>

                <div className="mb-3 g-10">
                <label htmlFor="Email" className="form-label required"><span className="form-label-heading">Email <span className="text-danger">*</span></span></label>
                <div class="row ">
                    <input type="email" class="col-8" className="form-control" id="InputEmail" placeholder="Enter your Email" required onChange={(e)=>{setEmail(e.target.value);}}/>
                    <button class="col-2" onClick={sendemailotp}>verify</button>
                </div>
                    {emailotpSent &&
                        <div className="mt-3">
                            <span>Otp is sent to {email}</span>
                            <input className="form-control" type="text" placeholder="Enter OTP" />
                            <button className="btn btn-primary mt-2" onClick={verifyemailotp}>Verify OTP</button>
                        </div>
                    }
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 g-10 form-check">    
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required onChange={(e)=>{setAgreedTerms(e.target.checked);}}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>

                <button type="submit" className="mb-3 g-10 btn btn-primary btn-lg d-block mx-auto rounded-pill" style={{ width: '250px' }}> Register </button>

                <p className="card-text mb-3 g-10 text-center">Already Registered? <a href="#" className="card-link"> Login </a></p>
            </form>
            </div>
        </div>
        </div>
    </div>
  );
}

export default PatientRegistration;