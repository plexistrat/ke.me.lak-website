import Image from "next/image";

export default function BlogCard({
  title,
  excerpt,
  image,
}: {
  title: string;
  excerpt: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{excerpt}</p>
      </div>
    </div>
  );
}
