import { createClient } from "@/util/supabase/server";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function Product({ data }) {
  const iphone = cookies();
  const supabase = createClient(iphone);
  const image = await supabase.storage
    .from("product_pics")
    .getPublicUrl("picture2.webp");
  console.log(image.data.publicUrl);
  return (
    <div className=" border-black border-2 rounded-md p-1 bg-white ">
      <div className="bg-white">
        <h3 className="text-red-500">{data.Name}</h3>

        <Image
          className="mx-auto"
          src={image.data.publicUrl}
          alt={image}
          height={100}
          width={100}
        />
      </div>
      <div>
        <h3>{data.message}</h3>
        <h3>{data.price}</h3>
      </div>
    </div>
  );
}
