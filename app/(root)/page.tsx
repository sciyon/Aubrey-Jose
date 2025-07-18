import { cormorant } from '@/app/fonts';
import Invite from '@/components/invite';

const page = () => {
  return (
    <div className='lg:pt-6 flex flex-col items-center z-0 '>
      <div className="carousel z-0 flex-none">
        <div className="group z-0">
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-08.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-11.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-12.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-14.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/9.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0" >
                <img 
                    src='/carousel/1.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0">
                <img 
                    src='/carousel/2.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0">
                <img 
                    src='/carousel/3.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0" >
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
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-08.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-11.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-12.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/wcaubrey-14.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card">
                <img 
                    src='/carousel/9.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0" >
                <img 
                    src='/carousel/1.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0">
                <img 
                    src='/carousel/2.JPG'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0">
                <img 
                    src='/carousel/3.jpg'
                    style={{ height: '100%'}}
                />
            </div>
            <div className="card z-0" >
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

      <p className="pt-4 lg:pt-16 font-crimson lg:text-2xl text-lg">Together with their families</p>
      <h1 className={`${cormorant.className} lg:text-8xl text-7xl pt-4`}>AUBREY</h1>
      <h1 className="lg:text-2xl text-2xl font-crimson">and</h1>
      <h1 className={`${cormorant.className} lg:text-8xl text-7xl`}>JOSE</h1>

      <h1 className="lg:text-3xl text-xl font-crimson lg:pt-10 pt-5">HOLY CROSS PARISH</h1>
      <h1 className="lg:text-3xl text-xl font-crimson">TALAIRON, OROQUIETA CITY</h1>
      <h1 className="lg:text-2xl text-xl font-crimson lg:pt-8 pt-4">January 18, 2025</h1>
      <h1 className="lg:text-2xl text-xl font-crimson pb-8">Saturday, 1:00 PM</h1>
      <Invite />
      <h1 className="pb-5"></h1>
    </div>
  )
}

export default page