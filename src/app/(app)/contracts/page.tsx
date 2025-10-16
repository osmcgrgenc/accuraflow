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

const contracts = [
  { id: "CONT-015", customer: "ABC Holding", startDate: "01-01-2024", endDate: "31-12-2024", status: "Aktif" },
  { id: "CONT-016", customer: "XYZ Lojistik", startDate: "01-03-2023", endDate: "28-02-2025", status: "Aktif" },
  { id: "CONT-011", customer: "Tekno A.Ş.", startDate: "01-06-2022", endDate: "31-05-2023", status: "Sona Erdi" },
  { id: "CONT-018", customer: "Gıda Pazarlama", startDate: "15-02-2024", endDate: "14-02-2025", status: "Aktif" },
]

export default function ContractsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Sözleşmeler</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sözleşme Listesi</CardTitle>
          <CardDescription>Müşteri sözleşmelerini ve durumlarını görüntüleyin.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sözleşme ID</TableHead>
                <TableHead>Müşteri</TableHead>
                <TableHead>Başlangıç Tarihi</TableHead>
                <TableHead>Bitiş Tarihi</TableHead>
                <TableHead>Durum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell className="font-medium">{contract.id}</TableCell>
                  <TableCell>{contract.customer}</TableCell>
                  <TableCell>{contract.startDate}</TableCell>
                  <TableCell>{contract.endDate}</TableCell>
                  <TableCell>
                    <Badge variant={contract.status === "Aktif" ? "default" : "destructive"}>
                      {contract.status}
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
