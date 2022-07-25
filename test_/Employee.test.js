const Employee= require ("../lib/employee");

describe ("Test Employee", ()=> {
    describe ("Test all properties of Employee",() =>{
        it ("Test all properties of Employee",() =>{
        const employee= new Employee("Esperanza", 1020, "karol@yahoo.com")
        expect (employee.name).toEqual("Esperanza");
        expect (employee.id).toEqual(1020);
        expect (employee.email).toEqual("karol@yahoo.com");

        })
    })

    describe ("Test all methods of Employee", () => {
        it ("Test all methods of Employee", ()=>{
            const employee= new Employee ("Mark", 1122, "mark@gmail.com")
            expect (employee.getName()).toEqual ("Mark");
            expect (employee.getId()) .toEqual (1122);
            expect (employee.getEmail()).toEqual ("mark@gmail.com");
        })
    })
})