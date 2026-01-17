export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  menu: MenuItem[];
}

export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: {
    menuItemId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: "pending" | "preparing" | "delivering" | "delivered";
  createdAt: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Phở Gia Truyền",
    description: "Phở bò truyền thống, nước dùng đậm đà",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
    rating: 4.8,
    deliveryTime: "25-35 phút",
    deliveryFee: 15000,
    minOrder: 50000,
    menu: [
      {
        id: "m1",
        name: "Phở Bò Tái",
        description: "Phở bò tái chín, bánh phở tươi",
        price: 65000,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&h=200&fit=crop",
        category: "Món chính",
      },
      {
        id: "m2",
        name: "Phở Bò Chín",
        description: "Phở bò chín, thịt mềm ngon",
        price: 70000,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&h=200&fit=crop",
        category: "Món chính",
      },
      {
        id: "m3",
        name: "Phở Đặc Biệt",
        description: "Phở đầy đủ tái, chín, gầu, bò viên",
        price: 85000,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&h=200&fit=crop",
        category: "Món chính",
      },
    ],
  },
  {
    id: "2",
    name: "Bún Chả Hà Nội",
    description: "Bún chả đặc sản Hà Nội, thịt nướng thơm lừng",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    rating: 4.6,
    deliveryTime: "20-30 phút",
    deliveryFee: 12000,
    minOrder: 40000,
    menu: [
      {
        id: "m4",
        name: "Bún Chả Thường",
        description: "Bún chả với thịt nướng, nước mắm chua ngọt",
        price: 55000,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop",
        category: "Món chính",
      },
      {
        id: "m5",
        name: "Bún Chả Đặc Biệt",
        description: "Bún chả với thịt nướng và nem nướng",
        price: 75000,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop",
        category: "Món chính",
      },
    ],
  },
  {
    id: "3",
    name: "Pizza Italia",
    description: "Pizza Ý chính thống, phô mai thơm ngon",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    rating: 4.7,
    deliveryTime: "30-40 phút",
    deliveryFee: 20000,
    minOrder: 100000,
    menu: [
      {
        id: "m6",
        name: "Pizza Margherita",
        description: "Pizza với phô mai mozzarella, cà chua, húng quế",
        price: 180000,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
        category: "Pizza",
      },
      {
        id: "m7",
        name: "Pizza Pepperoni",
        description: "Pizza với pepperoni và phô mai",
        price: 220000,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
        category: "Pizza",
      },
      {
        id: "m8",
        name: "Pizza Hải Sản",
        description: "Pizza với tôm, mực, cua",
        price: 280000,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
        category: "Pizza",
      },
    ],
  },
  {
    id: "4",
    name: "Cơm Tấm Sài Gòn",
    description: "Cơm tấm đậm đà hương vị miền Nam",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    rating: 4.5,
    deliveryTime: "15-25 phút",
    deliveryFee: 10000,
    minOrder: 30000,
    menu: [
      {
        id: "m9",
        name: "Cơm Tấm Sườn",
        description: "Cơm tấm với sườn nướng, bì, chả",
        price: 60000,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
        category: "Món chính",
      },
      {
        id: "m10",
        name: "Cơm Tấm Đặc Biệt",
        description: "Cơm tấm đầy đủ sườn, bì, chả, trứng",
        price: 80000,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
        category: "Món chính",
      },
    ],
  },
  {
    id: "5",
    name: "Bánh Mì Sài Gòn",
    description: "Bánh mì giòn tan, nhân đầy đặn",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    rating: 4.9,
    deliveryTime: "10-20 phút",
    deliveryFee: 8000,
    minOrder: 20000,
    menu: [
      {
        id: "m11",
        name: "Bánh Mì Thịt Nướng",
        description: "Bánh mì với thịt nướng, pate, rau củ",
        price: 35000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop",
        category: "Bánh mì",
      },
      {
        id: "m12",
        name: "Bánh Mì Chả Cá",
        description: "Bánh mì với chả cá, rau củ",
        price: 30000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop",
        category: "Bánh mì",
      },
      {
        id: "m13",
        name: "Bánh Mì Đặc Biệt",
        description: "Bánh mì đầy đủ thịt, pate, chả, trứng",
        price: 45000,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop",
        category: "Bánh mì",
      },
    ],
  },
];

export const orders: Order[] = [
  {
    id: "o1",
    restaurantId: "1",
    restaurantName: "Phở Gia Truyền",
    items: [
      {
        menuItemId: "m1",
        name: "Phở Bò Tái",
        quantity: 2,
        price: 65000,
      },
    ],
    total: 130000,
    status: "delivered",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "o2",
    restaurantId: "3",
    restaurantName: "Pizza Italia",
    items: [
      {
        menuItemId: "m6",
        name: "Pizza Margherita",
        quantity: 1,
        price: 180000,
      },
      {
        menuItemId: "m7",
        name: "Pizza Pepperoni",
        quantity: 1,
        price: 220000,
      },
    ],
    total: 400000,
    status: "delivering",
    createdAt: "2024-01-15T14:20:00Z",
  },
  {
    id: "o3",
    restaurantId: "5",
    restaurantName: "Bánh Mì Sài Gòn",
    items: [
      {
        menuItemId: "m11",
        name: "Bánh Mì Thịt Nướng",
        quantity: 3,
        price: 35000,
      },
    ],
    total: 105000,
    status: "preparing",
    createdAt: "2024-01-15T16:45:00Z",
  },
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}

export function getMenuItemById(restaurantId: string, menuItemId: string): MenuItem | undefined {
  const restaurant = getRestaurantById(restaurantId);
  return restaurant?.menu.find((item) => item.id === menuItemId);
}
