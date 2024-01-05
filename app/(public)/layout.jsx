const AuthLayout = ({children})=>{

    return(
        <main className="bg-cover-image">
            <div className="overlay flex flex-col items-center gap-3 p-5">
                <div className="bg-black bg-opacity-70 p-16 lg:1-2/5 lg:max-w-md rounded-md w-full mt-28"> 
                    {children}
                </div>
            </div>
        </main>
    )

}



export default AuthLayout