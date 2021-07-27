import axios from "axios";
import React,{useState,useEffect} from "react";
import EntertainmentSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//configs
import images from "../config/TempPosters.config";



const HomePage=()=>{

    const [popularMovies,setPopularMovies]=useState([]);
    const [topRatedMovies,setTopRatedMovies]=useState([]);
    const [upcomingMovies,setUpcomingMovies]=useState([]);

    useEffect(() => {
        const requestPopularMovies=async()=>{
            const getPopularMovies=await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results)

        }
       requestPopularMovies();
    }, []);

    useEffect(() => {
       
        const getTopRatedMovies= async() => {
           const requestTopRatedMovies=await axios.get("/movie/top_rated");
           setTopRatedMovies(requestTopRatedMovies.data.results); 
        }
        getTopRatedMovies();
    }, []);

    useEffect(() => {
        
        const getUpcomingMovies=async () => {
            const requestupcomingMovies=await axios.get("/movie/upcoming");
            setUpcomingMovies(requestupcomingMovies.data.results);
            
        }
        getUpcomingMovies();
    }, []);

    return(
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
        <EntertainmentSlider/> 
    </div>
    <div className="bg-bms-800 py-12">
        <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
                <img
                    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                    alt="Rupay"
                    className="w-full h-full"
                />
            </div>
        
            <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new releases every friday" isDark/>
        </div>
    </div>
    
    <div className="container mx-auto px-4 my-8">
        <PosterSlider  images={topRatedMovies} title="Online Streaming Events" isDark={false}/>
    </div>
    
    <div className="container mx-auto px-4">
        <PosterSlider  images={upcomingMovies} title="Outdoor Events" isDark={false}/>
    </div>
    
    </div>
    </>
    );
}

export default HomePage;