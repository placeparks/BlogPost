import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import React from 'react'
const page = () => {
  return (
    <div className='min-h-screen font-roboto'>
    <BackgroundGradientAnimation>
    <div className="z-50 flex items-center justify-center px-4 text-3xl text-center md:text-4xl lg:text-7xl">
          <section className="bg-transparent dark:bg-gray-900 mt-16">
            <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl text-slate-300 tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-zinc-300 dark:text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
  I'd love to hear from you! Feel free to reach out to me at placeparks@gmail.com.
  <br/>
  Thank you for stopping by, and I hope you enjoy your stay at Mirac.eth Blog!
</p>

      <form action="#" class="space-y-4">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
      </div>
    </BackgroundGradientAnimation>
    </div>
  )
}

export default page
