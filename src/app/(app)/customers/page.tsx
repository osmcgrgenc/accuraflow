import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"

const customers = [
  { id: "CUST001", name: "ABC Holding", contact: "ahmet.y@abcholding.com", status: "Aktif" },
  { id: "CUST002", name: "XYZ Lojistik", contact: "zeynep.k@xyz.com", status: "Aktif" },
  { id: "CUST003", name: "Tekno A.Ş.", contact: "info@tekno.com", status: "Pasif" },
  { id: "CUST004", name: "Gıda Pazarlama", contact: "muhasebe@gida.com.tr", status: "Aktif" },
]

export default function CustomersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Müşteriler</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Yeni Müşteri Ekle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Müşteri Listesi</CardTitle>
          <CardDescription>Sistemde kayıtlı tüm müşterileri yönetin.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Müşteri ID</TableHead>
                <TableHead>Müşteri Adı</TableHead>
                <TableHead>İletişim</TableHead>
                <TableHead>Durum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.contact}</TableCell>
                  <TableCell>
                    <Badge variant={customer.status === "Aktif" ? "secondary" : "outline"}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
