import MessageDisplay from "@/components/MessageDisplay";
import { getMessage } from "@/services/axios";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage once and displays message", async () => {
    const mockMessage = "Yo dood";

    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);
    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toBe(mockMessage);
  });

  it("Displays an error when getMessage call fails", async () => {
    const mockError = "Oops! Something went wrong.";

    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = mount(MessageDisplay);
    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const error = wrapper.find('[data-testid="message-error"]').text();
    expect(error).toBe(mockError);
  });
});
