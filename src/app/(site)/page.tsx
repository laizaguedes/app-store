import { Banners } from "@/components/home/banner";
import { data } from "@/data";

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
    </div>
  );
}