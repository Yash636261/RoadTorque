import Link from "next/link";
import Label from "@/components/label";

export default function CategoryLabel({
  categories,
  nomargin = false,
}: {
  categories: string;
  nomargin?: boolean;
}) {
  return (
    <div className="flex gap-3">
      {/* {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link href={`/category/${category.slug.current}`} key={index}> */}
      <Label nomargin={nomargin} color="blue">
        {categories}
      </Label>
      {/* </Link>
        ))} */}
    </div>
  );
}
