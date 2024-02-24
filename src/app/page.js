import Calendar from '@/components/Calendar'

export default function Home() {
  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <div className='m-auto'>
        <Calendar />
      </div>
    </main>
  )
}
