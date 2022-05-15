import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestsAPI} from "./bll/RequestsAPI";

const Request = () => {
    let [success, setSuccess] = useState(false)
    let [response, setResponse] = useState('')

    const sendRequest = (success: boolean) => {
        RequestsAPI.post(success)
            .then(response => {
                console.log(response)
                setResponse(response.data.info)
            })
            .catch(error => {
                    console.log(error)
                    console.log(error.response ? error.response.data.errorText : error.message)
                setResponse(`${error.response.data.info}`)
                }
            )
    }

    return (
        <div>
            <SuperCheckbox onChange={(e) => setSuccess(e.currentTarget.checked)}/>
            <SuperButton onClick={()=>sendRequest(success)}>Post</SuperButton>
            <div>
                {response}
            </div>
        </div>
    );
};

export default Request;