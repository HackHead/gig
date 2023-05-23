import FAQ from '../components/molecules/F.A.Q';
import Cookies from '../components/organisms/Cookies';
import { Footer } from '../components/organisms/Footer';
import Hero from '../components/organisms/Hero';
import RecentArticles from '../components/organisms/RecentArticles';
import Example from '../components/temp/about';
import Ours from '../components/temp/ours';
import Stats from '../components/temp/stats';
import Team from '../components/temp/team';
import Testimonials from '../components/temp/testimonials';
import '@/assets/styles/main.scss';

export default function Home() {
  return (
    <main>
      {/* <Menu /> */}
      <Hero />
      {/* <Team/> */}
      <Stats />
      <Cookies />
      <Ours />
      <div className="py-40">
        <div className="animate-fade-in-up delay-300">
          <div className="md:w-full md:mx-auto md:px-8 md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
            <div className="bg-gradient-to-l from-[#e4f2fe] to-[#ffeefe] p-8 sm:px-10 md:rounded-xl md:px-12 xl:py-12 xl:px-14 2xl:p-16">
              <div className=" flex flex-wrap justify-center items-center">
                <a
                  href="https://uideck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Graphics & Design
                </a>
                <a
                  href="https://tailgrids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Digital Marketing
                </a>
                <a
                  href="https://lineicons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Programming & Tech
                </a>
                <a
                  href="https://ayroui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Writing & Translation
                </a>
                <a
                  href="https://plainadmin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Video & Animation
                </a>
              </div>
              <div className=" flex flex-wrap justify-center items-center mt-5">
                <a
                  href="https://uideck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Graphics & Design
                </a>
                <a
                  href="https://tailgrids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Digital Marketing
                </a>
                <a
                  href="https://lineicons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Programming & Tech
                </a>
                <a
                  href="https://ayroui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Writing & Translation
                </a>
                <a
                  href="https://plainadmin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mx-2 font-bold text-slate-600 hover:text-red-400 transition-colors duration-200"
                >
                  Video & Animation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />

      <RecentArticles />
      <FAQ title="Frequently asked questions" />
      {/* <Example/> */}
      <Footer />
    </main>
  );
}
