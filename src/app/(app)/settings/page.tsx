import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const formulaJson = {
    "version": "1.2",
    "name": "Standart Komisyon 2024",
    "formula": "(ciro * 0.02) - (iadeler * 0.5)",
    "variables": [
        {"name": "ciro", "source": "csv.satis_tutari"},
        {"name": "iadeler", "source": "csv.iade_tutari"}
    ]
}

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Ayarlar</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="formulas">Formüller</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profil Ayarları</CardTitle>
              <CardDescription>
                Kişisel bilgilerinizi ve şifrenizi güncelleyin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" defaultValue="Admin User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" defaultValue="admin@accrualflow.com" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="password">Yeni Şifre</Label>
                <Input id="password" type="password" />
              </div>
              <Button>Değişiklikleri Kaydet</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="formulas">
          <Card>
            <CardHeader>
              <CardTitle>Formül Yönetimi</CardTitle>
              <CardDescription>
                Tahakkuk hesaplamalarında kullanılan formül versiyonlarını yönetin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted font-code text-sm">
                    <pre>
                        {JSON.stringify(formulaJson, null, 2)}
                    </pre>
                </div>
                <Button>Yeni Versiyon Ekle</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
