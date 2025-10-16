"use client"

import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const monthlyAccrualData = [
  { month: "Ocak", brut: 4000, net: 2400 },
  { month: "Şubat", brut: 3000, net: 1398 },
  { month: "Mart", brut: 2000, net: 9800 },
  { month: "Nisan", brut: 2780, net: 3908 },
  { month: "Mayıs", brut: 1890, net: 4800 },
  { month: "Haziran", brut: 2390, net: 3800 },
]

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Raporlar</h1>
      <Card>
        <CardHeader>
          <CardTitle>Aylık Tahakkuk Performansı</CardTitle>
          <CardDescription>Son 6 ayın brüt ve net tahakkuk verileri.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyAccrualData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `₺${value}`} />
                <Tooltip
                  formatter={(value) => `₺${value}`}
                  cursor={{ fill: 'hsl(var(--muted))' }}
                />
                <Legend />
                <Bar dataKey="brut" fill="hsl(var(--primary))" name="Brüt Tahakkuk" radius={[4, 4, 0, 0]} />
                <Bar dataKey="net" fill="hsl(var(--accent))" name="Net Tahakkuk" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
