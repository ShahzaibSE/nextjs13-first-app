export async function generateStaticParams() {
  const names: string[] = [
    "zia",
    "shahzaib",
    "zeeshan",
    "hira",
    "adil",
    "rehan",
  ];

  return names.map((name) => ({
    name: name,
  }));
}

export default function GiveName({ params }: { params: { name: string } }) {
  return <div>My name is {params.name}.</div>;
}
