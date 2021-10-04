export interface getAllPosts {
  title?: string;
  des?: string;
  city?: string;
  price?: string;
  farmerId?: string;
  id?: string;
}

export interface UserPostA {
  getAllPosts: [getAllPosts];
}
export interface farmer {
  getByIdFarmers: {
    name?: string;
    city?: string;
    email?: string;
    phone?: string;
    id?: string;
  };
  secondq: {
    name?: string;
  };
  third: {
    name?: string;
  };
}

export interface order {
  title?: string;
  des?: string;
  url?: string;
  price?: string;
  allFarmers: {
    title?: string;
    des?: string;
    url?: string;
    price?: string;
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
