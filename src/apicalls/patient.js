import { axiosInstance } from "./axiosInstance";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const Login_Patient = async (mobile_number) => {

    const send_otp_body = {
        'mobile_number': mobile_number
    }
    await fetch("http://localhost:5001" + '/api/auth/send_otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(send_otp_body)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        });
};
export const Login_OTP = async (mobile_number, otp) => {

    console.log(mobile_number);
    console.log(otp)
    const verify_otp_body = {
        'mobile_number': mobile_number,
        'otp': otp
    }
    await fetch("http://localhost:5001" + '/api/auth/verify_otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(verify_otp_body)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        });
};


// export const Login_Patient = async (payload) => {
//     try {
//         console.log(payload)
//         const response = await axiosInstance.post(baseUrl + "/api/users/login", payload);
//         console.log(response)
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };