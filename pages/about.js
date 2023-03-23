import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Layout title={"About"} description="Guitar-Next guitar shop, about us">
        <main className="contenedor">
          <h2 className="heading">About us</h2>
          <div>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="about us image"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                facilisis ipsum vel nulla finibus ultrices. Quisque congue nunc
                non tellus egestas, et semper sem sagittis. Duis imperdiet
                accumsan egestas. Fusce sollicitudin enim in purus rutrum
                posuere. Fusce tortor sapien, bibendum nec pellentesque in,
                hendrerit sed dui. Sed tristique dapibus justo. Nullam eros
                augue, viverra fermentum maximus id, convallis sit amet nisl.
                Sed sagittis laoreet arcu, non convallis erat placerat quis.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Morbi congue magna id turpis
                consectetur, iaculis elementum sem feugiat. Morbi eget dui
                gravida, accumsan erat rhoncus, tempus mi. Suspendisse eu
                lacinia nisi, vitae mattis neque. Integer porttitor congue
                velit, et consequat augue. Donec laoreet velit a felis euismod,
                non commodo neque volutpat. Nulla a ipsum quam. Suspendisse elit
                urna, mollis vel dolor et, tempus ultrices velit.
              </p>
              <p>
                Nunc a bibendum tellus. Sed porttitor id risus nec posuere. Sed
                ac libero ut quam hendrerit maximus eget sit amet odio. In hac
                habitasse platea dictumst. Donec risus enim, pulvinar quis
                fringilla ac, rhoncus in metus. Morbi id turpis justo. Sed a
                felis eleifend risus efficitur consequat. Sed purus nulla,
                pulvinar in porttitor at, iaculis finibus felis. Vestibulum a
                nulla porta, egestas lorem non, gravida nulla. Aenean maximus
                magna ac lectus sollicitudin, non maximus elit ornare. Aenean
                aliquet purus id egestas blandit.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
