import Description from "@/components/Description";
import FirstView from "@/components/FirstView";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstView />
      <Description
        title="メロンパンアイスとは"
        description="ここに、これはこれは非常においしそうなメロンパンアイスをもうそれだけ、その文書によってで想像できる、画像の不要なぐらいになり、このWebサイトの存在意義がなくなるものを非常に冗長に書くことによっていい感じになる。といった文を入れる"
        imageSrc="/sisaku.jpg"
        imageAlt="メロンパンアイスの画像"
      />
      <Description
        title="場所"
        description="レタスケの家の近く"
        imageSrc="/map.jpg"
        imageAlt="マップ画像"
      />
    </main>
  );
}
