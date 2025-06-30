import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 overflow-hidden rounded">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1280/300?sig=1"
            alt="画像1"
            width={1280}
            height={300}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">published on 2025/06/30</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>

      <article className="shadow my-4 overflow-hidden rounded">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1280/300?sig=2"
            alt="画像2"
            width={1280}
            height={300}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          {/* 以下同様 */}
        </div>
      </article>

      <article className="shadow my-4 overflow-hidden rounded">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1280/300?sig=3"
            alt="画像3"
            width={1280}
            height={300}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          {/* 以下同様 */}
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
