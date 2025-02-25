function Question3(props){
    return(
        <div className="shadow-md border border-gray-100 rounded-lg w-1/2 mx-auto mb-5">
            <h2 className="text-2xl font-semibold mt-5 mb-2 ml-5">{props.question}</h2>
            <div className="bg-red-200 py-2 px-1.5 rounded-lg w-auto mr-5 mb-0.5 ml-5">{props.choice1}</div>
            <div className="bg-red-200 py-2 px-1.5 rounded-lg w-auto mr-5 mb-0.5 ml-5">{props.choice2}</div>
            <div className="bg-green-200 py-2 px-1.5 rounded-lg w-auto mr-5 mb-0.5 ml-5">{props.choice3}</div>
            <div className="bg-red-200 py-2 px-1.5 rounded-lg mb-5 w-auto mr-5 ml-5">{props.choice4}</div>
        </div>
    )
}

export default Question3;