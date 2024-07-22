const MyButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const {color} = props
    return(
        <button className={`${color} rounded-lg  px-5 py-3 text-white hover:bg-red-400`}> Tes Componen</button>
    )
}

export default MyButton