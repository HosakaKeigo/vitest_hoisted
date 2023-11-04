import { vi, test, expect } from "vitest"

const mockSample = vi.fn().mockImplementationOnce(() => "これはmockです")

const { sample } = await import("../src/sample")

vi.mock("../src/sample", () => {
  return {
    sample: mockSample
  }
})

test("sample", () => {
  expect(sample()).toBe("これはmockです")
})