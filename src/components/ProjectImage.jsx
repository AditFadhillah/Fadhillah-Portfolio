export const ProjectImage = ({ src, alt, className = "" }) => {
  return (
    <figure className="space-y-3">
      <img src={src} alt={alt} className={className} />
      <figcaption className="text-sm text-muted-foreground text-center">
        {alt}
      </figcaption>
    </figure>
  );
};
