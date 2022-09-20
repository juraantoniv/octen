import axios from "axios";

import {baseURL}  from "../urls/index"

const axiosService = axios.create({baseURL});

export {
    axiosService
}