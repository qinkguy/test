import Image from "next/image";
import { Data } from "./data";
import Product from "@/component/product_cd";
import { createClient } from "@/util/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const iphone = cookies();
  const supabase = createClient(iphone);

  const { data: product } = await supabase.from("product").select();
  return (
    <>
      {/* <header>
        <h1 className="text-red-500">No name</h1>
        <nav>
          <h1>เสื้อผู้ชาย</h1>
          <ul>
            
            <li>
              <a href="#">เสื้อเชิ้ต</a>
            </li>
            <li>
              <a href="#">เสื้อยืด</a>
            </li>
            <li>
              <a href="#">กางเกง</a>
            </li>
            <li>
              <a href="#">แจ็กเก็ต</a>
            </li>
            </ul>
            <h1>เสื้อผู้หญิง</h1>
            <li>
              <a href="#">เสื้อ</a>
            </li>
            <li>
              <a href="#">กระโปง</a>
            </li>
            <li>
              <a href="#">กางเกง</a>
            </li>
            <li>
              <a href="#">เดรส</a>
          </li>
        </nav>
      </header> */}
      <main className="">
        <section
          aria-labelledby="เสื้อ"
          className="grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 mb-2"
        >
          <h2 id="เสื้อ" className="grid col-span-2">
            เสื้อเชิ้ต
          </h2>
          {product
            .filter((data) => data.type === "เสื้อเชิ้ต")

            .map((datas, index) => (
              <Product key={"product" + String(index)} data={datas}></Product>
            ))}
        </section>

        <section
          aria-labelledby="เสื้อนักเรียน"
          className="grid grid-cols-2 gap-3 mb-2"
        >
          <h2 id="เสื้อนักเรียน" className="col-span-2">
            ชุดนักเรียน
          </h2>
          {product
            .filter((data) => data.type === "ชุดนักเรียน")
            .map((datas, index) => (
              <Product key={"product" + String(index)} data={datas}></Product>
            ))}
        </section>
      </main>
    </>
  );
}
