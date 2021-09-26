export interface UserPost {
    UserPost: {
        title?: string;
        des?: string;
        city?: string;
        price?: string;
        farmerId?: string;
        id?: string;
    };
}
export interface farmer {
    getByIdFarmers: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: string;
    };
    getSecond:{
        name?: string;
    }
}

export interface order {
    title?: string;
    des?: string;
    allFarmers: {
        title?: string;
        des?: string;
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

