import Link from "next/link";
import { orders } from "@/data/mockData";

const statusLabels: Record<string, string> = {
  pending: "Đang chờ",
  preparing: "Đang chuẩn bị",
  delivering: "Đang giao",
  delivered: "Đã giao",
};

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  preparing: "bg-blue-100 text-blue-800",
  delivering: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-primary hover:underline">
              ← Trang chủ
            </Link>
            <h1 className="text-2xl font-bold text-primary">🍜 Baemin</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Đơn hàng của tôi
          </h2>
          <p className="text-gray-600">
            Xem lịch sử và trạng thái đơn hàng của bạn
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">
              Bạn chưa có đơn hàng nào
            </p>
            <Link
              href="/"
              className="inline-block mt-4 text-primary hover:underline"
            >
              Đặt món ngay →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {order.restaurantName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Đơn hàng #{order.id} •{" "}
                      {new Date(order.createdAt).toLocaleString("vi-VN")}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}
                  >
                    {statusLabels[order.status]}
                  </span>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-700">
                          {item.quantity}x {item.name}
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {(item.price * item.quantity).toLocaleString(
                            "vi-VN"
                          )}
                          đ
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-gray-600">Tổng cộng:</span>
                  <span className="text-2xl font-bold text-primary">
                    {order.total.toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
