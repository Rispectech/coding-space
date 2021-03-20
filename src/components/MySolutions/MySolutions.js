import React from 'react'
import Hero from '../dashboard/Hero'
import mainImg from '../../assets/animated_illustrations/solution_animation.json'
import Tabs from '../smallComponents/Tabs'
import { useAuth } from '../../context/AuthContext'

const MySolutions = () => {
    const { currentUser } = useAuth();
    return (
        <div className="sm:ml-0 md:ml-20 xl:ml-56 px-5 text-purple-50 min-h-screen">
            <Hero
                title="Here you can find all the solutions and ongoing challenges details."
                mainImg={mainImg}
                btnTitle="Explore Challenges "
                logoTitle="fas fa-arrow-right"
                lottie
            />
            {currentUser ? <Tabs userID={currentUser.id} /> : null}
        </div>
    )
}

export default MySolutions;
