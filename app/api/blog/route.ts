import { NextRequest, NextResponse } from 'next/server'
import { getPaginatedBlogPosts } from '@/lib/markdown-blog'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '6')
  const category = searchParams.get('category') || undefined

  try {
    const posts = getPaginatedBlogPosts(page, limit, category)
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json([], { status: 500 })
  }
}