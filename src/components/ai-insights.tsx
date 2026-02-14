"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { generateDashboardInsights } from "@/app/actions/generate-insights"

interface Insight {
  type: "warning" | "success" | "info"
  message: string
  action?: string
}

interface AIInsightsProps {
  data: {
    customer: string
    revenue: number
    status: string
  }[]
}

export function AIInsights({ data }: AIInsightsProps) {
  const [loading, setLoading] = useState(false)
  const [insights, setInsights] = useState<Insight[]>([])
  const [error, setError] = useState<string | null>(null)

  const generateInsights = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await generateDashboardInsights(data)
      
      if (result.success && result.data) {
        setInsights(result.data)
      } else {
        setError(result.error || "Beklenmeyen bir hata oluştu.")
      }
    } catch (err) {
      setError("AI servisine bağlanılamadı.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-primary/20 bg-primary/5 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Akıllı Analiz
          </CardTitle>
          <CardDescription>
            Genkit motoru verilerinizi tarayarak fırsat ve riskleri belirler.
          </CardDescription>
        </div>
        <Button 
          size="sm" 
          onClick={generateInsights} 
          disabled={loading}
          variant="outline"
          className="bg-background"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Analiz Et"}
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        {error && (
          <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md border border-destructive/20">
            {error}
          </div>
        )}

        {insights.length === 0 && !loading && !error && (
          <div className="text-center py-6 text-muted-foreground italic border-2 border-dashed rounded-lg">
            Verileri analiz etmek için butona tıklayın.
          </div>
        )}
        
        {loading && (
          <div className="flex flex-col items-center py-10 gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm animate-pulse">Genkit verileri işliyor...</p>
          </div>
        )}

        <div className="grid gap-3">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-3 rounded-md bg-background border shadow-sm transition-all hover:border-primary/50"
            >
              {insight.type === "warning" && <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />}
              {insight.type === "success" && <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />}
              {insight.type === "info" && <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />}
              
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {insight.message}
                </p>
                {insight.action && (
                  <Button variant="link" className="h-auto p-0 text-xs font-bold text-primary">
                    {insight.action} →
                  </Button>
                )}
              </div>
              <Badge variant="outline" className="text-[10px] uppercase">
                {insight.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
