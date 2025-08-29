import {backendUrl} from "./config";
import Cookies from "js-cookie";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    
    // route: /studentCreate
    const response = await fetch(backendUrl + route, 
        {
         method: "POST",
         headers: {"Content-Type": "application/json"}, 
         body: JSON.stringify(body)
        });

        const formattedResponse = await response.json();
        return formattedResponse;
};

export const makeUnauthenticatedPOSTRequestForUpload = async (route, formData) => {
    
    // route: /studentCreate
    console.log("formData received is :" , {formData} )
    const response = await fetch(backendUrl + route, 
        {
         method: "POST",
         headers: { }, 
         body: formData
        });

        const formattedResponse = await response.json();
        return formattedResponse;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {    
    const token = getToken();
    const response = await fetch(backendUrl + route, 
        {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }, 
         body: JSON.stringify(body)
        });

        const formattedResponse = await response.json();
        return formattedResponse;
};

export const makeAuthenticatedGETRequest = async (route) => {
    const token = Cookies.get('token');
    const response = await fetch(backendUrl + route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};

export const makeUnauthenticatedGETRequest = async (route) => {
    const response = await fetch(backendUrl + route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};


const getToken = () => {
    const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");
    return accessToken;
}