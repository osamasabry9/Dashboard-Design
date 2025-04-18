import { render, screen, fireEvent } from "@testing-library/react";
import CustomNotificationButton from "./index";

// Mock Lucide icons
jest.mock("lucide-react", () => ({
  Bell: () => <div data-testid="bell-icon" />,
}));

describe("NotificationButton Component", () => {
  test("renders bell icon", () => {
    render(<CustomNotificationButton />);
    expect(screen.getByTestId("bell-icon")).toBeInTheDocument();
  });

  test("renders notification indicator when hasNotifications is true", () => {
    const { container } = render(
      <CustomNotificationButton hasNotifications={true} />
    );
    expect(
      container.querySelector(".notification-button__indicator")
    ).toBeInTheDocument();
  });

  test("does not render notification indicator when hasNotifications is false", () => {
    const { container } = render(
      <CustomNotificationButton hasNotifications={false} />
    );
    expect(
      container.querySelector(".notification-button__indicator")
    ).not.toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<CustomNotificationButton onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
