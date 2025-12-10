import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>{err.status} : {err.statusText}</h1>
            <div>{err.data}</div>
        </div>
    );
}

export default Error;