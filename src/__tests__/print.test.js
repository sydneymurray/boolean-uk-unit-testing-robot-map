const { printPosition } = require("../print");

describe("Function that prints current position to terminal",()=>{
  it("Should return the robots current position as a string",()=>{
    const input = { x: 5, y: 4 }
    const output = "Robot is at { x: 5, y: 4 }"
    expect(printPosition(input)).toEqual(output)
  })
})

