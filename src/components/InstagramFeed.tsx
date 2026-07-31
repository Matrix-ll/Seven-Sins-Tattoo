import { Img } from '@/components/ui/Img'
import { instagramPosts } from '@/data/seed'

export default function InstagramFeed() {
  return (
    <section data-component="src/components/InstagramFeed.tsx" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="h-px w-6 bg-accent/30 mb-4" />
            <p className="ui-chrome text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
              Follow
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground/80 sm:text-4xl">
              @sevensins
            </h2>
          </div>
          <a
            href="#"
            className="hidden ui-chrome text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/50 transition-colors duration-500 hover:text-accent sm:block"
          >
            View Gallery &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 gap-1.5 bg-transparent sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-muted cursor-pointer">
              <Img
                src={post.image}
                fallbackSeed={`insta-${i}`}
                alt={post.caption}
                className="h-full w-full object-cover grayscale opacity-50 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <p className="text-[12px] leading-relaxed text-foreground/80">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
