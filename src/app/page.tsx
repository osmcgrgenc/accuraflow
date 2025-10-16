import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AppLogo } from '@/components/icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-dashboard') ?? {
    imageUrl: 'https://picsum.photos/seed/1/1200/800',
    imageHint: 'dashboard analytics'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-card border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <AppLogo className="h-6 w-6 text-primary" />
          <span className="sr-only">AccrualFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild variant="ghost">
            <Link href="/login" prefetch={false}>
              Giriş Yap
            </Link>
          </Button>
          <Button asChild variant="default">
             <Link href="/login" prefetch={false}>
              Başlayın
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Tahakkuk Yönetimini Basitleştirin
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    AccrualFlow, CSV verilerini kolayca yönetmenizi, prim hesaplarını merkezi bir şekilde takip etmenizi ve tüm süreci otomatize etmenizi sağlar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/login" prefetch={false}>
                      Hemen Başla
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src={heroImage.imageUrl}
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint={heroImage.imageHint}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-card">
        <p className="text-xs text-muted-foreground">&copy; 2024 AccrualFlow. Tüm hakları saklıdır.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Kullanım Koşulları
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Gizlilik Politikası
          </Link>
        </nav>
      </footer>
    </div>
  );
}
