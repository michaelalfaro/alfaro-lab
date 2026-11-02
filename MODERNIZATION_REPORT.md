# Lab Website Modernization Report 2026
**Alfaro Lab - UCLA EEB**

## Executive Summary

Your current Jekyll-based website is actually quite well-positioned for 2026. Jekyll 4.3 with GitHub Pages remains a solid, modern choice for academic websites. However, there are several exciting opportunities to enhance functionality, improve user experience, and leverage new technologies while maintaining the simplicity you value.

## Current Setup Analysis

### Strengths ✅
- **Modern Jekyll 4.3** - You're already using the latest stable version
- **Automated CI/CD** - GitHub Actions workflow for deployment is excellent
- **jekyll-scholar** - Perfect for academic bibliography management
- **Clean structure** - Well-organized pages and data files
- **SEO-optimized** - Using jekyll-seo-tag
- **Version controlled** - Full Git history and collaboration capability
- **Free hosting** - GitHub Pages with custom domain support
- **Fast loading** - Static site generation for optimal performance

### Areas for Enhancement 🔧
- **Visual design** - Could benefit from a more modern, accessible design
- **Mobile responsiveness** - May need optimization for mobile devices
- **Interactive features** - Limited dynamic content capabilities
- **Search functionality** - No built-in site search
- **Analytics and insights** - Basic Google Analytics setup
- **Content management** - No CMS interface for non-technical users

## Modern Framework Options

### 1. **Stay with Jekyll** (Recommended)
**Pros:**
- Zero learning curve - you're already proficient
- Excellent academic plugin ecosystem (jekyll-scholar)
- Battle-tested for academic sites
- Perfect GitHub Pages integration
- Large community and documentation

**Cons:**
- Ruby dependency can be complex for collaborators
- Limited dynamic features without JavaScript

### 2. **Astro** (Emerging Leader)
**Pros:**
- "Islands architecture" - mix static and dynamic content
- Excellent performance by default
- Framework-agnostic (can use React, Vue, Svelte components)
- Built-in image optimization
- Growing ecosystem

**Cons:**
- Newer framework - smaller community
- Would require migration effort
- No direct jekyll-scholar equivalent (yet)

### 3. **Next.js** (Popular Choice)
**Pros:**
- Powerful React-based framework
- Excellent SEO and performance
- Large ecosystem and community
- Vercel hosting integration
- API routes for dynamic features

**Cons:**
- Significant learning curve if unfamiliar with React
- More complex than needed for most academic sites
- Overkill for static content

### 4. **Hugo** (Speed Champion)
**Pros:**
- Extremely fast build times
- Single binary deployment
- Excellent templating system
- Strong academic community

**Cons:**
- Go templating can be complex
- Less flexible than Jekyll
- Smaller plugin ecosystem for academic features

## Hosting Options Analysis

### GitHub Pages (Current) - **Still Excellent**
**Pros:**
- Free for public repositories
- Automatic SSL certificates
- CDN distribution
- Perfect git integration
- Custom domains supported
- Built-in Jekyll support

**Cons:**
- Limited to Jekyll and basic HTML/JS
- No server-side processing
- Build time limitations
- Plugin restrictions (though your current plugins work)

### Modern Alternatives

#### Netlify
- **Pros:** Form handling, edge functions, preview deployments, better build environments
- **Cons:** Paid for advanced features
- **Best for:** Sites needing forms, A/B testing, or serverless functions

#### Vercel
- **Pros:** Excellent Next.js integration, fast edge network, preview deployments
- **Cons:** Optimized for Node.js frameworks
- **Best for:** React/Next.js sites with dynamic features

#### Cloudflare Pages
- **Pros:** Very fast global CDN, generous free tier, edge functions
- **Cons:** Newer service, smaller community
- **Best for:** Speed-optimized static sites

## Modernization Recommendations

### Phase 1: Immediate Improvements (Jekyll + GitHub Pages)

#### 1. **Modern Theme & Design System**
```yaml
# Add to _config.yml
plugins:
  - jekyll-scholar
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed
  - jekyll-toc
  - jekyll-responsive-image
```

#### 2. **Enhanced Bibliography Features**
- **Altmetric badges** for publication impact
- **ORCID integration** for author verification
- **DOI links** and **PDF preview** functionality
- **Citation export** (BibTeX, RIS, EndNote)

#### 3. **Accessibility & Performance**
- Semantic HTML structure
- ARIA labels for screen readers
- Image optimization and lazy loading
- Core Web Vitals optimization
- Dark mode support

#### 4. **Interactive Features**
```yaml
# Research visualization ideas
- Interactive phylogenetic trees (D3.js)
- Publication timeline and metrics
- Research area filters
- Team member profiles with modals
- Search functionality (Algolia or Lunr.js)
```

### Phase 2: Enhanced Functionality

#### 1. **Content Management**
Options for easier content updates:
- **Netlify CMS** - Git-based CMS interface
- **Forestry.io** - Jekyll-optimized editor
- **Decap CMS** - Open source, works with GitHub

#### 2. **Advanced Bibliography**
- **Zotero integration** for automatic bibliography updates
- **Google Scholar metrics** integration
- **Research impact visualization**
- **Collaboration network graphs**

#### 3. **Modern Components**
```javascript
// Example: Interactive research timeline
- Publication clusters by year
- Funding timeline visualization  
- Lab member journey timelines
- Research topic evolution
```

### Phase 3: Future-Proofing

#### 1. **Hybrid Architecture** (Jekyll + Modern JS)
- Keep Jekyll for content management
- Add modern JavaScript for interactivity
- Progressive Web App (PWA) features
- Enhanced mobile experience

#### 2. **API Integration**
- **ORCID API** for automatic publication updates
- **GitHub API** for software project showcase
- **Altmetric API** for impact metrics
- **Google Scholar API** (when available)

## Specific Academic Website Features

### Essential Features
1. **Publication Management**
   - Automatic BibTeX processing ✅ (you have this)
   - PDF hosting and access
   - Publication metrics and citations
   - Co-author network visualization

2. **Research Showcase**
   - Project portfolio with filtering
   - Dataset and code repositories
   - Interactive figures and visualizations
   - Media gallery for fieldwork/lab photos

3. **Team Management**
   - Current and former member profiles
   - Alumni tracking and success stories
   - Collaboration network
   - Position announcements

4. **Engagement Tools**
   - News and blog posts ✅ (you have basic news)
   - Event calendar
   - Contact forms
   - Social media integration

### Advanced Academic Features
1. **Research Impact**
   - Publication analytics dashboard
   - Citation tracking
   - Altmetric integration
   - H-index and career metrics

2. **Collaboration Tools**
   - Internal lab resources (password-protected)
   - Protocol sharing
   - Equipment booking
   - Data sharing portals

## Implementation Roadmap

### Immediate (Month 1-2)
1. **Design refresh** - Modern, responsive theme
2. **Performance optimization** - Image optimization, fast loading
3. **Accessibility audit** - Screen reader compatibility
4. **Mobile optimization** - Touch-friendly navigation

### Short-term (Month 3-6)
1. **Enhanced publications** - Altmetric badges, better metadata
2. **Interactive elements** - Research timeline, filterable content
3. **SEO improvements** - Schema.org markup, better meta tags
4. **Search functionality** - Site-wide search capability

### Medium-term (Month 6-12)
1. **CMS integration** - Easy content editing interface
2. **API integrations** - ORCID, research metrics
3. **Advanced visualizations** - D3.js research graphics
4. **Performance monitoring** - Analytics and optimization

### Long-term (Year 2+)
1. **Framework evaluation** - Consider Astro or Next.js if needs evolve
2. **Advanced features** - User accounts, collaboration tools
3. **Integration expansion** - Lab management systems
4. **AI-powered features** - Content recommendations, search

## Budget Considerations

### Free Options (Recommended Start)
- **GitHub Pages** - Current hosting ✅
- **Jekyll themes** - Many excellent free options
- **Basic analytics** - Google Analytics, Plausible
- **Open source tools** - Most functionality available free

### Paid Upgrades (Optional)
- **Premium hosting** - Netlify Pro ($19/month), Vercel Pro ($20/month)
- **CMS services** - Forestry ($29/month), Netlify CMS (free)
- **Analytics** - Google Analytics 4 (free), Fathom ($14/month)
- **CDN services** - Cloudflare (free tier excellent)

## Security Considerations

### Current Status
- Static site = inherently secure ✅
- HTTPS via GitHub Pages ✅
- No database vulnerabilities ✅

### Enhancements
- **Content Security Policy** headers
- **Subdirectory isolation** for sensitive content
- **Access controls** for internal resources
- **Regular dependency updates**

## Migration Strategy (If Switching Frameworks)

### From Jekyll to Astro
1. **Content migration** - Markdown files transfer directly
2. **Template conversion** - Liquid to Astro components
3. **Plugin alternatives** - Find Astro equivalents
4. **Testing period** - Parallel deployment for comparison

### From Jekyll to Next.js
1. **Component architecture** - Convert layouts to React
2. **Data management** - Static generation or API routes  
3. **Styling migration** - CSS-in-JS or Tailwind
4. **SEO configuration** - Next.js meta tags and sitemaps

## Conclusion

**Recommendation: Enhance your current Jekyll setup rather than migrate.**

Your Jekyll + GitHub Pages foundation is solid and modern. The biggest impact will come from:

1. **Design modernization** - Better visual design and UX
2. **Interactive features** - Research visualizations and search
3. **Enhanced bibliography** - Better publication showcase
4. **Performance optimization** - Faster loading and mobile experience

This approach gives you maximum benefit with minimal risk and learning curve. You can always evaluate framework migration in 1-2 years as your needs evolve.

## Next Steps

1. **Review this report** and identify priority areas
2. **Choose a modern Jekyll theme** or hire for custom design
3. **Implement Phase 1 improvements** over 2-3 months
4. **Monitor performance** and user engagement
5. **Plan Phase 2 features** based on feedback and usage

---

*Report generated: February 2026*  
*For questions or implementation support, contact the lab IT team or consultant*