type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  children,
}: SectionProps) {
  return (
   <section
  id={id}
  className="mx-auto max-w-7xl px-6 py-24"
>
  {children}
</section>
  );
}