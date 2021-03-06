import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/vue";
import ErrorToggle from "@/components/ErrorToggle.vue";

describe("Error Toggle", () => {
  it("should display message when button is clicked", async () => {
    render(ErrorToggle);

    const button = screen.getByRole("button", { name: /toggle/i });
    await fireEvent.click(button);

    const message = screen.getByRole("alert");
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(/contact us/i);

    await fireEvent.click(button);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
