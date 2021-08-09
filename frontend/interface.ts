export interface UserPost {
    UserPost: {
        title?: String;
        des?: String;
        city?: String;
        price?: String;
        farmerId?: String;
        id?: String;
    };
}
export interface farmer {
    getByIdFarmers: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: String;
    };
}

export interface order {
    title?: String;
    des?: String;
    allFarmers: {
        title?: String;
        des?: String;
    };
}
export interface allOrders {
    getAllFarmers: [order];
}
export interface logged {
    login: {
        name: String;
        id: String;
        email: String;
        token?: String;
    };
}
