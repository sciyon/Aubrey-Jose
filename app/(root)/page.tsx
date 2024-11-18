import Image from "next/image"

const page = () => {
  return (
    <div className='pt-6 flex flex-col items-center '>
      <div className="carousel">
        <div className="group">
            <div className="card" >
                <img 
                    src='/carousel/7.JPG'
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/6.JPG'
                    style={{ height: '100%', width: '200%' }}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/8.jpg'
                    style={{ height: '100%', width: '100%' }}
                />
            </div>
            <div className="card" >
                <img 
                    src='/carousel/4.JPG'
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/5.JPG'
                />
            </div>
        </div>
        <div className="group" aria-hidden>
            <div className="card aria-hidden" >
                <img 
                    src='/carousel/7.JPG'
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/6.JPG'
                    style={{ height: '100%', width: '200%' }}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/8.jpg'
                    style={{ height: '100%', width: '100%' }}
                />
            </div>
            <div className="card" >
                <img 
                    src='/carousel/4.JPG'
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/5.JPG'
                />
            </div>
        </div>
      </div>

      <p className="pt-16 font-crimson text-2xl">Together with their families</p>
      <h1 className="text-8xl font-cormorant pt-4">AUBREY</h1>
      <h1 className="text-2xl font-crimson">and</h1>
      <h1 className="text-8xl font-cormorant">JOSE</h1>

      <h1 className="text-3xl font-crimson pt-10">HOLY CROSS PARISH</h1>
      <h1 className="text-3xl font-crimson">TALAIRON, OROQUIETA CITY</h1>
      <h1 className="text-2xl font-crimson pt-8">January 18, 2025</h1>
      <h1 className="text-2xl font-crimson pb-24">Saturday, 1:00 PM</h1>
    </div>
  )
}

export default page