import React from "react";
import Layout from "../core/Layout";

const Signin = () => ( 
    <Layout title = "Signin" description = "Signin to Shophone App">
        {process.env.REACT_APP_API_URL}
    </Layout>
);

export default Signin;
