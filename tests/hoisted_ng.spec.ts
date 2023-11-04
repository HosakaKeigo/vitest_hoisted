import { vi, test, expect } from "vitest"
import { sample } from "../src/sample"

const mockSample = vi.fn().mockImplementationOnce(() => "これはmockです")

vi.mock("../src/sample", () => {
  return {
    sample: mockSample
  }
})

test("sample", () => {
  expect(sample()).toBe("これはmockです")
})