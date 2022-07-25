const Manager= require ("../lib/manager");

describe ("Test Manager", ()=> {
    describe ("Test all properties of Manager",() =>{
        it ("Test all properties of Manager",() =>{
        const manager= new Manager("Esperanza", 1020, "karol@yahoo.com", 10)
        expect (manager.name).toEqual("Esperanza");
        expect (manager.id).toEqual(1020);
        expect (manager.email).toEqual("karol@yahoo.com");
        expect (manager.officeNumber).toEqual(10);

        })
    })

    describe ("Test all methods of Manager", () => {
        it ("Test all methods of Manager", ()=>{
            const manager= new Manager ("Mark", 1122, "mark@gmail.com")
            expect (manager.getName()).toEqual ("Mark");
            expect (manager.getId()) .toEqual (1122);
            expect (manager.getEmail()).toEqual ("mark@gmail.com");
        
        })
    })
})