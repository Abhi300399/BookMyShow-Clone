
import React from 'react';
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.component';
import Poster from '../components/Poster/poster.component';



export const Plays = () => {
    return (
        <>
           <div className="container mx-auto px-4">
           <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="w-3/4">
                <h1 className="text-2xl font-bold mb-4">Plays in Benguluru</h1>
                    <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-3/12 my-3">
                        <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                    <div className="w-1/2 md:w-3/12 my-3">
                        <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                    <div className="w-1/2 md:w-3/12 my-3">
                        <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                    <div className="w-1/2 md:w-3/12 my-3">
                        <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                            title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                            subtitle="Telugu -> ₹400"
                        />
                    </div>
                   
                </div>
                </div>
                <div className="lg:w-3/12">
                    <h1 className="text-2xl font-bold mb-4">Filters</h1>
                    <div>
                        <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                    </div>
                    <div>
                        <PlaysFilter title="Language" tags={["Tamil","Telugu","English"]}/>
                    </div>
                </div>
            </div>
            
           </div>
        </>
    )
}

export default Plays;