import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import pdfDoc from './assets/pdfDoc.svg'
import { useState } from 'react'


function App() {
  const [fileState, setFileState] = useState<string | null>(null);

  console.log(fileState);

  return (
    <main className='relative min-h-screen flex flex-col'>
      <section className='mx-auto my-auto flex flex-col w-1/2 gap-5 items-center'>
        <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="text" placeholder="paper link..." />
      <Button type="submit" variant="outline">
        Search
      </Button>
    </div>
    <p className="select-none">- or -</p>
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor="paperPDF" className='relative w-full bg-secondary hover:bg-background transition-all ease-in-out rounded-md h-20 flex justify-center'>
        <div className='absolute gap-4 flex items-center'>
          <img src={pdfDoc} alt="pdf icon" className="h-10 mx-auto pt-2" />
          <p>{fileState ? fileState : "Upload PDF"}</p>
        </div>
        <Input id="paperPDF" onChange={(e)=>{
          const file = e.target.files?.[0];
          if (file) {
          setFileState(file.name);
          }
        }} type="file" className='opacity-0 h-20'/>
      </Label>
      {fileState && <Button type="submit" variant="outline">Submit</Button>}
    </div>
      </section>

      <footer className='fixed bottom-0 p-1 bg-primary w-full flex items-center'>
        <div className='bg-background w-fit rounded-md ml-auto'>
          <ModeToggle/>
        </div>
      </footer>
    </main>
  ) 
}

export default App
