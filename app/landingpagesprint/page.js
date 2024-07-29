import Link from 'next/link'
import { Banner } from './components/banner'
import { StepCard } from './components/cards'
import { Footer } from './components/footer'

export default function Page() {
  return (
    <div>
      <p className="text-xl absolute left-5 top-5">
        <Link href="/" className="text-blue-300 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor"
              className="size-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
      </p>
      <Banner />
      <div className='w-3/4 mx-auto'>
        <h2 className="text-2xl font-bold text-center my-4">How it works</h2>
        <div className="flex flex-wrap justify-between mb-9">
          <StepCard
            header='Apply'
            text='First apply to one of our campuses around the world.'
            img='https://lewagon.github.io/landing-page-challenge/images/apply.svg'
          />
          <StepCard
            header='Learn to code'
            text='Learn Ruby on Rails, Javascript, SQL & much more!'
            img='https://lewagon.github.io/landing-page-challenge/images/learn.svg'
          />
          <StepCard
            header='Build products'
            text='Finally you will be able to bring your ideas to life.'
            img='https://lewagon.github.io/landing-page-challenge/images/product.svg'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
