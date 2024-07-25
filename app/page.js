import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Project: Tailwind Practice</h1>
      <p>In this project, I will create simple UI components on separate pages using Tailwind CSS</p>
      <ul>
        <li><Link href="/buttonsprint">Button Sprint</Link></li>
        <li><Link href="/cardsprint">Card Sprint</Link></li>
        <li><Link href="/landingpagesprint">Landing Page Sprint</Link></li>
      </ul>
    </div>
  );
}
