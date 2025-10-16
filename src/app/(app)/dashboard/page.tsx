import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  Users,
  FileCheck,
  Upload,
  MoreHorizontal,
  FileEdit,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const summaryData = [
    { title: "Toplam Tahakkuk", value: "₺1,250,450.75", icon: DollarSign, change: "+12.5% geçen aydan" },
    { title: "Aktif Müşteriler", value: "89", icon: Users, change: "+2 yeni müşteri" },
    { title: "Doğrulama Bekleyen", value: "12", icon: FileCheck, change: "3 acil" }
]

const accrualData = [
    { id: 1, customer: "ABC Holding", period: "Mayıs 2024", revenue: 50000, returns: 2500, gross: 950, deductions: 50, net: 900, status: "Doğrulandı" },
    { id: 2, customer: "XYZ Lojistik", period: "Mayıs 2024", revenue: 120000, returns: 10000, gross: 1900, deductions: 200, net: 1700, status: "Beklemede" },
    { id: 3, customer: "Tekno A.Ş.", period: "Mayıs 2024", revenue: 75000, returns: 1200, gross: 1476, deductions: 76, net: 1400, status: "Doğrulandı" },
    { id: 4, customer: "Gıda Pazarlama", period: "Nisan 2024", revenue: 250000, returns: 30000, gross: 3500, deductions: 500, net: 3000, status: "Hatalı" },
];


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
          <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Upload className="mr-2 h-4 w-4" />
                    CSV Yükle
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>CSV Verisi Yükle</DialogTitle>
                    <DialogDescription>
                        Müşteri verilerini içeren CSV dosyasını seçin. Sistem dosyayı doğrulayacak ve verileri işleyecektir.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="csv-file">CSV Dosyası</Label>
                        <Input id="csv-file" type="file" accept=".csv" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Yükle</Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {summaryData.map(item => (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.change}</p>
              </CardContent>
            </Card>
        ))}
      </div>

      <Card>
          <CardHeader>
              <CardTitle>Son Tahakkuklar</CardTitle>
              <CardDescription>En son işlenen ve yönetilen tahakkuk kayıtları.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>Dönem</TableHead>
                    <TableHead className="text-right">Ciro</TableHead>
                    <TableHead className="text-right">Net Tahakkuk</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead><span className="sr-only">Eylemler</span></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {accrualData.map(item => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.customer}</TableCell>
                            <TableCell>{item.period}</TableCell>
                            <TableCell className="text-right">₺{item.revenue.toLocaleString()}</TableCell>
                            <TableCell className="text-right font-semibold">₺{item.net.toLocaleString()}</TableCell>
                            <TableCell>
                                <Badge variant={item.status === "Doğrulandı" ? "default" : item.status === "Beklemede" ? "secondary" : "destructive"}>
                                    {item.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Dialog>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Menüyü aç</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Eylemler</DropdownMenuLabel>
                                            <DialogTrigger asChild>
                                                <DropdownMenuItem>
                                                    <FileEdit className="mr-2 h-4 w-4"/>
                                                    Düzenle
                                                </DropdownMenuItem>
                                            </DialogTrigger>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>{item.customer} - {item.period} Tahakkuk Düzenle</DialogTitle>
                                            <DialogDescription>Limit, başarı primi ve not gibi manuel verileri girin.</DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="limit" className="text-right">Limit</Label>
                                                <Input id="limit" defaultValue="₺5,000" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="bonus" className="text-right">Başarı Primi</Label>
                                                <Input id="bonus" defaultValue={`₺${item.net * 0.1}`} className="col-span-3" />
                                            </div>
                                             <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="notes" className="text-right">Notlar</Label>
                                                <Input id="notes" placeholder="Ek notlar..." className="col-span-3" />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit">Kaydet</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
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
