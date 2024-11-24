import { cormorant } from '@/app/fonts';

const page = () => {
  return (
    <div className='pt-6 flex flex-col items-center '>
      <div className="carousel">
        <div className="group">
            <div className="card" >
                <img 
                    src='/carousel/1.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/2.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/3.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card" >
                <img 
                    src='/carousel/4.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/5.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/6.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/7.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/8.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card" >
                <img 
                    src='/carousel/1.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/2.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/3.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card" >
                <img 
                    src='/carousel/4.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/5.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/6.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/7.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/8.jpg'
                    style={{ height: '100%'}}
                />
            </div>
        </div>
      </div>

      <p className="pt-16 font-crimson text-2xl">Together with their families</p>
      <h1 className={`${cormorant.className} text-8xl pt-4`}>AUBREY</h1>
      <h1 className="text-2xl font-crimson">and</h1>
      <h1 className={`${cormorant.className} text-8xl`}>JOSE</h1>

      <h1 className="text-3xl font-crimson pt-10">HOLY CROSS PARISH</h1>
      <h1 className="text-3xl font-crimson">TALAIRON, OROQUIETA CITY</h1>
      <h1 className="text-2xl font-crimson pt-8">January 18, 2025</h1>
      <h1 className="text-2xl font-crimson pb-24">Saturday, 1:00 PM</h1>
    </div>
  )
}

export default page