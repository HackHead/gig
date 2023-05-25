import Toggler from '../../atoms/FAQ-Toggler';
import { QA } from '../../atoms/FAQ-Toggler';

export interface FaqProps {
    title: string;
}

export interface S extends QA {
    id: number;
}

const data = [
    {
        id: 1,
        question: 'How does the website work for clients?',
        answer: 'The website offers a platform where clients can post job opportunities, browse freelancer profiles, and hire suitable candidates. It simplifies the process of finding and collaborating with talented freelancers.',
    },
    {
        id: 2,
        question: 'How can I find freelancers on the website?',
        answer: 'The website offers a platform where clients can post job opportunities, browse freelancer profiles, and hire suitable candidates. It simplifies the process of finding and collaborating with talented freelancers.',
    },
    {
        id: 3,
        question:
            "What happens if I'm not satisfied with the freelancer's work?",
        answer: 'The website offers a platform where clients can post job opportunities, browse freelancer profiles, and hire suitable candidates. It simplifies the process of finding and collaborating with talented freelancers.',
    },
    {
        id: 4,
        question: 'What are the payment options for hiring freelancers?',
        answer: 'The website offers a platform where clients can post job opportunities, browse freelancer profiles, and hire suitable candidates. It simplifies the process of finding and collaborating with talented freelancers.',
    },
] as Array<S>;

const FAQ = ({ title }: FaqProps) => {
    return (
        <section className="z-10 relative">
            <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h2 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
                    {title}
                </h2>
                <div className="mt-12 space-y-8">
                    {data.map(({ question, answer, id }: S) => {
                        return (
                            <Toggler
                                question={question}
                                answer={answer}
                                key={id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
