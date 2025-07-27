import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">💰 Catatan Keuangan</h1>
            </div>
            <div className="flex items-center space-x-4">
              {session ? (
                <Link href="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </Link>
                  <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Kelola Keuangan Anda dengan
            <span className="text-indigo-600"> Lebih Baik</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Aplikasi catatan keuangan yang mudah digunakan untuk mengelola pemasukan, pengeluaran, dan melacak kondisi keuangan Anda.</p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            {session ? (
              <Link href="/dashboard" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Masuk ke Dashboard
              </Link>
            ) : (
              <div className="space-y-3 sm:space-y-0 sm:space-x-3 sm:flex">
                <Link href="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Mulai Sekarang
                </Link>
                <Link href="/login" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Fitur</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Semua yang Anda Butuhkan</p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">📊</div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Dashboard Lengkap</p>
                <p className="mt-2 ml-16 text-base text-gray-500">Lihat ringkasan keuangan Anda dalam satu tampilan yang mudah dipahami.</p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">💳</div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Catat Transaksi</p>
                <p className="mt-2 ml-16 text-base text-gray-500">Catat pemasukan dan pengeluaran dengan mudah dan cepat.</p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">📈</div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Analisis Keuangan</p>
                <p className="mt-2 ml-16 text-base text-gray-500">Analisis pola pengeluaran dan pemasukan untuk perencanaan yang lebih baik.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
