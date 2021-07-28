const Employee = require('./lib/Employee');

describe("Employee class", () => {
    it("should be instantiated", () => {
        const employee = new Employee ();
        expect(typeof(employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    })

    it('should have a name property that can be set on instantiation', () => {
        const testValue = 'Dave'
    const employee = new Employee (testValue);
    expect(employee.name).toBe(testValue);
    })

    it('should have an id property that can be set on instantiation', () => {
        const testValue = 1
        const employee = new Employee ( 'Dave', testValue);
        expect(employee.id).toBe(testValue);
        })

        it('should have an email property that can be set on instantiation', () => {
            const testValue = 'idk@email.com'
            const employee = new Employee ('Dave', 1, testValue);
            expect(employee.email).toBe(testValue);
            })


            it("can get name using getName()", () =>{
                const testValue = 'John';
                const employee = new Employee(testValue);
                expect(employee.getName()).toBe(testValue)
            })


            it("can get name using getId()", () =>{
                const testValue = 25;
                const employee = new Employee('dave', testValue);
                expect(employee.getId()).toBe(testValue)
            })


            it("can get name using getEmail()", () =>{
                const testValue = 'email@test.com';
                const employee = new Employee('john', 100, testValue);
                expect(employee.getEmail()).toBe(testValue)
            })
})

