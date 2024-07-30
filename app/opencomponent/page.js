import Card from "./components/card"

export const metadata = {
  title: 'Open Component',
}

export default function Page() {
  return (
    <div className="bg-gray-100 px-4">
      <h1 className="text-2xl py-4 font-bold text-slate-800">Products</h1>

      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
