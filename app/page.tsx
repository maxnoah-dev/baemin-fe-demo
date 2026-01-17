import Link from "next/link";
import { restaurants } from "@/data/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🍜 Baemin</h1>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-700 hover:text-primary">
                Trang chủ
              </Link>
              <Link href="/orders" className="text-gray-700 hover:text-primary">
                Đơn hàng
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Nhà hàng nổi bật
          </h2>
          <p className="text-gray-600">
            Khám phá các nhà hàng ngon nhất trong khu vực của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              href={`/restaurant/${restaurant.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-yellow-600">
                  ⭐ {restaurant.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {restaurant.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>⏱️ {restaurant.deliveryTime}</span>
                  <span>🚚 {restaurant.deliveryFee.toLocaleString("vi-VN")}đ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
