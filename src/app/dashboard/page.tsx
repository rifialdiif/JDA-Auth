"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">💰 Dashboard Catatan Keuangan</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Selamat datang, {session.user?.name || session.user?.email}!</span>
              <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Selamat Datang di Dashboard Anda</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">💰</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Saldo</p>
                      <p className="text-2xl font-semibold text-gray-900">Rp 0</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">📈</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Pemasukan Bulan Ini</p>
                      <p className="text-2xl font-semibold text-gray-900">Rp 0</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">📉</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">Pengeluaran Bulan Ini</p>
                      <p className="text-2xl font-semibold text-gray-900">Rp 0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Aksi Cepat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">➕</div>
                    <p className="font-medium">Tambah Pemasukan</p>
                  </div>
                </button>
                <button className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">➖</div>
                    <p className="font-medium">Tambah Pengeluaran</p>
                  </div>
                </button>
                <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <p className="font-medium">Lihat Laporan</p>
                  </div>
                </button>
                <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚙️</div>
                    <p className="font-medium">Pengaturan</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Transaksi Terbaru</h3>
              <div className="text-center py-8">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <p className="text-gray-500">Belum ada transaksi</p>
                <p className="text-sm text-gray-400 mt-2">Mulai mencatat transaksi keuangan Anda</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informasi Akun</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Nama:</span>
                  <span className="font-medium">{session.user?.name || "Tidak ada nama"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span className="font-medium">{session.user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="text-green-600 font-medium">Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
