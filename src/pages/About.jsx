import React from 'react'

const About = () => {
    return (
        <>
            <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>

                <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
                    We love
                </h1>

                <div className='stats bg-primary shadow'>

                    <div className='stat'>
                        <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
                            Comfy
                        </div>
                    </div>

                </div>
            </div>

            <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus vivamus quis cras aptent faucibus aenean curabitur sapien. 
                Himenaeos sagittis quisque sed euismod taciti sociosqu class purus. 
                Netus curae suspendisse parturient nulla at ante. Maecenas morbi aliquet nec sodales torquent tincidunt. 
                Urna aliquet vivamus blandit lacus per, platea litora. Praesent fusce augue litora lacus lectus placerat sagittis felis mollis. 
                In etiam dignissim, blandit ultrices cras sed venenatis. Imperdiet imperdiet maximus cursus justo dui fermentum ad.
            </p>
        </>
    );
}

export default About