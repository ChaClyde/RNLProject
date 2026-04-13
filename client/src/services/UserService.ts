import AxiosInstance from "./AxiosInstance";

const UserService = {
    loadUsers: async () => {
        try {
            const resoponse = await AxiosInstance.get('/user/loadUsers')
            return resoponse;
        } catch (error) {
            throw error;
        }
    },
    storeUser: async (data: any) => {
        try {
            const response = await AxiosInstance.post("/user/storeUser", data);
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default UserService;