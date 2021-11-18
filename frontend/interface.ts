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
export interface postById {
    getPostById: {
        title?: string;
        des?: string;
        city?: string;
        price?: string;
        farmerId?: string;
        id?: string;
        url?: string;
        cropType?: string;
    }
}
export interface cartitems {
    quantity?: any;
    id?: String;
    farmerId?: String
    name?: String
    title?: String
    rate?: String
    city?: String
    description?: String
    photo?: String
}
export interface cartArray {
    getCartItems: [cartitems]
}
export interface postArray {
    getPostByFarmer?: [post];
    getAllPosts?: [post];
    getAllThings?: [post];
}
export interface farmer {
    getRandomFarmer?: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: string;
        image?: string;
    };
    getByIdFarmers?: {
        name?: string;
        city?: string;
        email?: string;
        phone?: string;
        id?: string;
        image?: string;
    };
}

export interface order {
    allFarmers?: {
        title?: string;
        des?: string;
        url?: string;
        price?: string;
        city?: string;
    };
    getRandomPost?: {
        title?: string;
        des?: string;
        city?: string;
        price?: string;
        farmerId?: string;
        id?: string;
        url?: string;
        cropType?: string;
    }
}
export interface allOrders {
    getAllFarmers: [order];
}
export interface logged {
    login: {
        email?: string
        password?: string
        id?: string
        token?: string
    };
}

export interface infoState {
    info?: {
        city?: String
        name?: String
        address?: String
        description?: String
        photo?: string
        farmer?: String,
        quantity?: Number,
        farmerName?: String
        rate?: Number
    }
}