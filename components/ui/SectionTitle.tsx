type SectionTitleProps = {
    badge: string;
    title: string;
    description: string;
  };
  
  export default function SectionTitle({
    badge,
    title,
    description,
  }: SectionTitleProps) {
    return (
      <div className="mb-16 text-center">
        <p className="uppercase tracking-[0.4em] text-yellow-500">
          {badge}
        </p>
  
        <h2 className="mt-4 text-5xl font-bold">
          {title}
        </h2>
  
        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          {description}
        </p>
      </div>
    );
  }