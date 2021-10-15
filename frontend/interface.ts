export interface post {
    title?: string;
    des?: string;
    city?: string;
    price?: string;
    farmerId?: string;
    id?: string;
    url?: string;
    cropType?: string;
}
export interface farmerByFarmerId {
    getFarmerByFarmerId?: {

        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: string;
        image?: string;
    }
}
export interface postArray {
    getPostByFarmer?: [post];
    getAllPosts?: [post];
    getAllThings?: [post];
}
export interface farmer {

    getByIdFarmers: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: string;
        image?: string;
    };
}

export interface order {
    title?: string;
    des?: string;
    url?: string;
    price?: string;
    city?: string;
    allFarmers: {
        title?: string;
        des?: string;
        url?: string;
        price?: string;
        city?: string;
    };
}
export interface allOrders {
    getAllFarmers: [order];
}
export interface logged {
    login: {
        name: string;
        id: string;
        email: string;
        token?: string;
    };
}
