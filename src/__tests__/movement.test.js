const { moveLeft, moveRight, moveUp, moveDown } = require("../movement");

describe("Test the movement functions", () => {
  describe("The move left function", () => {
    it("Should move the robot to the left", () => {
      const currentPosition = { x: 5, y: 5 }
      const input = {...currentPosition}
      const output = { x: 4, y: 5 }
      expect(moveLeft(input)).toEqual(output)
    });
    it("Should not cross the left boundary", () => {
      const currentPosition = { x: 0, y: 5 }
      const input = {...currentPosition}
      const output = { x: 0, y: 5 }
      expect(moveLeft(input)).toEqual(output)
    });
  });

  describe("The move right function", () => {
    it("Should move the robot to the right", () => {
      const currentPosition = { x: 5, y: 5 }
      const input = {...currentPosition}
      const output = { x: 6, y: 5 }
      expect(moveRight(input)).toEqual(output)
    });
    it("Should not cross the right boundary", () => {
      const currentPosition = { x: 9, y: 5 }
      const input = {...currentPosition}
      const output = { x: 9, y: 5 }
      expect(moveRight(input)).toEqual(output)
    });
  });

  describe("The move up function", () => {
    it("Should move the robot up", () => {
      const currentPosition = { x: 5, y: 5 }      
      const input = {...currentPosition}
      const output = { x: 5, y: 6 }
      expect(moveUp(input)).toEqual(output)
    });
    it("Should not cross the upper boundary", () => {
      const currentPosition = { x: 5, y: 9 }
      const input = {...currentPosition}
      const output = { x: 5, y: 9 }
      expect(moveUp(input)).toEqual(output);
    });
  });

  describe("The move down function", () => {
    it("Should move the robot down", () => {
      const currentPosition = { x: 5, y: 5 }
      const input = {...currentPosition}
      const output = { x: 5, y: 4 }
      expect(moveDown(input)).toEqual(output);
    });
    it("Should not cross the lower boundary", () => {
      const currentPosition = { x: 5, y: 0 }
      const input = {...currentPosition}
      const output = { x: 5, y: 0 }
      expect(moveDown(input)).toEqual(output)
    });
  });
});
