import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AppLogo } from "@/components/icons"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <div className="flex justify-center mb-4">
             <AppLogo className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline text-center">Giriş Yap</CardTitle>
          <CardDescription className="text-center">
            Devam etmek için bilgilerinizi girin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@mail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Şifre</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Şifremi Unuttum?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm font-normal">Beni Hatırla</Label>
            </div>
            <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Giriş Yap</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
