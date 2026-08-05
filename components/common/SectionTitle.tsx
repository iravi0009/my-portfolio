type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({
  children,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}