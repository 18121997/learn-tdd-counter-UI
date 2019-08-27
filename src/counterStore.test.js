import CounterStore from "./Store/CounterStore";

describe("CounterStore testing", () => {
  it("should test increment counter with 0", () => {
    const counterStore = new CounterStore();
    counterStore.incrementCounter();
    expect(counterStore.counter).toBe(1);
  });
});
