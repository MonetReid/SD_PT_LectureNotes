import EmployeeInfo from "./EmployeeInfo";

function Employees() {
    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: "Web Dev" ,
            food: "Pizza",
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: "Kool Kat",
            food: "Steak",
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: "Manager",
            food: "Ice Cream",
        },
    ];

    return(
        <>
            <h1> Hello from the Employees</h1>
            {/* We will be using the above array with the .map() method to create an EmployeeInfo component for each of the objects. */}
            {
                employeeRecords.map((record, index) => (
                    // Call the component in the map so each record can be passed in as props
                    <EmployeeInfo 
                        key={index}
                        name={record.name}
                        city={record.city}
                        state={record.state}
                        position={record.position}
                        food={record.food}
                    />
                ))
            }
        </>
    )
}

export default Employees;