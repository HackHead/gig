import FAQ from '@/components/molecules/F.A.Q';
import Cookies from '@/components/organisms/Cookies';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import RecentArticles from '@/components/organisms/RecentArticles';
import Example from '@/components/temp/about';
import Ours from '@/components/temp/ours';
import Stats, { Stat } from '@/components/temp/stats';
import Team from '@/components/temp/team';
import Testimonials from '@/components/temp/testimonials';
import '@/assets/styles/main.scss';
import { useLocale, useTranslations } from 'next-intl';
import UsageSteps from '@/components/organisms/UsageStepsSection';
import { GetServerSideProps } from 'next';

interface HomeProps {
    stats: Stat[]
}

    
export default function Home() {
    const $t = useTranslations();

    const stats = [
        { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
        { id: 2, name: 'Assets under holding', value: '$119 trillion' },
        { id: 3, name: 'New users annually', value: '46,000' },
        { id: 4, name: 'New users annually', value: '46,000' },
    ];
    
    return (
        <main>
            {/* <Menu /> */}
            <Hero />
            {/* <Team/> */}
            <Stats stats={stats}/>
            <Cookies
                title={$t('components.modal.cookies.title')}
                body={$t('components.modal.cookies.body')}
                read={$t('components.modal.cookies.read')}
                manage={$t('components.modal.cookies.manage')}
                accept={$t('components.modal.cookies.accept')}
            />
            <UsageSteps />
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
                                    Digital Marketing
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

