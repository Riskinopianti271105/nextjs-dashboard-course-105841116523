"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 1800 },
  { month: "Feb", revenue: 3900 },
  { month: "Mar", revenue: 3500 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 3100 },
  { month: "Jun", revenue: 1700 },
  { month: "Jul", revenue: 2600 },
  { month: "Aug", revenue: 2800 },
  { month: "Sep", revenue: 2100 },
  { month: "Oct", revenue: 3000 },
  { month: "Nov", revenue: 2700 },
  { month: "Dec", revenue: 3300 },
];

const latestInvoices = [
  { name: "Michael Novotny", email: "michael@novotny.com", amount: "$448.00" },
  { name: "Delba de Oliveira", email: "delba@oliveira.com", amount: "$5.00" },
  { name: "Balazs Orban", email: "balazs@orban.com", amount: "$345.77" },
  { name: "Lee Robinson", email: "lee@robinson.com", amount: "$542.46" },
];

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-500">Collected</p>
          <h2 className="text-2xl font-bold">$1,006.26</h2>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold">$1,256.32</h2>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-500">Total Invoices</p>
          <h2 className="text-2xl font-bold">13</h2>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-500">Total Customers</p>
          <h2 className="text-2xl font-bold">6</h2>
        </div>
      </div>

      {/* Grafik & Latest Invoices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grafik */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="mb-4 font-semibold">Recent Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Latest Invoices */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="mb-4 font-semibold">Latest Invoices</h3>
          <ul>
            {latestInvoices.map((invoice, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-b last:border-b-0 py-2"
              >
                <div>
                  <p className="font-medium">{invoice.name}</p>
                  <p className="text-sm text-gray-500">{invoice.email}</p>
                </div>
                <span className="font-semibold">{invoice.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
