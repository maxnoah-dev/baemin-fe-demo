import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Trang không tồn tại</p>
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
