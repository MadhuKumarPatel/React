
function Emplist(prop){
    let {data}=prop
    return(
        <tr>
        <td>{data.name}</td>
        <td>{data.designation}</td>
        <td>{data.salary}</td>
        </tr>
    )
}
export default Emplist;