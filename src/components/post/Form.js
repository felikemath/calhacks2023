import React, { useState } from 'react';
import axios from 'axios';
import { newPost } from '../../helpers/posts';

const Form = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');


  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log('hi');
    console.log(imageUrl);
    newPost(imageUrl, caption);

    
  };

  return (
    <div class="py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Post an image to the world!</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <form class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input onChange={(e) =>
                    setImageUrl(e.target.value)
                  } autocomplete="off" id="url" name="url" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Image Url" />
                  <label for="url" 
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Image Url</label>
                </div>
                <div class="relative">
                  <input onChange={(e) => setCaption(e.target.value)} autocomplete="off" id="caption" name="caption" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Caption" />
                  <label for="caption"  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Caption</label>
                </div>
                <div class="relative">
                  <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form