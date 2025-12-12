import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, BarChart3, ImageIcon } from "lucide-react"

export default async function AdminDashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Administrative panel for journal management</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild className="w-full justify-start bg-transparent" variant="outline">
              <Link href="/admin/submissions">
                <FileText className="mr-2 h-4 w-4" />
                View All Submissions
              </Link>
            </Button>
            <Button asChild className="w-full justify-start bg-transparent" variant="outline">
              <Link href="/admin/issues">
                <ImageIcon className="mr-2 h-4 w-4" />
                Manage Journal Issues
              </Link>
            </Button>
            <Button asChild className="w-full justify-start bg-transparent" variant="outline" disabled>
              <Link href="/admin/articles">
                <BarChart3 className="mr-2 h-4 w-4" />
                Manage Published Articles
              </Link>
            </Button>
            <Button asChild className="w-full justify-start bg-transparent" variant="outline" disabled>
              <Link href="/admin/users">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current journal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Storage Type</span>
              <span className="font-semibold text-blue-600">Local Storage</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">System Status</span>
              <span className="font-semibold text-green-600">Online</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
