'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BlogImage from '@/app/components/BlogImage';
import ArticleNotFound from '@/app/components/ArticleNotFound';
import ArticleLoading from '@/app/components/ArticleLoading';

interface BlogPost {
    _id: string;
    title: string;
    body: string | { content?: string; excerpt?: string; introduction?: string; [key: string]: any };
    date: string;
    slug: string;
    author: string;
    image?: string;
    categories?: Array<{ name: string; _id: string }>;
}

interface BlogPostDetailClientProps {
    slug: string;
}

// Helper function to calculate read time
function calculateReadTime(body: string | { content?: string; excerpt?: string; introduction?: string; [key: string]: any }): string {
    const text = typeof body === 'string' ? body : body.content || body.excerpt || '';
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

// Helper function to check if body is structured JSON content
function isStructuredContent(body: any): boolean {
    if (!body || typeof body !== 'object') return false;
    
    // Check for structured format with introduction, sections, conclusion
    return (
        (body.introduction !== undefined || body.section1 !== undefined) &&
        (body.section1 !== undefined || body.conclusion !== undefined)
    );
}

// Helper function to render body content
function renderBody(body: string | { content?: string; excerpt?: string; introduction?: string; [key: string]: any } | any): any {
    if (!body) {
        return null;
    }
    
    // If it's a string, try to parse it as JSON first
    if (typeof body === 'string') {
        // Check if it's a JSON string
        if (body.trim().startsWith('{') || body.trim().startsWith('[')) {
            try {
                const parsed = JSON.parse(body);
                // If parsing succeeds, recursively process the parsed object
                return renderBody(parsed);
            } catch {
                // If parsing fails, return the string as-is
                return body;
            }
        }
        return body;
    }
    
    // If it's an object, check if it's structured content
    if (typeof body === 'object' && body !== null) {
        // Check for structured format
        if (isStructuredContent(body)) {
            return body; // Return the structured object as-is
        }
        
        // Try common property names in order of preference
        if (body.content && typeof body.content === 'string') {
            return body.content;
        }
        if (body.text && typeof body.text === 'string') {
            return body.text;
        }
        if (body.body && typeof body.body === 'string') {
            return body.body;
        }
        if (body.html && typeof body.html === 'string') {
            return body.html;
        }
        if (body.excerpt && typeof body.excerpt === 'string') {
            return body.excerpt;
        }
        // If it's an array, try to join it
        if (Array.isArray(body)) {
            return body.map(item => typeof item === 'string' ? item : JSON.stringify(item)).join('\n\n');
        }
        // If object has nested content, try to extract it
        if (body.blocks && Array.isArray(body.blocks)) {
            // Handle rich text editor format (like Draft.js, Slate, etc.)
            return body.blocks.map((block: any) => block.text || '').join('\n\n');
        }
        // Last resort: return null to show debug info
        return null;
    }
    
    return String(body);
}

export default function BlogPostDetailClient({ slug }: BlogPostDetailClientProps) {
    // Client component responsible for fetching and rendering the blog post
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect hook - MUST be called before any conditional returns
    useEffect(() => {
        let isMounted = true;
        
        async function fetchPost() {
            if (!slug) {
                if (isMounted) {
                    setLoading(false);
                }
                return;
            }

            try {
                const response = await fetch(`/api/posts/${slug}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Post not found');
                    }
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                if (isMounted) {
                    setPost(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'An error occurred');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchPost();
        
        return () => {
            isMounted = false;
        };
    }, [slug]);
    
    // Compute values inline (not using useMemo to avoid hook order issues)
    // These will be computed after hooks but before conditional returns
    const categoryName = post && post.categories && post.categories.length > 0 
        ? post.categories[0].name 
        : 'Uncategorized';
    
    const readTime = post && post.body 
        ? calculateReadTime(post.body) 
        : '0 min read';
    
    const bodyContent = post && post.body 
        ? renderBody(post.body) 
        : null;
    
    const isStructured = bodyContent 
        ? isStructuredContent(bodyContent) 
        : false;
    
    const postDate = post && post.date 
        ? new Date(post.date).toISOString() 
        : new Date().toISOString();

    // Get base URL (works in client component)
    const baseUrl = typeof window !== 'undefined' 
        ? window.location.origin 
        : (process.env.NEXT_PUBLIC_SITE_URL || "https://kariemgerges.com");

    // Structured data for Article schema
    const articleStructuredData = post ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": typeof post.body === 'string' 
            ? post.body.substring(0, 200).replace(/[#*]/g, '').trim()
            : (post.body?.excerpt || post.body?.introduction || ''),
        "image": post.image ? (post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`) : undefined,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Person",
            "name": post.author || "Kariem Gerges",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Person",
            "name": "Kariem Gerges",
            "url": baseUrl
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/pages/blog/${post.slug || post._id}`
        },
        "articleSection": categoryName,
        "keywords": post.categories?.map((cat: any) => cat.name).join(', ') || 'Software Engineering'
    } : null;

    // Breadcrumb structured data
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${baseUrl}/pages/blog`
            },
            ...(post ? [{
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `${baseUrl}/pages/blog/${post.slug || post._id}`
            }] : [])
        ]
    };

    // NOW we can have conditional returns - all hooks have been called
    if (loading) {
        return <ArticleLoading />;
    }

    if (error || !post) {
        return <ArticleNotFound slug={slug} error={error || undefined} />;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Structured Data */}
            {articleStructuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
            />
            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none" />
                
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/pages/blog"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors mb-6"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Blog</span>
                        </Link>

                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 shadow-sm mb-6">
                            <BookOpen className="w-4 h-4 text-amber-400" />
                            <p className="text-xs sm:text-sm text-gray-300 tracking-wide uppercase font-medium">
                                {categoryName}
                            </p>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-6 sm:mb-8 tracking-tight text-white">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-300 pb-6 border-b border-gray-700">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={postDate}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden"
                    >
                        <BlogImage
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
                <div className="max-w-4xl mx-auto">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="article-content"
                    >
                        {bodyContent ? (
                            <div className="prose prose-lg prose-invert max-w-none 
                                prose-headings:font-light prose-headings:text-white prose-headings:tracking-tight
                                prose-h1:text-4xl prose-h1:sm:text-5xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:text-white
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-gray-200
                                prose-h3:text-2xl prose-h3:sm:text-3xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-gray-300
                                prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:sm:text-lg
                                prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline prose-a:transition-all hover:prose-a:text-orange-400
                                prose-strong:text-white prose-strong:font-medium
                                prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-300 prose-li:font-light prose-li:text-base prose-li:sm:text-lg
                                prose-ol:my-6 prose-ol:space-y-2 prose-ol:text-gray-300
                                prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:my-8 prose-blockquote:bg-gray-900/30 prose-blockquote:py-2 prose-blockquote:rounded-r
                                prose-code:text-amber-300 prose-code:bg-gray-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:border prose-code:border-gray-700
                                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:border prose-pre:border-gray-700
                                prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8 prose-img:border prose-img:border-gray-700
                                prose-hr:border-gray-700 prose-hr:my-12">
                                {/* Render structured content */}
                                {isStructured ? (
                                    <div className="article-body">
                                        {/* Introduction */}
                                        {bodyContent.introduction && (
                                            <div className="mb-12">
                                                <p className="text-xl sm:text-2xl text-gray-200 font-light leading-relaxed mb-6">
                                                    {bodyContent.introduction}
                                                </p>
                                            </div>
                                        )}
                                        
                                        {/* Sections */}
                                        {[1, 2, 3, 4].map((num) => {
                                            const section = bodyContent[`section${num}`];
                                            if (!section) return null;
                                            
                                            return (
                                                <div key={num} className="mb-16">
                                                    {/* Section Title */}
                                                    {section.title && (
                                                        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-6 mt-10 first:mt-0">
                                                            {section.title}
                                                        </h2>
                                                    )}
                                                    
                                                    {/* Section Image */}
                                                    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
                                                        <BlogImage
                                                            src={section.sectionImg}
                                                            alt={section.title || `Section ${num}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    
                                                    {/* Section Content */}
                                                    {section.content && (
                                                        <div className="space-y-4">
                                                            {section.content.split('\n\n').map((paragraph: string, pIndex: number) => {
                                                                const trimmed = paragraph.trim();
                                                                if (!trimmed) return null;
                                                                return (
                                                                    <p key={pIndex} className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                                                                        {trimmed}
                                                                    </p>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                        
                                        {/* Conclusion */}
                                        {bodyContent.conclusion && bodyContent.conclusion.content && (
                                            <div className="mt-12 pt-8 border-t border-gray-700">
                                                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-6">
                                                    Conclusion
                                                </h3>
                                                <div className="space-y-4">
                                                    {bodyContent.conclusion.content.split('\n\n').map((paragraph: string, pIndex: number) => {
                                                        const trimmed = paragraph.trim();
                                                        if (!trimmed) return null;
                                                        return (
                                                            <p key={pIndex} className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                                                                {trimmed}
                                                            </p>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : typeof bodyContent === 'string' && bodyContent.includes('<') && bodyContent.includes('>') ? (
                                    <div 
                                        className="article-body"
                                        dangerouslySetInnerHTML={{ __html: bodyContent }}
                                    />
                                ) : (
                                    <div className="article-body">
                                        {typeof bodyContent === 'string' ? (
                                            bodyContent.split('\n\n').map((paragraph, index) => {
                                                const trimmed = paragraph.trim();
                                                if (!trimmed) return <br key={index} />;
                                                
                                                // Check if it's a heading
                                                if (trimmed.startsWith('# ')) {
                                                    return <h1 key={index} className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-6 mt-12 first:mt-0">{trimmed.substring(2).trim()}</h1>;
                                                } else if (trimmed.startsWith('## ')) {
                                                    return <h2 key={index} className="text-3xl sm:text-4xl font-light text-gray-200 tracking-tight mb-4 mt-10">{trimmed.substring(3).trim()}</h2>;
                                                } else if (trimmed.startsWith('### ')) {
                                                    return <h3 key={index} className="text-2xl sm:text-3xl font-light text-gray-300 tracking-tight mb-3 mt-8">{trimmed.substring(4).trim()}</h3>;
                                                } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                                                    // List item
                                                    const items = paragraph.split('\n').filter(line => {
                                                        const lineTrimmed = line.trim();
                                                        return lineTrimmed.startsWith('- ') || lineTrimmed.startsWith('* ');
                                                    });
                                                    return (
                                                        <ul key={index} className="list-disc list-inside space-y-2 my-6 text-gray-300 font-light text-base sm:text-lg">
                                                            {items.map((item, itemIndex) => (
                                                                <li key={itemIndex}>{item.replace(/^[-*]\s+/, '').trim()}</li>
                                                            ))}
                                                        </ul>
                                                    );
                                                } else {
                                                    return (
                                                        <p key={index} className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-6">
                                                            {trimmed}
                                                        </p>
                                                    );
                                                }
                                            })
                                        ) : (
                                            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-6">
                                                {String(bodyContent)}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-400 italic text-lg mb-4">No content available for this post.</p>
                                <details className="mt-4 text-left max-w-2xl mx-auto">
                                    <summary className="text-sm text-gray-400 cursor-pointer hover:text-amber-400 transition-colors">
                                        Debug: View raw body data
                                    </summary>
                                    <pre className="mt-4 text-xs bg-gray-900/50 border border-gray-700 text-gray-300 p-4 rounded-lg overflow-auto max-h-96">
                                        {JSON.stringify(post.body, null, 2)}
                                    </pre>
                                </details>
                            </div>
                        )}
                    </motion.article>
                </div>
            </section>

            {/* Back to Home Link at Bottom */}
            <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
