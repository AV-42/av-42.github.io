import Image from "next/image";
import Container from "./container";
import heroImg from "./../../public/img/Ilustration.svg";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
              Smart Advertising on Web 3.0
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              Delivering ads with a reward system to users on the blockchain.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/register"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-primary600 rounded-md ">
                Start Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/img/Ilustration.svg"
              width="456"
              height="456"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
