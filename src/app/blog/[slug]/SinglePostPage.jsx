import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div>
<section className="mb-40">

  <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
      className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 lg:block">
      <defs>
        <linearGradient id="sw-gradient-light" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="hsl(209, 92.2%, 92.1%)" offset="0%"></stop>
          <stop stop-color="hsl(209, 92.2%, 99.1%)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#sw-gradient-light)"
        d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z">
      </path>
    </svg>
    <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
      className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block">
      <defs>
        <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="hsl(240, 4%, 28%)" offset="0%"></stop>
          <stop stop-color="hsl(0, 0%, 15%)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#sw-gradient-dark)"
        d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z">
      </path>
    </svg>
  </span>

  <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
  <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
    {post.title}
  </h1>
  <div className="mb-8">
    <div className="flex items-center">
      <img src="https://via.placeholder.com/50" alt="Author Avatar" className="w-12 h-12 rounded-full mr-4" />
      {post && (
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>
      )}
                  </div>
                  <div className="text-sm text-gray-500 ml-14">
  <p>
    {post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    }) : 'Loading...'}
  </p>
</div>

  </div>
  <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
</div>

              <div className="mb-12 lg:mb-0">
                <img src={post.img}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePostPage;