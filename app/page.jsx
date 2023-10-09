import React from 'react';

import Feed from '@/components/Feed';
const page = () => {
  return (
    <section className='w-full flex-col'>
      <h1 className='head_text text-center'>
            hello would
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>
            Ai Powered Prompts</span>
      </h1>
      <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
       accusamus. Animi quasi, architecto nisi quas enim laborum commodi nihil 
       recusandae ?</p>


       <Feed/>

    </section>
  );
}

export default page;
