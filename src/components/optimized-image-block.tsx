import Image from 'next/image';

type OptimizedImageBlockProps = {
  imageSrc: string;
  altDesc: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function OptimizedImageBlock({ 
  imageSrc, 
  altDesc, 
  caption, 
  width, 
  height,
  priority = false 
}: OptimizedImageBlockProps) {
  return (
    <figure className="my-4">
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
