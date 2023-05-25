import Image from 'next/image';

export interface Step {
    id: number;
    title: string;
    boldTitle: string;
    body: string;
    link: {
        url: string;
        text: string;
    };
    img: {
        url: string;
        alt: string;
    };
}

const UsageSteps = () => {
    const steps = [
        {
            id: 1,
            title: '',
            boldTitle: '',
            body: '',
            link: { url: '', text: '' },
            img: { url: '', alt: '' },
        },
        { id: 0, title: '', boldTitle: '', body: '', link: { url: '', text: '' }, img: { url: '', alt: '' } },
    ] as Array<Step>;

    return (
        <section id="about">
            <div className="max-w-6xl mx-auto pt-20 my-10">

                <div className="grid md:grid-cols-2 gap-6 md:gap-y-16 items-center">
                    <div className="order-1 animate-fade-in-left delay-200">
                        <Image
                            src={'/img/about-1.svg'}
                            alt="text"
                            width={650}
                            height={450}
                        />
                    </div>
                    <div className="flex order-2 md:justify-end animate-fade-in-right delay-200">
                        <div className="  max-w-[450px]">
                            <span className=" text-primary font-bold mb-2">
                                01. About Application
                            </span>
                            <h2 className="text-dark  text-3xl sm:text-4xl  font-bold mb-6">
                                Manage your online wallet with Appwind.
                            </h2>
                            <p className="mb-12 lg:mb-16 text-zinc-400 tracking-wide">
                                Schedule your posts for times when your audience
                                is most active. Choose from our best-time
                                predictions, or create your own publishing
                                schedule.
                            </p>
                            <span className="inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline">
                                Know More About App{' '}
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>


                </div>
                <div className='grid md:grid-cols-2 gap-6 md:gap-y-16 items-center'>
                    <div className="order-3 mt-16 md:mt-0 md:order-4 animate-fade-in-right delay-200">
                        <Image
                            src={'/img/about-2.svg'}
                            alt="text"
                            width={650}
                            height={450}
                        />
                    </div>
                    <div className="flex flex-col justify-center max-w-[450px] order-4 md:order-3 animate-fade-in-left delay-200">
                        <span className=" text-primary font-bold mb-2">
                            02. Easy to Manage Appwind
                        </span>
                        <h2 className="text-dark  text-3xl sm:text-4xl  font-bold mb-6">
                            Manage your online wallet with Appwind.
                        </h2>
                        <p className="mb-12 lg:mb-16 text-zinc-400 tracking-wide">
                            Schedule your posts for times when your audience is
                            most active. Choose from our best-time predictions,
                            or create your own publishing schedule.
                        </p>
                        <span className="inline-flex items-center text-lg font-bold text-[#8b5cf6] gap-2 cursor-pointer hover:underline">
                            Get the App Now!{' '}
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsageSteps;
