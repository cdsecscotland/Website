"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Download, Upload, CheckCircle, AlertCircle, Info } from "lucide-react"
import { importFromWordPress, saveImportedPosts, type BlogPost } from "@/lib/blog-data"

export default function WordPressImportPage() {
  const [wordpressUrl, setWordpressUrl] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [importing, setImporting] = useState(false)
  const [importedPosts, setImportedPosts] = useState<BlogPost[]>([])
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleImport = async () => {
    if (!wordpressUrl.trim()) {
      setError("Please enter a WordPress site URL")
      return
    }

    setImporting(true)
    setError("")
    setSuccess("")
    setProgress(0)

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90))
      }, 500)

      const posts = await importFromWordPress(wordpressUrl.trim(), apiKey.trim() || undefined)

      clearInterval(progressInterval)
      setProgress(100)

      setImportedPosts(posts)
      setSuccess(`Successfully imported ${posts.length} posts from WordPress!`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed")
      setProgress(0)
    } finally {
      setImporting(false)
    }
  }

  const handleSavePosts = async () => {
    try {
      await saveImportedPosts(importedPosts)
      setSuccess("Posts saved successfully!")
      setImportedPosts([])
    } catch (err) {
      setError("Failed to save posts")
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white/95 dark:bg-charcoal/95">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal dark:text-white mb-4">WordPress Import Tool</h1>
          <p className="text-lg text-charcoal/70 dark:text-white/70">
            Import your existing blog posts from WordPress using the REST API
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Import Form */}
          <Card className="shadow-lg border-0 bg-white dark:bg-charcoal/80">
            <CardHeader>
              <CardTitle className="flex items-center text-charcoal dark:text-white">
                <Upload className="w-6 h-6 mr-3 text-blue-500" />
                Import Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="wordpress-url" className="text-charcoal dark:text-white">
                  WordPress Site URL *
                </Label>
                <Input
                  id="wordpress-url"
                  placeholder="https://yourblog.wordpress.com"
                  value={wordpressUrl}
                  onChange={(e) => setWordpressUrl(e.target.value)}
                  disabled={importing}
                />
                <p className="text-sm text-charcoal/60 dark:text-white/60 mt-1">
                  Enter the full URL of your WordPress site
                </p>
              </div>

              <div>
                <Label htmlFor="api-key" className="text-charcoal dark:text-white">
                  API Key (Optional)
                </Label>
                <Input
                  id="api-key"
                  type="password"
                  placeholder="Enter API key for private posts"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  disabled={importing}
                />
                <p className="text-sm text-charcoal/60 dark:text-white/60 mt-1">
                  Required only for private or protected content
                </p>
              </div>

              {importing && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal dark:text-white">Importing posts...</span>
                    <span className="text-sm text-charcoal/70 dark:text-white/70">{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}

              <Button
                onClick={handleImport}
                disabled={importing || !wordpressUrl.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {importing ? "Importing..." : "Import Posts"}
              </Button>

              {error && (
                <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800 dark:text-red-200">{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-200 bg-green-50 dark:bg-green-900/20">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">{success}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="shadow-lg border-0 bg-white dark:bg-charcoal/80">
            <CardHeader>
              <CardTitle className="flex items-center text-charcoal dark:text-white">
                <Info className="w-6 h-6 mr-3 text-orange-500" />
                Import Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-charcoal dark:text-white mb-2">Before You Start</h4>
                <ul className="text-sm text-charcoal/70 dark:text-white/70 space-y-1">
                  <li>• Ensure your WordPress site has the REST API enabled</li>
                  <li>• For WordPress.com sites, the API is enabled by default</li>
                  <li>• For self-hosted sites, ensure REST API is not disabled</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-charcoal dark:text-white mb-2">What Gets Imported</h4>
                <ul className="text-sm text-charcoal/70 dark:text-white/70 space-y-1">
                  <li>• Post titles and content</li>
                  <li>• Publication dates and authors</li>
                  <li>• Categories and tags</li>
                  <li>• Featured images</li>
                  <li>• Post excerpts</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-charcoal dark:text-white mb-2">Category Mapping</h4>
                <p className="text-sm text-charcoal/70 dark:text-white/70">
                  WordPress categories will be automatically mapped to our blog categories:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    Security → Threat Intelligence
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Pentesting → Penetration Testing
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tools → Security Tools
                  </Badge>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800 dark:text-blue-200 text-sm">
                  The import process preserves original WordPress metadata for reference and maintains links to original
                  posts.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Imported Posts Preview */}
        {importedPosts.length > 0 && (
          <Card className="mt-8 shadow-lg border-0 bg-white dark:bg-charcoal/80">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-charcoal dark:text-white">
                  <Download className="w-6 h-6 mr-3 text-green-500" />
                  Imported Posts ({importedPosts.length})
                </CardTitle>
                <Button onClick={handleSavePosts} className="bg-green-600 hover:bg-green-700 text-white">
                  Save All Posts
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {importedPosts.map((post) => (
                  <div key={post.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-charcoal dark:text-white line-clamp-1">{post.title}</h4>
                      <Badge className="ml-2 flex-shrink-0">{post.category}</Badge>
                    </div>
                    <p className="text-sm text-charcoal/70 dark:text-white/70 line-clamp-2 mb-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-charcoal/60 dark:text-white/60">
                      <span>By {post.author}</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>{post.readTime} min read</span>
                      {post.wordpressData && (
                        <a
                          href={post.wordpressData.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View Original
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
