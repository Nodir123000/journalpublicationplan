import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default async function SubmissionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/submissions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Submissions
          </Link>
        </Button>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Database integration has been removed. Please configure your preferred database solution to view submission
          details.
        </AlertDescription>
      </Alert>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Submission Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No database connection available for submission ID: {id}</p>
        </CardContent>
      </Card>
    </div>
  )
}
