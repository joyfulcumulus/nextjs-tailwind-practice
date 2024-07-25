import Link from 'next/link'

export default function Home() {
  return (
    <div className="m-10">
      <h1 className="text-4xl mb-5">Project: Tailwind Practice</h1>
      <p className="text-xl mb-5">In this project, I will create simple UI components on separate pages using Tailwind CSS</p>
      <ul className="list-disc list-inside">
        <li className="text-xl"><Link href="/buttonsprint" className="text-blue-800 hover:text-blue-300">Button Sprint</Link></li>
        <li className="text-xl"><Link href="/cardsprint" className="text-blue-800 hover:text-blue-300">Card Sprint</Link></li>
        <li className="text-xl"><Link href="/landingpagesprint" className="text-blue-800 hover:text-blue-300">Landing Page Sprint</Link></li>
      </ul>
    </div>
  );
}
