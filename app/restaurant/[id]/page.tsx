import Link from "next/link";
import { getRestaurantById } from "@/data/mockData";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function RestaurantPage({ params }: PageProps) {
  const restaurant = getRestaurantById(params.id);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-primary hover:underline">
              ← Quay lại
            </Link>
            <h1 className="text-2xl font-bold text-primary">🍜 Baemin</h1>
            <Link href="/orders" className="text-gray-700 hover:text-primary">
              Đơn hàng
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative h-64">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h1>
                <p className="text-gray-600">{restaurant.description}</p>
              </div>
              <div className="bg-yellow-100 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">
                  ⭐ {restaurant.rating}
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold">Thời gian giao:</span>{" "}
                {restaurant.deliveryTime}
              </div>
              <div>
                <span className="font-semibold">Phí giao hàng:</span>{" "}
                {restaurant.deliveryFee.toLocaleString("vi-VN")}đ
              </div>
              <div>
                <span className="font-semibold">Đơn tối thiểu:</span>{" "}
                {restaurant.minOrder.toLocaleString("vi-VN")}đ
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thực đơn</h2>
          <div className="space-y-4">
            {restaurant.menu.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex"
              >
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.description}
                    </p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary mb-2">
                      {item.price.toLocaleString("vi-VN")}đ
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
