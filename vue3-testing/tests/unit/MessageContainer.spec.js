import MessageContainer from "@/components/MessageContainer";
import { mount } from "@vue/test-utils";

describe("MessageContainer", () => {
  it("Wraps the MessageDisplay component", () => {
    const expectedMessage = "Yo dood";
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: `<p data-testid="message-error">${expectedMessage}</p>`,
          },
        },
      },
    });

    const message = wrapper.find('[data-testid="message-error"]').text();
    expect(message).toBe(expectedMessage);
  });
});
