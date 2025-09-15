import Image from 'next/image';
import { jsonLdScriptProps } from 'react-schemaorg';
import type { ImageObject } from 'schema-dts';

type OptimizedImageBlockProps = {
  imageSrc: string;
  altDesc: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
  contentUrl?: string;
};

export function OptimizedImageBlock({ 
  imageSrc, 
  altDesc, 
  caption, 
  width, 
  height,
  priority = false,
  contentUrl
}: OptimizedImageBlockProps) {
  return (
    <figure className="my-4">
      {contentUrl && (
         <script
          {...jsonLdScriptProps<ImageObject>({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: contentUrl,
            thumbnailUrl: imageSrc,
            description: altDesc,
            caption: caption,
          })}
        />
      )}
      <Image
        src={imageSrc}
        alt={altDesc}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        itemProp="image"
        className="rounded-lg transition-shadow duration-300 hover:shadow-lg w-full h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
