const Manager = require("./lib/Manager");

describe("Manager class", () => {
    it("should be instantiated", () => {
        const employee = new Manager ();
        expect(typeof(employee)).toBe("object");
    })

    it('should have a office number property that can be set on instantiation', () => {
        const testValue = 'office number'
    const employee = new Manager ('dave', 45, 'email@email.com', testValue);
    expect(employee.officeNumber).toBe(testValue);
    })


            it("can get me the role via getRole()", () =>{
            const employee = new Manager()
                expect(employee.getRole()).toBe('Manager')
            })
})