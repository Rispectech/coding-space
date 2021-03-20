import React from 'react'

// custom components
import useFirestore from '../../hooks/useFirestore'
import Hero from '../dashboard/Hero';
import SolutionSummary from './SolutionSummary'
import solutionLottie from '../../assets/animated_illustrations/solution_animation.json'

const ShowSolutions = () => {
    const { docs } = useFirestore('solutions', null, null, null, true);
    return (
        <div className="sm:ml-0 md:ml-20 xl:ml-56 px-5">
            <Hero
                title="Master Web and Mobile Development by building real world projects"
                subTitle="Welcome To Coding Space 😊"
                mainImg={solutionLottie}
                btnTitle="My Solutions "
                logoTitle="fas fa-arrow-right"
                route="/mysolutions"
                lottie
            />
            <main>
                <h1 className="text-5xl heading text-center p-5 font-semibold text-white pb-7">Solutions</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
                    {docs && docs.map(solution => {
                        return (
                            <SolutionSummary key={solution.id} solution={solution} />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default ShowSolutions
