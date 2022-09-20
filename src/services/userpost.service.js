import {axiosService} from "./axios.service";

import {urls} from "../urls/index"

const userService = {
    getAll: () => axiosService.get(urls.users)
}

const userPost = {
    getAllPost: (id) => axiosService.get(urls.posts+id)
}

export {
    userService,
    userPost
}