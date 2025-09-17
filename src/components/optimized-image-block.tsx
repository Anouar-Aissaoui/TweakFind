
import Image from 'next/image';
import { jsonLdScriptProps } from 'react-schemaorg';
import type { ImageObject } from 'schema-dts';

type OptimizedImageBlockProps = {
  imageSrc: string;
  altDesc: string;
  caption?: string;
  priority?: boolean;
  contentUrl?: string;
  unoptimized?: boolean;
  blurDataURL?: string;
};

export function OptimizedImageBlock({ 
  imageSrc, 
  altDesc, 
  caption, 
  priority = false,
  contentUrl,
  unoptimized = false,
  blurDataURL,
}: OptimizedImageBlockProps) {
  
  if (!imageSrc) {
    return (
      <div 
        className="rounded-lg bg-muted flex items-center justify-center w-full h-full"
      >
        <span className="text-xs text-muted-foreground">No Image</span>
      </div>
    );
  }

  return (
    <figure className="my-0 w-full h-full relative aspect-square">
      {contentUrl && (
         <script
          {...jsonLdScriptProps<ImageObject>({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: contentUrl,
            url: imageSrc,
            description: altDesc,
            caption: caption,
          })}
        />
      )}
      <Image
        src={imageSrc}
        alt={altDesc}
        fill
        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 15vw"
        className="rounded-lg object-contain transition-shadow duration-300 hover:shadow-lg"
        priority={priority}
        unoptimized={unoptimized}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
