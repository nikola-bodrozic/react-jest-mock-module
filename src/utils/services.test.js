import axios from "axios";
import { getHello } from "./services";

describe("should mock axios.get() when calling getHello()", () => {
  it("mocked axios is called", () => {
    getHello();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("http://jsonplaceholder.typicode.com/posts/1");
  });

  // resolve and test promise
  it("checks that mocked value is returned", async () => {
    expect.assertions(1);
    await expect(getHello()).resolves.toEqual({name: "stubbed val"});
  });
});
