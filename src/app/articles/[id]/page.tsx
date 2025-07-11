import DeleteButton from '@/app/components/DeleteButton';
import { getDetailArticle } from '@/blogAPI';
import Image from 'next/image'
import React from 'react'

const Article = async ({params}: {params: {id: string}}) => {
  
  const detailArticle = await getDetailArticle(params.id);
  console.log(detailArticle);

  return (
    <div className='max-w-3xl mx-auto p-5'>
        <Image
            src={`https://picsum.photos/1280/300?sig=${detailArticle.id}`}
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
        <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticle.title}</h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>{detailArticle.content}</p>
        </div>
        <div className='text-right mt-3'>
          <DeleteButton id={detailArticle.id} />
        </div>
    </div>
  )
}

export default Article