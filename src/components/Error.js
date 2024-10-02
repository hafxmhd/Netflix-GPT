
const Error = () => {
    return (
        <div className="h-screen bg-black">
        <h1 className="text-6xl mx-5 font-bold text-white">Oops! </h1>
       <h2 className="text-3xl  mx-5 pt-3 text-white"> Something Went Wrong :( </h2>
       <div class="flex justify-center items-center">
       <img className="w-96"src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="page not found"/>
     </div>
     </div>
    );
};

export default Error;