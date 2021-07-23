import React from 'react';


import MovieHero from '../components/MovieHero/MovieHero.component';
import { FaCcVisa,FaCcApplePay } from 'react-icons/fa';



export const Movie = () => {
    return (
        <>
            <MovieHero/>
            <div className="container px-4 my-12 lg:w-2/3 lg:ml-20">
                <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p>Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
                </div>
                <div className="my-8">
                    <hr/>
                </div>
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
                    <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-4 rounded-md">
                        <div className="w-8 h-8">
                        <FaCcVisa className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-start ">
                            <h3 className="text-xl font-bold text-gray-700">Visa Stream Offer</h3>
                            <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-4 rounded-md">
                        <div className="w-8 h-8">
                        <FaCcApplePay className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-start ">
                            <h3 className="text-xl font-bold text-gray-700">Filmy Pass</h3>
                            <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Movie;