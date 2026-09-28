import { useState } from 'react'
import iconFacebook from './assets/images/iconfacebook.svg';
import iconInstagram from './assets/images/iconinstagram.svg';
import iconTwitter from './assets/images/icontwitter.svg';
import iconYoutube from './assets/images/iconyoutube.svg';


const cards = [
  {
    social: 'facebook',
    img: iconFacebook,
    number: 1987,
    followers: 12,
    state: true
  },
  {
    social: 'twitter',
    img: iconTwitter,
    number: 1044,
    followers: 99,
    state: true
  },
  {
    social: 'instagram',
    img: iconInstagram,
    number: 1987,
    followers: 1099,
    state: true
  },
  {
    social: 'youtube',
    img: iconYoutube,
    number: 9239,
    followers: 144,
    state: false
  }
]

const overview = [
  {
    name: 'Page views',
    number: 87,
    percentage: 3,
     state: true,
     social: 'facebook',
     img: iconFacebook
  },
  {
    name: 'Likes',
    number: 52,
    percentage: 2,
     state: false,
     social: 'facebook',
     img: iconFacebook
  },
  {
    name: 'Likes',
    number: 5462,
    percentage: 2257,
     state: true,
     social: 'instagram',
     img: iconInstagram
  },
  {
    name: 'Profile views',
    number: 52000,
    percentage: 1375,
     state: true,
     social: 'instagram',
     img: iconInstagram
  },
  {
    name: 'Retweets',
    number: 117,
    percentage: 303,
     state: true,
     social: 'twitter',
     img: iconTwitter
  },
  {
    name: 'Likes',
    number: 507,
    percentage: 553,
     state: true,
     social: 'twitter',
     img: iconTwitter
  },
  {
    name: 'Likes',
    number: 107,
    percentage: 19,
     state: false,
     social: 'youtube',
     img: iconYoutube
  },
  {
    name: 'Total Views',
    number: 1407,
    percentage: 12,
     state: false,
     social: 'youtube',
     img: iconYoutube
  },
]

function App() {
  const [mode, setMode] = useState<boolean>(false);
  function handleSwitch() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      setMode(true);
    } else {
      setMode(false);
    }
  }
  return (
    <>
      <main className='h-screen content-center'>
        <div className='p-4 max-w-5xl mx-auto'>
          <section className='py-4 flex justify-between'>
            <div >
              <h3 className='text-text-1 font-bold text-2xl'>Social Media Dashboard</h3>
              <p className='text-text-2 font-bold'>Total Followers: 23,004</p>
            </div>
            <div className='hidden lg:flex gap-4 items-center'>
              <p className='font-bold text-text-2'>Dark Mode</p>
              <div className={`switch-hover cursor-pointer w-12 h-6 rounded-2xl bg-switch relative p-1 ${mode ? 'switch' : ''}`}
                onClick={handleSwitch}
              >
                  <div className={`size-4 rounded-full  transition-transform duration-200 ${mode ? 'translate-x-0 bg-bg-card' : 'bg-white translate-x-6'}`}></div>
              </div>
            </div>
          </section>
          <hr className='lg:hidden' />
          <div className='py-4 flex justify-between lg:hidden'>
            <p className='font-bold text-text-2'>Dark Mode</p>
            <div className={`w-12 h-6 rounded-2xl bg-switch relative p-1 ${mode ? 'switch' : ''}`}
              onClick={handleSwitch}
            >
                <div className={`size-4 rounded-full  transition-transform duration-200 ${mode ? 'translate-x-0 bg-bg-card' : 'bg-white translate-x-6'}`}></div>
            </div>
          </div>
          {/* CARDS */}
          <section className='grid gap-6 lg:grid-cols-4'>
            {
              cards.map(({number, state, followers, img, social}, i) => (
                <div key={i} className={`hover:bg-white/30 cursor-pointer rounded-2xl py-8 grid gap-2 justify-items-center overflow-hidden bg-bg-card relative`}>
                  <div className={`
                  ${social === 'instagram' && 'instagram'}
                  ${social === 'youtube' && 'youtube'}
                  ${social !== 'youtube' && social !== 'instagram' && 'twitter-facebook'}
                  h-1 w-full absolute top-0 z-1`}></div>
                  <div className='flex gap-2 items-center'>
                    <img src={img} alt='Social' />
                    <p className='text-text-2 font-bold text-sm'>@Nathan F.</p>
                  </div>
                  <h2 className='text-text-1 text-6xl font-bold'>{number}</h2>
                  <p className='text-text-2 font-light'>FOLLOWERS</p>
                  <div className='flex items-center gap-1'>
                    {
                      state ?
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/></svg>
                    }
                    <p className={`font-bold text-sm ${state ? 'text-green-500' : 'text-red-500'}`}>{followers} Today</p>
                  </div>
                </div>
              ))
            }
          </section>
          <section className='mt-8'>
            <h3 className='text-3xl text-text-2 font-bold mb-4'>Overview - Today</h3>
            <section className='grid gap-6 lg:grid-cols-4'>
              {
                overview.map(({name, percentage, number, state, social, img}) => (
                  <div className='rounded-lg p-4 grid gap-4 bg-bg-card hover:bg-white/30 cursor-pointer'>
                    <div className='flex justify-between'>
                      <p className='font-bold text-text-1'>{name}</p>
                      <img src={img} alt={name} />
                    </div>
                    <div className='flex justify-between'>
                      <p className='font-bold text-text-1 text-4xl'>{number > 10000 ? number/1000 : number} {number > 10000 && 'k'}</p>
                      <div className='flex gap-2 items-center'>
                        {
                          state ?
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/></svg>
                        }
                      <span className={`${state ? 'text-green-500' : 'text-red-500'}`}>{percentage} %</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </section>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
