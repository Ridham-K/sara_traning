import "./Profile.css";


// function Profile(){
//     return (
//         <>
//         <div className="prof">
//             <table border="1" align="center" width="50px" cellPadding="10px">
//             <thead>
//                 <tr>
//                 <th>Topic</th>
//                 <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                 <td>JSX Basics</td>
//                 <td>Completed</td>
//                 </tr>
//                 <tr>
//                 <td>Components</td>
//                 <td>Completed</td>
//                 </tr>
//                 <tr>
//                 <td>Props</td>
//                 <td>Pending</td>
//                 </tr>
//             </tbody>
//             </table>
//         </div>
//         </>
//     );
// }

// export default Profile;


import "./Profile.css";

function Profile() {

    const topics = [
        { id: 1, topic: "JSX Basics", status: "Completed" },
        { id: 2, topic: "Components", status: "Completed" },
        { id: 3, topic: "Props", status: "Pending" }
    ];

    return (
        <div className="prof">
            <table border="1" align="center" width="50%" cellPadding="10">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{topics.find(item => item.id === 1)?.topic}</td>
                        <td>{topics.find(item => item.id === 1)?.status}</td>
                    </tr>
                </tbody> 
                <tbody>
                    {topics
                        .filter(item => item.id === 1)
                        .map(item => (
                            <tr key={item.id}>
                                <td>{item.topic}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Profile;