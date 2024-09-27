// import ImagesExampleDynamic from "../components/imagesExampleDynamic";
import ImagesExampleStatic from "../components/imagesExampleStatic";
import StaticImage from "../../public/images/unsplash.jpg";
import Link from "next/link";
import MultipleImages from "../components/multipleImages";
// import SingleImage from "../components/singleImage";

type Props = {
  params: {
    slug: string;
  };
};

const ImagesPage = ({ params: { slug } }: Props) => {
  return (
    <div className="flex flex-col items-center text-lg text-center">
      <p className="text-xl mb-5">{slug} image examples</p>
      <div className="flex gap-5  mb-5">
        {slug === "static" && <ImagesExampleStatic src={StaticImage} />}
        {slug === "dynamic" && (
          <>
            {/* <ImagesExampleDynamic src={"/images/unsplash.jpg"} /> */}
            <MultipleImages />
            {/* <SingleImage src={"/images/unsplash.jpg"} /> */}
          </>
        )}
      </div>
      <Link href={"/"}>Go Back</Link>
    </div>
  );
};

export default ImagesPage;
