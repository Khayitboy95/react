import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "10284823-4087-4b27-9f53-f347637049d1"
    },
    baseURL : 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    Follow(id){
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        }) 
    },
    unFollow(id){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        }) 
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`);
    }
}


